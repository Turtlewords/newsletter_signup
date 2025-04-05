const subBtn = document.getElementById("sub-btn");
const form = document.getElementById("form");
const email = document.getElementById("email");
const error = document.getElementById("error")

form.addEventListener("submit", (e) => {
    e.preventDefault();
})

form.addEventListener("submit", (event) => {
    if (email.validity.typeMismatch) {
        error.classList.remove("hidden");
    } else {
        error.classList.add("hidden");
    }
})

