(function () {
    function onReady(callback) {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", callback);
        } else {
            callback();
        }
    }

    function setupMenu() {
        var button = document.querySelector("[data-menu-toggle]");
        var menu = document.getElementById("mobile-menu");
        if (!button || !menu) {
            return;
        }
        button.addEventListener("click", function () {
            menu.classList.toggle("open");
        });
        menu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                menu.classList.remove("open");
            });
        });
    }

    function setupHero() {
        var slider = document.querySelector("[data-hero-slider]");
        if (!slider) {
            return;
        }
        var slides = Array.prototype.slice.call(slider.querySelectorAll("[data-hero-slide]"));
        var dots = Array.prototype.slice.call(slider.querySelectorAll("[data-hero-dot]"));
        var thumbs = Array.prototype.slice.call(slider.querySelectorAll("[data-hero-thumb]"));
        var prev = slider.querySelector("[data-hero-prev]");
        var next = slider.querySelector("[data-hero-next]");
        var index = 0;
        var timer = null;

        function setActive(nextIndex) {
            if (!slides.length) {
                return;
            }
            index = (nextIndex + slides.length) % slides.length;
            slides.forEach(function (slide, itemIndex) {
                slide.classList.toggle("active", itemIndex === index);
            });
            dots.forEach(function (dot, itemIndex) {
                dot.classList.toggle("active", itemIndex === index);
            });
            thumbs.forEach(function (thumb, itemIndex) {
                thumb.classList.toggle("active", itemIndex === index);
            });
        }

        function restart() {
            if (timer) {
                window.clearInterval(timer);
            }
            timer = window.setInterval(function () {
                setActive(index + 1);
            }, 5200);
        }

        dots.forEach(function (dot) {
            dot.addEventListener("click", function () {
                setActive(Number(dot.getAttribute("data-hero-dot")) || 0);
                restart();
            });
        });

        thumbs.forEach(function (thumb) {
            thumb.addEventListener("mouseenter", function () {
                setActive(Number(thumb.getAttribute("data-hero-thumb")) || 0);
                restart();
            });
        });

        if (prev) {
            prev.addEventListener("click", function () {
                setActive(index - 1);
                restart();
            });
        }

        if (next) {
            next.addEventListener("click", function () {
                setActive(index + 1);
                restart();
            });
        }

        setActive(0);
        restart();
    }

    function setupFilters() {
        var input = document.querySelector("[data-filter-input]");
        var select = document.querySelector("[data-filter-select]");
        var cards = Array.prototype.slice.call(document.querySelectorAll(".filter-card"));
        var empty = document.querySelector("[data-result-state]");
        if (!input && !select) {
            return;
        }

        function apply() {
            var query = input ? input.value.trim().toLowerCase() : "";
            var category = select ? select.value : "";
            var visible = 0;
            cards.forEach(function (card) {
                var text = (card.getAttribute("data-search") || "").toLowerCase();
                var cardCategory = card.getAttribute("data-category") || "";
                var matchedQuery = !query || text.indexOf(query) !== -1;
                var matchedCategory = !category || cardCategory === category;
                var matched = matchedQuery && matchedCategory;
                card.hidden = !matched;
                if (matched) {
                    visible += 1;
                }
            });
            if (empty) {
                empty.hidden = visible !== 0;
            }
        }

        if (input) {
            input.addEventListener("input", apply);
        }
        if (select) {
            select.addEventListener("change", apply);
        }
        apply();
    }

    function setupPlayers() {
        document.querySelectorAll(".movie-player").forEach(function (player) {
            var video = player.querySelector("video");
            var button = player.querySelector("[data-play-button]");
            var source = player.getAttribute("data-src");
            var loaded = false;
            var hls = null;
            if (!video || !source) {
                return;
            }

            function begin() {
                player.classList.add("is-playing");
                video.controls = true;
                var promise = video.play();
                if (promise && typeof promise.catch === "function") {
                    promise.catch(function () {});
                }
            }

            function load() {
                if (loaded) {
                    return;
                }
                loaded = true;
                if (video.canPlayType("application/vnd.apple.mpegurl")) {
                    video.src = source;
                    video.addEventListener("loadedmetadata", begin, { once: true });
                    begin();
                    return;
                }
                if (window.Hls && window.Hls.isSupported()) {
                    hls = new window.Hls({ enableWorker: true, lowLatencyMode: true });
                    hls.loadSource(source);
                    hls.attachMedia(video);
                    hls.on(window.Hls.Events.MANIFEST_PARSED, begin);
                    begin();
                    return;
                }
                video.src = source;
                begin();
            }

            function toggle() {
                if (!loaded) {
                    load();
                    return;
                }
                if (video.paused) {
                    begin();
                } else {
                    video.pause();
                }
            }

            if (button) {
                button.addEventListener("click", function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    load();
                });
            }

            video.addEventListener("click", function () {
                toggle();
            });

            video.addEventListener("play", function () {
                player.classList.add("is-playing");
            });

            video.addEventListener("pause", function () {
                if (loaded) {
                    player.classList.remove("is-playing");
                }
            });

            window.addEventListener("beforeunload", function () {
                if (hls) {
                    hls.destroy();
                }
            });
        });
    }

    onReady(function () {
        setupMenu();
        setupHero();
        setupFilters();
        setupPlayers();
    });
})();
