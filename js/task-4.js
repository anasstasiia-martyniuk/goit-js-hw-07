const form = document.querySelector(".login-form");
// const intputs = form.querySelectorAll("input");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const elements = event.target.elements;

    const info = {
        email: elements.email.value,
        password: elements.password.value
    }

    if (elements.email.value && elements.password.value === "") {
       return alert('All form fields must be filled in')
    } else {
        console.log(info);
        form.reset();
    }
    
}
