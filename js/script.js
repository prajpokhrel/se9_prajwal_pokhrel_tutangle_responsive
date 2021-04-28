// Import js if you add some code here
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-navigation');
    const togglerActive = document.getElementById('toggle-navigation');
    const navWrapper = document.getElementById('sub-navigation-wrapper-id');
    const navContainer = document.getElementById('sub-navigation-container-id');
    toggleButton.addEventListener("click", toggleNavigation);

    function toggleNavigation() {
        const toggledNavigation = document.getElementById('toggled-navigation');
        if (toggledNavigation.style.display === "none") {
            toggledNavigation.style.display = "block";
            togglerActive.style.color = "#2fc1da";
            navWrapper.style.height = "250px";
            navContainer.style.height = "250px";

        } else {
            toggledNavigation.style.display = "none";
            togglerActive.style.color = "#323232";
            navWrapper.style.height = "100px";
            navContainer.style.height = "100px";
        }

    }
});
