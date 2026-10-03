(function () {
    "use strict";

    var root = document.querySelector("[data-slider]");

    if (!root) {
        return;
    }

    var track = root.querySelector("[data-slider-track]");
    var slides = Array.prototype.slice.call(root.querySelectorAll(".slider__slide"));
    var dotsBox = root.querySelector("[data-slider-dots]");
    var prevBtn = root.querySelector("[data-slider-prev]");
    var nextBtn = root.querySelector("[data-slider-next]");

    if (!track || slides.length < 2 || !dotsBox || !prevBtn || !nextBtn) {
        return;
    }

    // Controls and the transform-based slider are only enabled once the
    // handlers exist; without JS the viewport stays a swipeable scroller.
    document.documentElement.classList.add("js-slider-ready");

    var DELAY = 6000;
    var index = 0;
    var timer = null;
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    var dots = slides.map(function (_, i) {
        var dot = document.createElement("button");
        dot.type = "button";
        dot.className = "slider__dot";
        dot.setAttribute("role", "tab");
        dot.setAttribute("aria-label", "Feature " + (i + 1) + " of " + slides.length);
        dot.addEventListener("click", function () {
            go(i, true);
        });
        dotsBox.appendChild(dot);
        return dot;
    });

    function render() {
        track.style.transform = "translateX(-" + index * 100 + "%)";

        dots.forEach(function (dot, i) {
            var active = i === index;
            dot.classList.toggle("is-active", active);
            dot.setAttribute("aria-selected", active ? "true" : "false");
            dot.setAttribute("tabindex", active ? "0" : "-1");
        });

        slides.forEach(function (slide, i) {
            var link = slide.querySelector("a");
            slide.setAttribute("aria-hidden", i === index ? "false" : "true");
            // Off-screen slides must stay out of the tab order
            if (link) {
                if (i === index) {
                    link.removeAttribute("tabindex");
                } else {
                    link.setAttribute("tabindex", "-1");
                }
            }
        });
    }

    function go(next, fromUser) {
        index = (next + slides.length) % slides.length;
        render();
        if (fromUser) {
            restart();
        }
    }

    function start() {
        if (timer || reduceMotion.matches || document.hidden) {
            return;
        }
        timer = window.setInterval(function () {
            go(index + 1);
        }, DELAY);
    }

    function stop() {
        if (timer) {
            window.clearInterval(timer);
            timer = null;
        }
    }

    function restart() {
        stop();
        start();
    }

    prevBtn.addEventListener("click", function () {
        go(index - 1, true);
    });

    nextBtn.addEventListener("click", function () {
        go(index + 1, true);
    });

    root.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
            go(index - 1, true);
        } else if (event.key === "ArrowRight") {
            go(index + 1, true);
        }
    });

    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);
    root.addEventListener("focusin", stop);
    root.addEventListener("focusout", function (event) {
        if (!root.contains(event.relatedTarget)) {
            start();
        }
    });

    document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
            stop();
        } else {
            start();
        }
    });

    if (typeof reduceMotion.addEventListener === "function") {
        reduceMotion.addEventListener("change", function () {
            if (reduceMotion.matches) {
                stop();
            } else {
                start();
            }
        });
    }

    render();
    start();
})();