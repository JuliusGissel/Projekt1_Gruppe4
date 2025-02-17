let lastScrollTop = 0; // Variable to store the last scroll position
let scrollThreshold = 100; // Set the threshold to when the navbar and header will disappear

window.onscroll = function() {
    toggleVisibility();
};

function toggleVisibility() {
    const topmenu = document.querySelector(".topMenu");
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop; // Get current scroll position

    // Only trigger hide effect if scrolled past the threshold
    if (currentScroll > scrollThreshold) {
        if (currentScroll > lastScrollTop) {
            // Scroll Down
            topmenu.classList.add("hidden");
        } else {
            // Scroll Up
            topmenu.classList.remove("hidden");
        }
    } else {
        // If not scrolled past threshold, ensure they are visible
        topmenu.classList.remove("hidden");
    }

    // Update last scroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}