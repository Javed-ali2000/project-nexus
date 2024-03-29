
    const signInBtn = document.querySelector("#sign-in-btn");
    const signUpBtn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");
    const signInBtn2 = document.querySelector("#sign-in-btn2");
    const signUpBtn2 = document.querySelector("#sign-up-btn2");

    signUpBtn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
    });
    signInBtn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
    });
    signUpBtn2.addEventListener("click", () => {
        container.classList.add("sign-up-mode2");
    });
    signInBtn2.addEventListener("click", () => {
        container.classList.remove("sign-up-mode2");
    });

    const signUpForm = document.querySelector(".sign-up-form");

    function validatePassword(password) {
        const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return passwordRegex.test(password);
    }

    function validateEmail(email) {
        const emailRegex = /^[\w-\.]+@(?:[\w]+\.)+[\w]{2,6}$/;
        return emailRegex.test(email);
    }
    function validatePhoneNumber(phoneNumber) {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phoneNumber);
    }

    signUpForm.addEventListener("submit", function(event) {
        const passwordInput = signUpForm.querySelector("input[type='password']");
        if (!validatePassword(passwordInput.value)) {
            alert("Password should contain at least 8 characters including one uppercase letter, one lowercase letter, one number, and one special character.");
            event.preventDefault();
        }

        const emailInput = signUpForm.querySelector("input[type='text'][placeholder='Email']");
        if (!validateEmail(emailInput.value)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
        }
        const phoneInput = signUpForm.querySelector("input[type='text'][placeholder='Phone Number']");
        if (!validatePhoneNumber(phoneInput.value)) {
        alert("Please enter a valid 10-digit phone number.");
        event.preventDefault();
    }
    });

