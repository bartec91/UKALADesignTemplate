let scrollPos = window.scrollY;
const header = document.querySelector('.header__sticky');
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', function () {
    scrollPos = window.scrollY;

    if (scrollPos >= headerHeight) {
        header.classList.add('header__sticky--fixed');
    } else {
        header.classList.remove('header__sticky--fixed');
    }
});