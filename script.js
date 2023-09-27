
// THIS SHOULD BE ENCRYPTED/SALTED AND SECURE ON A DATABASE
const correctUsername = "bella";
const correctPassword = "qwe123";
// THIS SHOULD BE ENCRYPTED/SALTED AND SECURE ON A DATABASE

user = {
    name: "bella",
    password: "qwe123"
};

//Tries to log in the user
function loginAttempt() {
    let username = document.getElementById("usernameInput").value;
    let password = document.getElementById("passwordInput").value;



    if (username === correctUsername && password === correctPassword) {
        displaySuccessInfo();
        hideInputs();
        document.querySelector("button").innerHTML = "Logga ut";
        document.querySelector("button").setAttribute("onClick", "logOut()");
        //Store user on localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

    } else {
        displayFailedInfo();
        hideInputs();

    }
    clearTextFields();
}

//Changes button to try again
function tryAgain() {
    document.querySelector("button").innerHTML = "Logga in";
    document.querySelector("button").setAttribute("onClick", "loginAttempt()");
    showInputs();
}


//Display info to the user about their login attempt
function displayFailedInfo() {
    clearElementClasslist("displayLoginInfo");
    document.getElementById("displayLoginInfo").innerHTML = "Fel uppgifter, var god försök igen!";
    document.getElementById("displayLoginInfo").classList.add("failedLogin")
    document.querySelector("button").innerHTML = "Försök igen"
    document.querySelector("button").setAttribute("onClick", "tryAgain()");
}


//Display info to the user about their login attempt
function displaySuccessInfo() {
    clearElementClasslist("displayLoginInfo");
    document.getElementById("displayLoginInfo").innerHTML = "Välkommen! Du är nu inloggad!"
    document.getElementById("displayLoginInfo").classList.add("successLogin");
}

//Clears the users text input fields
function clearTextFields() {
    document.getElementById("usernameInput").value = ""
    document.getElementById("passwordInput").value = ""
}

/*
ARGS: an document element ID
DOES: Clears the classlist to empty
Do this because the implementation looks ugly but is effective
*/
function clearElementClasslist(elementId) {
    document.getElementById(elementId).className = '';

}

//If user is logged in and tries to log out this func does so
function logOut() {
    localStorage.removeItem("username")
    localStorage.removeItem("password")
    document.getElementById("displayLoginInfo").className = "";
    document.getElementById("displayLoginInfo").innerHTML= "";
    showInputs();
    document.querySelector("button").innerHTML = "Logga in";
    document.querySelector("button").setAttribute("onClick", "loginAttempt()");
}

//Simply hides the inputs
function hideInputs() {
    document.getElementById("usernameInput").classList.add("hidden");
    document.getElementById("passwordInput").classList.add("hidden");
}
//Shows the inputs
function showInputs() {
    document.getElementById("usernameInput").classList.remove("hidden");
    document.getElementById("passwordInput").classList.remove("hidden");
}

//On load checks if user is already logged in
function checkIfLoggedIn() {
    if (localStorage.getItem("username") === correctUsername && localStorage.getItem("password") === correctPassword) {
        displaySuccessInfo();
        hideInputs();
        document.querySelector("button").innerHTML = "Logga ut";
        document.querySelector("button").setAttribute("onClick", "logOut()");
    }
}