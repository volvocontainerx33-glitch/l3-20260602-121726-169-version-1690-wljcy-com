const SELECTORS = {
  mobileToggle: '[data-menu-toggle]',
  mobileMenu: '[data-mobile-menu]',
  hero: '[data-hero]',
  filterPanel: '[data-filter-panel]',
  player: '.js-player'
};

function setupMobileNavigation() {
  const toggle = document.querySelector(SELECTORS.mobileToggle);
  const menu = document.querySelector(SELECTORS.mobileMenu);

  if (!toggle || !menu) {
    return;
  }

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    document.body.classList.toggle('menu-open', isOpen);
    toggle.setAttribute('aria-label', isOpen ? '关闭导航菜单' : '打开导航菜单');
  });
}

function setupHeroCarousel() {
  const hero = document.querySelector(SELECTORS.hero);

  if (!hero) {
    return;
  }

  const slides = Array.from(hero.querySelectorAll('[data-hero-slide]'));
  const dots = Array.from(hero.querySelectorAll('[data-hero-dot]'));
  const prev = hero.querySelector('[data-hero-prev]');
  const next = hero.querySelector('[data-hero-next]');
  let current = 0;
  let timer = null;

  function showSlide(index) {
    if (slides.length === 0) {
      return;
    }

    current = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('is-active', slideIndex === current);
    });

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('is-active', dotIndex === current);
    });
  }

  function startTimer() {
    stopTimer();
    timer = window.setInterval(() => showSlide(current + 1), 5000);
  }

  function stopTimer() {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  }

  prev?.addEventListener('click', () => {
    showSlide(current - 1);
    startTimer();
  });

  next?.addEventListener('click', () => {
    showSlide(current + 1);
    startTimer();
  });

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      showSlide(Number(dot.dataset.heroDot || 0));
      startTimer();
    });
  });

  hero.addEventListener('mouseenter', stopTimer);
  hero.addEventListener('mouseleave', startTimer);
  showSlide(0);
  startTimer();
}

function setupHorizontalScrollers() {
  const sections = document.querySelectorAll('.scroll-section');

  sections.forEach((section) => {
    const track = section.querySelector('[data-scroll-track]');
    const left = section.querySelector('[data-scroll-left]');
    const right = section.querySelector('[data-scroll-right]');

    if (!track) {
      return;
    }

    left?.addEventListener('click', () => {
      track.scrollBy({ left: -420, behavior: 'smooth' });
    });

    right?.addEventListener('click', () => {
      track.scrollBy({ left: 420, behavior: 'smooth' });
    });
  });
}

function setupFilters() {
  const panels = document.querySelectorAll(SELECTORS.filterPanel);

  panels.forEach((panel) => {
    const section = panel.closest('.content-section') || document;
    const cards = Array.from(section.querySelectorAll('.js-filter-card'));
    const keywordInput = panel.querySelector('[data-filter-keyword]');
    const categorySelect = panel.querySelector('[data-filter-category]');
    const typeSelect = panel.querySelector('[data-filter-type]');
    const yearSelect = panel.querySelector('[data-filter-year]');
    const resetButton = panel.querySelector('[data-filter-reset]');
    const emptyState = section.querySelector('[data-filter-empty]');

    function getValue(control, fallback = 'all') {
      return control && control.value ? control.value : fallback;
    }

    function applyFilters() {
      const keyword = (keywordInput?.value || '').trim().toLowerCase();
      const category = getValue(categorySelect);
      const type = getValue(typeSelect);
      const year = getValue(yearSelect);
      let visible = 0;

      cards.forEach((card) => {
        const search = (card.dataset.search || '').toLowerCase();
        const matchesKeyword = !keyword || search.includes(keyword);
        const matchesCategory = category === 'all' || card.dataset.category === category;
        const matchesType = type === 'all' || (card.dataset.type || '').includes(type);
        const matchesYear = year === 'all' || card.dataset.year === year;
        const show = matchesKeyword && matchesCategory && matchesType && matchesYear;

        card.classList.toggle('is-hidden', !show);

        if (show) {
          visible += 1;
        }
      });

      if (emptyState) {
        emptyState.hidden = visible !== 0;
      }
    }

    [keywordInput, categorySelect, typeSelect, yearSelect].forEach((control) => {
      control?.addEventListener('input', applyFilters);
      control?.addEventListener('change', applyFilters);
    });

    resetButton?.addEventListener('click', () => {
      if (keywordInput) {
        keywordInput.value = '';
      }

      [categorySelect, typeSelect, yearSelect].forEach((control) => {
        if (control) {
          control.value = 'all';
        }
      });

      applyFilters();
    });

    applyFilters();
  });
}

async function loadHlsModule() {
  const module = await import('./hls-vendor-dru42stk.js');
  return module.H;
}

async function prepareVideo(video) {
  if (!video || video.dataset.ready === 'true') {
    return;
  }

  const source = video.dataset.src;

  if (!source) {
    return;
  }

  if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = source;
    video.dataset.ready = 'true';
    return;
  }

  try {
    const Hls = await loadHlsModule();

    if (Hls && Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true
      });

      hls.loadSource(source);
      hls.attachMedia(video);
      video.dataset.ready = 'true';
      video._hlsInstance = hls;
      return;
    }
  } catch (error) {
    console.warn('HLS 初始化失败，尝试使用浏览器原生播放。', error);
  }

  video.src = source;
  video.dataset.ready = 'true';
}

function setupPlayers() {
  const players = document.querySelectorAll(SELECTORS.player);

  players.forEach((player) => {
    const video = player.querySelector('.js-hls-player');
    const button = player.querySelector('[data-player-button]');

    if (!video) {
      return;
    }

    prepareVideo(video);

    button?.addEventListener('click', async () => {
      await prepareVideo(video);
      button.classList.add('is-hidden');
      video.controls = true;

      try {
        await video.play();
      } catch (error) {
        video.focus();
      }
    });

    video.addEventListener('play', () => {
      button?.classList.add('is-hidden');
    });

    video.addEventListener('click', async () => {
      await prepareVideo(video);
    });
  });
}

function cardTemplate(movie) {
  const title = escapeHtml(movie.title);
  const oneLine = escapeHtml(movie.oneLine);
  const category = escapeHtml(movie.categoryName);
  const year = escapeHtml(movie.year);
  const region = escapeHtml(movie.region);
  const duration = escapeHtml(movie.duration);
  const file = escapeAttribute(movie.file);
  const cover = escapeAttribute(movie.cover);

  return `
      <article class="video-card">
        <a href="${file}" class="video-card-link" aria-label="观看${title}">
          <div class="video-card-media">
            <img class="video-card-cover" src="${cover}" alt="${title}" loading="lazy">
            <span class="duration-badge">${duration}</span>
          </div>
          <div class="video-card-content">
            <h3 class="video-card-title">${title}</h3>
            <p class="video-card-description">${oneLine}</p>
            <div class="video-card-meta">
              <span>${category}</span>
              <span>${year}</span>
              <span>${region}</span>
            </div>
          </div>
        </a>
      </article>`;
}

function escapeHtml(value) {
  return String(value || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll('`', '&#096;');
}

async function setupSearchPage() {
  const results = document.querySelector('[data-search-results]');
  const empty = document.querySelector('[data-search-empty]');
  const input = document.querySelector('[data-search-page-input]');

  if (!results) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const query = (params.get('q') || '').trim();

  if (input) {
    input.value = query;
  }

  if (!query) {
    if (empty) {
      empty.hidden = false;
    }
    return;
  }

  const { movies } = await import('./search-index.js');
  const keyword = query.toLowerCase();
  const matched = movies.filter((movie) => {
    return [
      movie.title,
      movie.region,
      movie.type,
      movie.year,
      movie.genre,
      movie.tags,
      movie.oneLine
    ].join(' ').toLowerCase().includes(keyword);
  });

  results.innerHTML = matched.map(cardTemplate).join('\n');

  if (empty) {
    empty.hidden = matched.length > 0;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  setupMobileNavigation();
  setupHeroCarousel();
  setupHorizontalScrollers();
  setupFilters();
  setupPlayers();
  setupSearchPage();
});
