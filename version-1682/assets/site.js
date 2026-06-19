(function () {
  var navToggle = document.querySelector('[data-nav-toggle]');
  var mainNav = document.querySelector('[data-main-nav]');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      mainNav.classList.toggle('is-open');
    });
  }

  function setupHeroSlider() {
    var slider = document.querySelector('[data-hero-slider]');
    if (!slider) {
      return;
    }

    var slides = Array.prototype.slice.call(slider.querySelectorAll('[data-hero-slide]'));
    var dots = Array.prototype.slice.call(slider.querySelectorAll('[data-hero-dot]'));
    var currentIndex = 0;

    function showSlide(index) {
      currentIndex = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('is-active', slideIndex === currentIndex);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle('is-active', dotIndex === currentIndex);
      });
    }

    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        showSlide(Number(dot.getAttribute('data-hero-dot')) || 0);
      });
    });

    if (slides.length > 1) {
      window.setInterval(function () {
        showSlide(currentIndex + 1);
      }, 5200);
    }
  }

  function uniqueSorted(values) {
    var map = Object.create(null);
    values.forEach(function (value) {
      if (value) {
        map[value] = true;
      }
    });
    return Object.keys(map).sort(function (a, b) {
      var numberA = Number(a);
      var numberB = Number(b);
      if (!Number.isNaN(numberA) && !Number.isNaN(numberB)) {
        return numberB - numberA;
      }
      return a.localeCompare(b, 'zh-Hans-CN');
    });
  }

  function setupFilters() {
    var forms = Array.prototype.slice.call(document.querySelectorAll('[data-filter-form]'));

    forms.forEach(function (form) {
      var targetSelector = form.getAttribute('data-target') || '[data-card]';
      var cards = Array.prototype.slice.call(document.querySelectorAll(targetSelector));
      var searchInput = form.querySelector('[data-search-input]');
      var yearFilter = form.querySelector('[data-year-filter]');
      var regionFilter = form.querySelector('[data-region-filter]');
      var countOutput = form.querySelector('[data-result-count]');

      if (!cards.length) {
        return;
      }

      if (yearFilter) {
        uniqueSorted(cards.map(function (card) {
          return card.getAttribute('data-year');
        })).forEach(function (year) {
          var option = document.createElement('option');
          option.value = year;
          option.textContent = year;
          yearFilter.appendChild(option);
        });
      }

      if (regionFilter) {
        uniqueSorted(cards.map(function (card) {
          return card.getAttribute('data-region');
        })).forEach(function (region) {
          var option = document.createElement('option');
          option.value = region;
          option.textContent = region;
          regionFilter.appendChild(option);
        });
      }

      function applyFilters() {
        var keyword = searchInput ? searchInput.value.trim().toLowerCase() : '';
        var selectedYear = yearFilter ? yearFilter.value : '';
        var selectedRegion = regionFilter ? regionFilter.value : '';
        var visibleCount = 0;

        cards.forEach(function (card) {
          var searchText = (card.getAttribute('data-search') || '').toLowerCase();
          var year = card.getAttribute('data-year') || '';
          var region = card.getAttribute('data-region') || '';
          var matchesKeyword = !keyword || searchText.indexOf(keyword) !== -1;
          var matchesYear = !selectedYear || year === selectedYear;
          var matchesRegion = !selectedRegion || region === selectedRegion;
          var isVisible = matchesKeyword && matchesYear && matchesRegion;

          card.hidden = !isVisible;
          if (isVisible) {
            visibleCount += 1;
          }
        });

        if (countOutput) {
          countOutput.textContent = '当前显示 ' + visibleCount + ' 部';
        }
      }

      [searchInput, yearFilter, regionFilter].forEach(function (control) {
        if (control) {
          control.addEventListener('input', applyFilters);
          control.addEventListener('change', applyFilters);
        }
      });

      applyFilters();
    });
  }

  function loadHlsLibrary() {
    if (window.Hls) {
      return Promise.resolve(window.Hls);
    }

    return new Promise(function (resolve, reject) {
      var script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/hls.js@1.5.20/dist/hls.min.js';
      script.async = true;
      script.onload = function () {
        resolve(window.Hls);
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  function setupPlayers() {
    var players = Array.prototype.slice.call(document.querySelectorAll('[data-hls]'));

    players.forEach(function (video) {
      var source = video.getAttribute('data-hls');
      var wrap = video.closest('.player-wrap');
      var playButton = wrap ? wrap.querySelector('[data-play]') : null;

      function markPlaying() {
        if (wrap) {
          wrap.classList.add('is-playing');
        }
      }

      function markPaused() {
        if (wrap) {
          wrap.classList.remove('is-playing');
        }
      }

      function attachSource() {
        if (!source) {
          return;
        }

        if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = source;
          return;
        }

        loadHlsLibrary()
          .then(function (Hls) {
            if (Hls && Hls.isSupported()) {
              var hls = new Hls({
                enableWorker: true,
                lowLatencyMode: true
              });
              hls.loadSource(source);
              hls.attachMedia(video);
            } else {
              video.src = source;
            }
          })
          .catch(function () {
            video.src = source;
          });
      }

      attachSource();

      if (playButton) {
        playButton.addEventListener('click', function () {
          video.play();
        });
      }

      video.addEventListener('play', markPlaying);
      video.addEventListener('pause', markPaused);
      video.addEventListener('ended', markPaused);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    setupHeroSlider();
    setupFilters();
    setupPlayers();
  });
})();
