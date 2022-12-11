const submitForm = document.querySelector(".login-form");

const handleSubmit = (event) => {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget; 

    if (email.value === "" || password.value === "") {
        return alert("Всі поля повинні бути заповнені!");
    }

    console.dir({ email: email.value, password: password.value });
    event.currentTarget.reset();
}

submitForm.addEventListener("submit", handleSubmit)