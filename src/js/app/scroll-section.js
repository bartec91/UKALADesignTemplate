let scrollPos = window.scrollY;
const header = document.querySelector("header");
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', function () {
    scrollPos = window.scrollY;

    if (scrollPos >= headerHeight) {
        document.querySelector(`.header__top`).classList.add('header__top--fixed');
        document.querySelector(`nav li.nav__item--first a`).classList.remove('nav__link--active');
    } else {
        document.querySelector(`.header__top`).classList.remove('header__top--fixed');
        document.querySelector(`nav li.nav__item--first a`).classList.add('nav__link--active');
    }

});

document.querySelectorAll('nav li.nav__item a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        let activeClass = document.getElementsByClassName(`nav__link--active`)[0];

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        document.querySelector(`nav li.nav__item a[href="${this.getAttribute('href')}"]`).classList.add('nav__link--active');

        if (activeClass) {
            activeClass.classList.remove('nav__link--active');
        }
    });
});