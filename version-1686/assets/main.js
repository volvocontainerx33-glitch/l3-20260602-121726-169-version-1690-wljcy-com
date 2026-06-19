(function () {
    "use strict";

    function selectAll(selector, root) {
        return Array.prototype.slice.call((root || document).querySelectorAll(selector));
    }

    function normalize(value) {
        return String(value || "").trim().toLowerCase();
    }

    function setupNavigation() {
        var toggle = document.querySelector("[data-nav-toggle]");
        var nav = document.querySelector("[data-site-nav]");

        if (!toggle || !nav) {
            return;
        }

        toggle.addEventListener("click", function () {
            nav.classList.toggle("is-open");
        });
    }

    function setupHeroCarousel() {
        selectAll("[data-hero-carousel]").forEach(function (carousel) {
            var slides = selectAll(".hero-slide", carousel);
            var dots = selectAll("[data-hero-dot]", carousel);
            var prev = carousel.querySelector("[data-hero-prev]");
            var next = carousel.querySelector("[data-hero-next]");
            var current = 0;
            var timer = null;

            if (!slides.length) {
                return;
            }

            function show(index) {
                current = (index + slides.length) % slides.length;
                slides.forEach(function (slide, slideIndex) {
                    slide.classList.toggle("is-active", slideIndex === current);
                });
                dots.forEach(function (dot, dotIndex) {
                    dot.classList.toggle("is-active", dotIndex === current);
                });
            }

            function start() {
                stop();
                timer = window.setInterval(function () {
                    show(current + 1);
                }, 6200);
            }

            function stop() {
                if (timer) {
                    window.clearInterval(timer);
                    timer = null;
                }
            }

            if (prev) {
                prev.addEventListener("click", function () {
                    show(current - 1);
                    start();
                });
            }

            if (next) {
                next.addEventListener("click", function () {
                    show(current + 1);
                    start();
                });
            }

            dots.forEach(function (dot, index) {
                dot.addEventListener("click", function () {
                    show(index);
                    start();
                });
            });

            carousel.addEventListener("mouseenter", stop);
            carousel.addEventListener("mouseleave", start);
            show(0);
            start();
        });
    }

    function setupGlobalSearch() {
        selectAll("[data-global-search]").forEach(function (form) {
            form.addEventListener("submit", function (event) {
                event.preventDefault();
                var input = form.querySelector("input[name='q']");
                var target = form.getAttribute("data-search-target") || "./search.html";
                var query = input ? input.value.trim() : "";
                var url = query ? target + "?q=" + encodeURIComponent(query) : target;
                window.location.href = url;
            });
        });
    }

    function setupFilterPanels() {
        selectAll("[data-filter-scope]").forEach(function (scope) {
            var cards = selectAll(".movie-card", scope);
            var queryInput = scope.querySelector("[data-filter-field='query']");
            var regionSelect = scope.querySelector("[data-filter-field='region']");
            var typeSelect = scope.querySelector("[data-filter-field='type']");
            var yearSelect = scope.querySelector("[data-filter-field='year']");
            var empty = scope.querySelector("[data-empty-message]");
            var resetButton = scope.querySelector("[data-filter-reset]");
            var params = new URLSearchParams(window.location.search);
            var initialQuery = params.get("q");

            if (queryInput && initialQuery) {
                queryInput.value = initialQuery;
            }

            function applyFilters() {
                var query = normalize(queryInput ? queryInput.value : "");
                var region = normalize(regionSelect ? regionSelect.value : "");
                var type = normalize(typeSelect ? typeSelect.value : "");
                var year = normalize(yearSelect ? yearSelect.value : "");
                var visible = 0;

                cards.forEach(function (card) {
                    var haystack = normalize([
                        card.dataset.title,
                        card.dataset.region,
                        card.dataset.type,
                        card.dataset.year,
                        card.dataset.genre,
                        card.dataset.tags
                    ].join(" "));
                    var match = true;

                    if (query && haystack.indexOf(query) === -1) {
                        match = false;
                    }

                    if (region && normalize(card.dataset.region).indexOf(region) === -1) {
                        match = false;
                    }

                    if (type && normalize(card.dataset.type).indexOf(type) === -1) {
                        match = false;
                    }

                    if (year && normalize(card.dataset.year).indexOf(year) === -1) {
                        match = false;
                    }

                    card.classList.toggle("is-hidden", !match);
                    if (match) {
                        visible += 1;
                    }
                });

                if (empty) {
                    empty.classList.toggle("is-visible", visible === 0);
                }
            }

            [queryInput, regionSelect, typeSelect, yearSelect].forEach(function (field) {
                if (field) {
                    field.addEventListener("input", applyFilters);
                    field.addEventListener("change", applyFilters);
                }
            });

            if (resetButton) {
                resetButton.addEventListener("click", function () {
                    window.setTimeout(applyFilters, 0);
                });
            }

            applyFilters();
        });
    }

    window.initMoviePlayer = function (playerId, sourceUrl) {
        var player = document.getElementById(playerId);

        if (!player) {
            return;
        }

        var video = player.querySelector("video");
        var overlay = player.querySelector(".player-overlay");
        var hlsInstance = null;
        var isReady = false;

        if (!video || !sourceUrl) {
            return;
        }

        function prepare() {
            if (isReady) {
                return;
            }

            if (video.canPlayType("application/vnd.apple.mpegurl")) {
                video.src = sourceUrl;
                isReady = true;
                return;
            }

            if (window.Hls && window.Hls.isSupported()) {
                hlsInstance = new window.Hls({
                    enableWorker: true,
                    lowLatencyMode: true,
                    backBufferLength: 90
                });
                hlsInstance.loadSource(sourceUrl);
                hlsInstance.attachMedia(video);
                isReady = true;
                return;
            }

            video.src = sourceUrl;
            isReady = true;
        }

        function play() {
            prepare();
            video.controls = true;
            if (overlay) {
                overlay.classList.add("is-hidden");
            }
            var result = video.play();
            if (result && typeof result.catch === "function") {
                result.catch(function () {
                    if (overlay) {
                        overlay.classList.remove("is-hidden");
                    }
                });
            }
        }

        if (overlay) {
            overlay.addEventListener("click", play);
        }

        video.addEventListener("click", function () {
            if (video.paused) {
                play();
            }
        });

        window.addEventListener("beforeunload", function () {
            if (hlsInstance) {
                hlsInstance.destroy();
            }
        });
    };

    document.addEventListener("DOMContentLoaded", function () {
        setupNavigation();
        setupHeroCarousel();
        setupGlobalSearch();
        setupFilterPanels();
    });
})();
