(function () {
    "use strict";

    var toggle = document.querySelector(".nav-toggle");
    var panel = document.getElementById("primary-menu");

    if (!toggle || !panel) {
        return;
    }

    // Only now, with the handlers wired, may the collapsed mobile menu be
    // enabled: if this script never runs, the list stays expanded and usable.
    document.documentElement.classList.add("js-nav-ready");

    var desktop = window.matchMedia("(min-width: 769px)");

    function isOpen() {
        return toggle.getAttribute("aria-expanded") === "true";
    }

    function setOpen(open) {
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        panel.classList.toggle("is-open", open);
    }

    toggle.addEventListener("click", function () {
        setOpen(!isOpen());
    });

    // Escape closes the menu and returns focus to the button
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && isOpen()) {
            setOpen(false);
            toggle.focus();
        }
    });

    // A tap anywhere outside the menu closes it
    document.addEventListener("click", function (event) {
        if (!isOpen()) {
            return;
        }
        if (!panel.contains(event.target) && !toggle.contains(event.target)) {
            setOpen(false);
        }
    });

    // Following a menu link closes the menu
    panel.addEventListener("click", function (event) {
        if (event.target.closest("a")) {
            setOpen(false);
        }
    });

    // Never leave the panel open when the desktop layout takes over
    desktop.addEventListener("change", function (event) {
        if (event.matches) {
            setOpen(false);
        }
    });

    setOpen(false);
})();