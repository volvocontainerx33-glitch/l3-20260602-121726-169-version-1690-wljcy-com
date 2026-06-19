(function () {
  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  }

  function normalize(value) {
    return (value || "").toString().toLowerCase().trim();
  }

  function setupMenu() {
    var button = document.querySelector("[data-menu-toggle]");
    var nav = document.querySelector("[data-mobile-nav]");
    if (!button || !nav) {
      return;
    }
    button.addEventListener("click", function () {
      nav.classList.toggle("is-open");
    });
  }

  function setupHero() {
    var hero = document.querySelector("[data-hero]");
    if (!hero) {
      return;
    }
    var slides = Array.prototype.slice.call(hero.querySelectorAll(".hero-slide"));
    var dots = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-dot]"));
    if (slides.length <= 1) {
      return;
    }
    var index = 0;
    var timer = null;

    function show(nextIndex) {
      index = (nextIndex + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle("is-active", slideIndex === index);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle("is-active", dotIndex === index);
      });
    }

    function start() {
      timer = window.setInterval(function () {
        show(index + 1);
      }, 5600);
    }

    function restart() {
      if (timer) {
        window.clearInterval(timer);
      }
      start();
    }

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        show(parseInt(dot.getAttribute("data-hero-dot"), 10));
        restart();
      });
    });

    start();
  }

  function setupFilters() {
    var grid = document.querySelector("[data-filter-grid]");
    if (!grid) {
      return;
    }
    var input = document.querySelector("[data-filter-input]");
    var sort = document.querySelector("[data-sort-select]");
    var items = Array.prototype.slice.call(grid.children);
    var params = new URLSearchParams(window.location.search);
    var initial = params.get("q");

    if (initial && input) {
      input.value = initial;
    }

    function textOf(item) {
      return normalize([
        item.getAttribute("data-title"),
        item.getAttribute("data-region"),
        item.getAttribute("data-type"),
        item.getAttribute("data-genre"),
        item.getAttribute("data-tags"),
        item.getAttribute("data-year"),
        item.textContent
      ].join(" "));
    }

    function apply() {
      var query = input ? normalize(input.value) : "";
      items.forEach(function (item) {
        item.style.display = textOf(item).indexOf(query) > -1 ? "" : "none";
      });
      if (sort) {
        var sorted = items.slice();
        var value = sort.value;
        sorted.sort(function (a, b) {
          if (value === "year") {
            return parseInt(b.getAttribute("data-year") || "0", 10) - parseInt(a.getAttribute("data-year") || "0", 10);
          }
          if (value === "hot") {
            return parseInt(b.getAttribute("data-hot") || "0", 10) - parseInt(a.getAttribute("data-hot") || "0", 10);
          }
          if (value === "title") {
            return normalize(a.getAttribute("data-title")).localeCompare(normalize(b.getAttribute("data-title")), "zh-Hans-CN");
          }
          return 0;
        });
        sorted.forEach(function (item) {
          grid.appendChild(item);
        });
      }
    }

    if (input) {
      input.addEventListener("input", apply);
    }
    if (sort) {
      sort.addEventListener("change", apply);
    }
    apply();
  }

  ready(function () {
    setupMenu();
    setupHero();
    setupFilters();
  });
})();

function initMoviePlayer(videoId, buttonId, coverId, videoUrl) {
  var video = document.getElementById(videoId);
  var button = document.getElementById(buttonId);
  var cover = document.getElementById(coverId);

  if (!video || !videoUrl) {
    return;
  }

  function bindVideo() {
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoUrl;
      return;
    }
    if (window.Hls && window.Hls.isSupported()) {
      var hls = new window.Hls();
      hls.loadSource(videoUrl);
      hls.attachMedia(video);
      return;
    }
    video.src = videoUrl;
  }

  function startPlayback() {
    bindVideo();
    if (cover) {
      cover.classList.add("is-hidden");
    }
    var playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(function () {
        if (cover) {
          cover.classList.remove("is-hidden");
        }
      });
    }
  }

  if (cover) {
    cover.addEventListener("click", startPlayback);
  }
  if (button) {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      startPlayback();
    });
  }
  video.addEventListener("play", function () {
    if (cover) {
      cover.classList.add("is-hidden");
    }
  });
}
