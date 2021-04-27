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
}, false);