(function () {
    function initMobileMenu() {
        var toggle = document.querySelector('[data-menu-toggle]');
        var menu = document.querySelector('[data-mobile-menu]');
        if (!toggle || !menu) {
            return;
        }
        toggle.addEventListener('click', function () {
            menu.classList.toggle('is-open');
        });
    }

    function initHeroSlider() {
        var sliders = document.querySelectorAll('[data-hero-slider]');
        sliders.forEach(function (slider) {
            var slides = Array.prototype.slice.call(slider.querySelectorAll('.hero-slide'));
            var dots = Array.prototype.slice.call(slider.querySelectorAll('[data-hero-dot]'));
            var prev = slider.querySelector('[data-hero-prev]');
            var next = slider.querySelector('[data-hero-next]');
            var index = 0;
            var timer = null;

            function show(nextIndex) {
                if (!slides.length) {
                    return;
                }
                index = (nextIndex + slides.length) % slides.length;
                slides.forEach(function (slide, slideIndex) {
                    slide.classList.toggle('is-active', slideIndex === index);
                });
                dots.forEach(function (dot, dotIndex) {
                    dot.classList.toggle('is-active', dotIndex === index);
                });
            }

            function play() {
                clearInterval(timer);
                timer = setInterval(function () {
                    show(index + 1);
                }, 5200);
            }

            dots.forEach(function (dot) {
                dot.addEventListener('click', function () {
                    show(Number(dot.getAttribute('data-hero-dot')) || 0);
                    play();
                });
            });

            if (prev) {
                prev.addEventListener('click', function () {
                    show(index - 1);
                    play();
                });
            }

            if (next) {
                next.addEventListener('click', function () {
                    show(index + 1);
                    play();
                });
            }

            slider.addEventListener('mouseenter', function () {
                clearInterval(timer);
            });

            slider.addEventListener('mouseleave', play);
            show(0);
            play();
        });
    }

    function getText(card) {
        return [
            card.getAttribute('data-title') || '',
            card.getAttribute('data-year') || '',
            card.getAttribute('data-region') || '',
            card.getAttribute('data-type') || '',
            card.getAttribute('data-category') || '',
            card.textContent || ''
        ].join(' ').toLowerCase();
    }

    function initSearchPage() {
        var root = document.querySelector('[data-search-page]');
        if (!root) {
            return;
        }

        var input = root.querySelector('[data-search-input]');
        var yearSelect = root.querySelector('[data-filter-year]');
        var typeSelect = root.querySelector('[data-filter-type]');
        var categorySelect = root.querySelector('[data-filter-category]');
        var empty = root.querySelector('[data-search-empty]');
        var cards = Array.prototype.slice.call(root.querySelectorAll('[data-movie-card]'));
        var params = new URLSearchParams(window.location.search);
        var initialQuery = params.get('q') || '';

        if (input && initialQuery) {
            input.value = initialQuery;
        }

        function apply() {
            var query = input ? input.value.trim().toLowerCase() : '';
            var year = yearSelect ? yearSelect.value : '';
            var type = typeSelect ? typeSelect.value : '';
            var category = categorySelect ? categorySelect.value : '';
            var visible = 0;

            cards.forEach(function (card) {
                var text = getText(card);
                var matchQuery = !query || text.indexOf(query) !== -1;
                var matchYear = !year || card.getAttribute('data-year') === year;
                var matchType = !type || card.getAttribute('data-type') === type;
                var matchCategory = !category || card.getAttribute('data-category') === category;
                var matched = matchQuery && matchYear && matchType && matchCategory;
                card.style.display = matched ? '' : 'none';
                if (matched) {
                    visible += 1;
                }
            });

            if (empty) {
                empty.classList.toggle('is-visible', visible === 0);
            }
        }

        [input, yearSelect, typeSelect, categorySelect].forEach(function (control) {
            if (control) {
                control.addEventListener('input', apply);
                control.addEventListener('change', apply);
            }
        });

        apply();
    }

    window.initPlayer = function (source) {
        var root = document.querySelector('[data-player]');
        if (!root) {
            return;
        }

        var video = root.querySelector('video');
        var cover = root.querySelector('[data-player-cover]');
        var errorBox = root.querySelector('[data-player-error]');
        var hls = null;
        var loaded = false;
        var loading = null;

        function showError(message) {
            if (errorBox) {
                errorBox.textContent = message;
                errorBox.classList.add('is-visible');
            }
        }

        function load() {
            if (loaded) {
                return Promise.resolve();
            }
            if (loading) {
                return loading;
            }
            loading = new Promise(function (resolve) {
                if (video.canPlayType('application/vnd.apple.mpegurl')) {
                    video.src = source;
                    loaded = true;
                    resolve();
                    return;
                }

                if (window.Hls && window.Hls.isSupported()) {
                    hls = new window.Hls({
                        enableWorker: true,
                        lowLatencyMode: true
                    });
                    hls.loadSource(source);
                    hls.attachMedia(video);
                    hls.on(window.Hls.Events.MANIFEST_PARSED, function () {
                        loaded = true;
                        resolve();
                    });
                    hls.on(window.Hls.Events.ERROR, function (event, data) {
                        if (data && data.fatal) {
                            showError('播放暂时不可用，请稍后重试');
                        }
                    });
                    return;
                }

                video.src = source;
                loaded = true;
                resolve();
            });
            return loading;
        }

        function start() {
            load().then(function () {
                var playResult = video.play();
                if (playResult && typeof playResult.catch === 'function') {
                    playResult.catch(function () {
                        showError('点击视频区域可继续播放');
                    });
                }
            });
        }

        if (cover) {
            cover.addEventListener('click', start);
        }

        video.addEventListener('click', function () {
            if (!loaded || video.paused) {
                start();
            } else {
                video.pause();
            }
        });

        video.addEventListener('playing', function () {
            root.classList.add('is-playing');
        });

        video.addEventListener('pause', function () {
            root.classList.remove('is-playing');
        });

        window.addEventListener('beforeunload', function () {
            if (hls) {
                hls.destroy();
            }
        });
    };

    document.addEventListener('DOMContentLoaded', function () {
        initMobileMenu();
        initHeroSlider();
        initSearchPage();
    });
})();
