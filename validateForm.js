function validateForm(event) {
    let userName = document.forms["myForm"]["uname"].value;
    let password = document.forms["myForm"]["pw"].value;

    let errorMessageElem = document.getElementById("error-message");
    errorMessageElem.innerHTML = "";
    let isValid = true;

    // User name validation
    const userNameRegExp = /^([a-zA-Z0-9_-]){8,32}$/;
    if (userName == "" || !userNameRegExp.test(userName)) {
        errorMessageElem.innerHTML += "<p>Invalid user name. User name must be between 8 and 32 characters and may contain a combination of letters and numbers</p>";
        isValid = false;
  
    // Password validation
    const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,32}$/;
    if (password == "" || !passwordRegExp.test(password)) {
        errorMessageElem.innerHTML += "<p>Password must be between 8 and 32 characters, at least one letter, one digit, and one special character.</p></p>";
        isValid = false;
    }

    // If validation has failed for any input field, do not submit the form
    if(!isValid) {
        event.preventDefault();
    };
}
}