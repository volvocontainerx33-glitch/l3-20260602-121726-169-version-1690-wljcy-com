(function () {
  function $(selector, root) {
    return (root || document).querySelector(selector);
  }

  function $all(selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }

  function normalize(value) {
    return String(value || '').toLowerCase().trim();
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function initMenu() {
    var toggle = $('[data-menu-toggle]');
    var menu = $('[data-mobile-menu]');
    if (!toggle || !menu) {
      return;
    }
    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  function initImageFallbacks() {
    $all('img').forEach(function (img) {
      img.addEventListener('error', function () {
        var parent = img.parentElement;
        img.style.display = 'none';
        if (parent) {
          parent.classList.add('image-missing');
        }
        var hero = img.closest('.hero-card');
        if (hero) {
          hero.classList.add('image-missing');
        }
      }, { once: true });
    });
  }

  function initFilters() {
    var panels = $all('[data-filter-panel]');
    panels.forEach(function (panel) {
      var section = panel.parentElement || document;
      var cards = $all('[data-filter-card]', section);
      var search = $('[data-filter-input]', panel);
      var selects = $all('[data-filter-select]', panel);
      var count = $('[data-filter-count]', panel);

      function apply() {
        var query = normalize(search ? search.value : '');
        var active = {};
        selects.forEach(function (select) {
          active[select.getAttribute('data-filter-select')] = normalize(select.value);
        });
        var visible = 0;
        cards.forEach(function (card) {
          var text = normalize([
            card.getAttribute('data-title'),
            card.getAttribute('data-region'),
            card.getAttribute('data-type'),
            card.getAttribute('data-year'),
            card.getAttribute('data-genre'),
            card.getAttribute('data-tags')
          ].join(' '));
          var matched = true;
          if (query && text.indexOf(query) === -1) {
            matched = false;
          }
          Object.keys(active).forEach(function (key) {
            var expected = active[key];
            if (!expected) {
              return;
            }
            var actual = normalize(card.getAttribute('data-' + key));
            if (actual !== expected) {
              matched = false;
            }
          });
          card.classList.toggle('is-hidden', !matched);
          if (matched) {
            visible += 1;
          }
        });
        if (count) {
          count.textContent = '当前显示 ' + visible + ' 条';
        }
      }

      if (search) {
        search.addEventListener('input', apply);
      }
      selects.forEach(function (select) {
        select.addEventListener('change', apply);
      });
      apply();
    });
  }

  function setupPlayer(shell) {
    var video = $('.video-node', shell);
    var button = $('[data-player-button]', shell);
    var status = $('[data-player-status]', shell);
    var source = shell.getAttribute('data-src');
    var hlsInstance = null;
    var initialized = false;
    var ready = false;
    var playWhenReady = false;

    function setStatus(message) {
      if (status) {
        status.textContent = message || '';
      }
    }

    function playVideo() {
      if (!video) {
        return;
      }
      var promise = video.play();
      if (promise && typeof promise.catch === 'function') {
        promise.catch(function () {
          setStatus('点击播放器继续播放');
        });
      }
    }

    function markReady() {
      ready = true;
      setStatus('');
      if (playWhenReady) {
        playWhenReady = false;
        playVideo();
      }
    }

    function initializeSource() {
      if (initialized || !video) {
        return;
      }
      initialized = true;
      if (!source) {
        setStatus('当前视频暂时无法播放');
        return;
      }
      setStatus('正在准备');
      if (window.Hls && window.Hls.isSupported()) {
        hlsInstance = new window.Hls({
          enableWorker: true,
          lowLatencyMode: true
        });
        hlsInstance.loadSource(source);
        hlsInstance.attachMedia(video);
        hlsInstance.on(window.Hls.Events.MANIFEST_PARSED, markReady);
        hlsInstance.on(window.Hls.Events.ERROR, function (event, data) {
          if (data && data.fatal) {
            setStatus('当前网络暂时无法播放');
          }
        });
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = source;
        video.addEventListener('loadedmetadata', markReady, { once: true });
      } else {
        setStatus('当前浏览器不支持 HLS 播放');
      }
    }

    function startPlayback() {
      if (!initialized) {
        initializeSource();
      }
      if (ready || (video && video.readyState > 0)) {
        playVideo();
      } else {
        playWhenReady = true;
        setStatus('正在加载');
      }
    }

    initializeSource();

    if (button) {
      button.addEventListener('click', startPlayback);
    }
    if (video) {
      video.addEventListener('click', function () {
        if (!initialized || video.paused) {
          startPlayback();
        }
      });
      video.addEventListener('play', function () {
        shell.classList.add('is-playing');
        setStatus('');
      });
      video.addEventListener('pause', function () {
        shell.classList.remove('is-playing');
      });
      video.addEventListener('ended', function () {
        shell.classList.remove('is-playing');
      });
    }
    window.addEventListener('pagehide', function () {
      if (hlsInstance) {
        hlsInstance.destroy();
      }
    });
  }

  function initPlayers() {
    $all('[data-video-player]').forEach(setupPlayer);
  }

  function renderSearchCard(movie) {
    return [
      '<article class="movie-card" data-filter-card data-title="' + escapeHtml(movie.title) + '" data-region="' + escapeHtml(movie.region) + '" data-type="' + escapeHtml(movie.type) + '" data-year="' + escapeHtml(movie.year) + '" data-genre="' + escapeHtml(movie.genre) + '" data-tags="' + escapeHtml(movie.tags || '') + '">',
      '  <a class="movie-card-link" href="' + escapeHtml(movie.url) + '" aria-label="' + escapeHtml(movie.title) + '">',
      '    <figure class="poster-frame">',
      '      <img src="' + escapeHtml(movie.image) + '" alt="' + escapeHtml(movie.title) + '" loading="lazy">',
      '    </figure>',
      '    <div class="movie-card-body">',
      '      <div class="card-meta-row"><span>' + escapeHtml(movie.region) + '</span><span>' + escapeHtml(movie.year) + '</span><span>' + escapeHtml(movie.type) + '</span></div>',
      '      <h3>' + escapeHtml(movie.title) + '</h3>',
      '      <p>' + escapeHtml(movie.oneLine || '') + '</p>',
      '      <div class="tag-line">' + escapeHtml(movie.genre || '') + '</div>',
      '    </div>',
      '  </a>',
      '</article>'
    ].join('');
  }

  function initSearchPage() {
    var results = $('#searchResults');
    var summary = $('[data-search-summary]');
    var input = $('#searchPageInput');
    if (!results || !window.MOVIE_INDEX) {
      return;
    }
    var params = new URLSearchParams(window.location.search);
    var query = params.get('q') || '';
    if (input) {
      input.value = query;
    }
    var q = normalize(query);
    var data = window.MOVIE_INDEX.slice();
    var matches = q
      ? data.filter(function (movie) {
          return normalize([
            movie.title,
            movie.region,
            movie.type,
            movie.year,
            movie.genre,
            movie.tags,
            movie.oneLine
          ].join(' ')).indexOf(q) !== -1;
        })
      : data.slice(0, 72);
    results.innerHTML = matches.slice(0, 240).map(renderSearchCard).join('');
    if (summary) {
      summary.textContent = q ? '搜索结果 ' + matches.length + ' 条' : '热门影片推荐';
    }
    initImageFallbacks();
  }

  document.addEventListener('DOMContentLoaded', function () {
    initMenu();
    initImageFallbacks();
    initFilters();
    initPlayers();
    initSearchPage();
  });
})();
