let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message");
let emptyFieldMessages = document.querySelectorAll(".empty-field");
let showHideBtn = document.querySelector(".btn");
let firstName, lastName, email, password;
let fnTarget, lnTarget, emailTarget, pwdTarget;
let field;
let fnFlag, lnFlag, eFlag, pwdFlag;

let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let pwdRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


for( let errorMessage of errorMessages ) {
    errorMessage.classList.add("d-none");
}

for( let emptyField of emptyFieldMessages ) {
    emptyField.classList.add("d-none");
}

formData.addEventListener("keyup", (event) => {
    event.preventDefault();
    let field = event.target.dataset.key;
    switch( field ) {
        case "firstName": 
            firstName = event.target.value;
            fnTarget = event.target;
            break;
        case "lastName":
            lastName = event.target.value;
            lnTarget = event.target;
            break;
        case "email": 
            email = event.target.value;
            emailTarget = event.target;
            break;
        case "password":
            password = event.target.value;
            pwdTarget = event.target;
            break;
        default:
            firstName = lastName = email = password = "";
            break;
    }
});

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    if( firstName ) {
        emptyFieldMessages[0].classList.add("d-none");
        if( !nameRegex.test(firstName) ) {
            errorMessages[0].classList.remove("d-none");
            fnTarget.classList.add("error");
            fnFlag = false;
        } else {
            errorMessages[0].classList.add("d-none");
            fnTarget.classList.remove("error");
            fnFlag = true;
        }
    } else {
        emptyFieldMessages[0].classList.remove("d-none");
    }

    if( lastName ) {
        emptyFieldMessages[1].classList.add("d-none");
        if( !nameRegex.test(lastName) ) {
            errorMessages[1].classList.remove("d-none");
            lnTarget.classList.add("error");
            lnFlag = false;
        } else {
            errorMessages[1].classList.add("d-none");
            lnTarget.classList.remove("error");
            lnFlag = true;
        }
    } else {
        emptyFieldMessages[1].classList.remove("d-none");
    }

    if( email ) {
        emptyFieldMessages[2].classList.add("d-none");
        if( !emailRegex.test(email) ) {
            errorMessages[2].classList.remove("d-none");
            emailTarget.classList.add("error");
            eFlag =  false;
        } else {
            errorMessages[2].classList.add("d-none");
            emailTarget.classList.remove("error");
            eFlag =  true;
        }
    } else {
        emptyFieldMessages[2].classList.remove("d-none");
    }

    if( password ) {
        emptyFieldMessages[3].classList.add("d-none");
        if( !pwdRegex.test( password ) ) {
            errorMessages[3].classList.remove("d-none");
            pwdTarget.classList.add("error");
            pwdFlag = false;
        } else {
            errorMessages[3].classList.add("d-none");
            pwdTarget.classList.remove("error");
            pwdFlag = true;
        }
    } else {
        emptyFieldMessages[3].classList.remove("d-none");
    }

    if( fnFlag && lnFlag && eFlag && pwdFlag === true ) {
        fnTarget.value = lnTarget.value = emailTarget.value = pwdTarget.value = "";
        window.location.href = "/success.html";
    }
});

showHideBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if( pwdTarget.getAttribute("type") === "text" ) {
        pwdTarget.setAttribute("type", "password" );
        showHideBtn.innerHTML = `<span class="material-icons-outlined">visibility</span>`;
    } else {
        pwdTarget.setAttribute("type", "text" );
        showHideBtn.innerHTML = `<span class="material-icons-outlined">visibility_off</span>`;
    }
});


