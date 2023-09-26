
// THIS SHOULD BE ENCRYPTED/SALTED AND SECURE ON A DATABASE
const correctUsername = "bella";
const correctPassword = "qwe123";
// THIS SHOULD BE ENCRYPTED/SALTED AND SECURE ON A DATABASE
function loginAttempt() {
    let username = document.getElementById("usernameInput").value;
    let password = document.getElementById("passwordInput").value;

    if (username === correctUsername && password === correctPassword) {
        console.log("1")
        displaySuccessInfo();
    } else {
        console.log("2")
        displayFailedInfo();
    }
    clearTextFields();
}

function displayFailedInfo() {
    clearElementClasslist("displayLoginInfo");
    document.getElementById("displayLoginInfo").innerHTML = "Fel uppgifter, var god försök igen!";
    document.getElementById("displayLoginInfo").classList.add("failedLogin")
}

function displaySuccessInfo() {
    clearElementClasslist("displayLoginInfo");
    document.getElementById("displayLoginInfo").innerHTML = "Välkommen!"
    document.getElementById("displayLoginInfo").classList.add("successLogin");
}

function clearTextFields() {
    document.getElementById("usernameInput").value = ""
    document.getElementById("passwordInput").value = ""
}
/*
ARGS: an document element ID
DOES: Clears the classlist to empty
Do this because the implementation looks ugly but is effective
*/
function clearElementClasslist(elementId){
    document.getElementById(elementId).className = '';
    
}
