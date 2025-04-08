const outer= document.getElementById("outer");
const subBtn = document.getElementById("sub-btn");
const form = document.getElementById("form");
const emailEl = document.getElementById("email");
const error = document.getElementById("error");
const dismissBtn = document.getElementById("dismiss-btn");
const success = document.getElementById("success-wrapper");

form.addEventListener("submit", (e) => {
    

    handleFormSubmit(e);
})

dismissBtn.addEventListener("click", () => {
    success.classList.toggle("hidden");
    outer.classList.toggle("hidden");
})


function validateEmail(email) {
    

    if (!email) {
        return "Valid email required";
    }

    const isValidEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (!isValidEmail.test(email)) {
        return "Please enter a valid email";
    } 

    return ""
}

function handleFormSubmit(e) {

    e.preventDefault();


    const email = emailEl.value;

    const emailErrorMessage = validateEmail(email);

    

    if (emailErrorMessage) {
        error.textContent = emailErrorMessage
        emailEl.classList.add("input-error")
    } else {
        emailEl.classList.remove("input-error")
        error.textContent = "";
        emailEl.value = "";
        outer.classList.toggle("hidden");
        success.classList.toggle("hidden");
        
    }
}

