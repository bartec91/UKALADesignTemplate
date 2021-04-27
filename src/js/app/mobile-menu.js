/* Toggle Nav JavaScript */
const mainNav = document.getElementById('navbarToggle');
const navToggle = document.getElementById('btnToggle');

let mainNavToggle = () => {
    mainNav.classList.toggle('collapse');
};

// Add a click event to run the mainNavToggle function
navToggle.addEventListener('click', mainNavToggle);