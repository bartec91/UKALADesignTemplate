const form = document.querySelector(".section-contact__form"),
    fields = form.querySelectorAll("[data-error]");

const isNotEmpty = (field) => {
    return field.value !== "";
};

const isPhone = (field) => {
    return field.value.match(/^[0-9\+]{8,13}$/);
};

const displayErrors = (errors) => {
    let ul = document.querySelector("ul.errors");

    if (!ul) {
        ul = document.createElement("ul");

        ul.classList.add("errors");
    }

    ul.innerHTML = "";

    errors.forEach((error) => {
        let li = document.createElement("li");

        li.textContent = error;

        ul.appendChild(li);
    });

    form.parentNode.insertBefore(ul, form);
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let errors = [];

    for (let i = 0; i < fields.length; i++) {
        let field = fields[i],
            isValid = false;

        if (field.type === "text") {
            isValid = isNotEmpty(field);
        } else if (field.type === "tel") {
            isValid = isPhone(field);
        }

        if (!isValid) {
            field.classList.add("error");
            errors.push(field.dataset.error);
        } else {
            field.classList.remove("error");
        }
    }

    if (errors.length) {
        displayErrors(errors);
    } else {
        form.submit();
    }
}, false);;/* Toggle Nav JavaScript */
const mainNav = document.getElementById('navbarToggle');
const navToggle = document.getElementById('btnToggle');

let mainNavToggle = () => {
    mainNav.classList.toggle('collapse');
};

// Add a click event to run the mainNavToggle function
navToggle.addEventListener('click', mainNavToggle);;let scrollPos = window.scrollY;
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