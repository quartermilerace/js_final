const loginform = document.querySelector("#login_form");
const logininput = document.querySelector("#login_id");
const greeting = document.querySelector("#greeting");
const HIDDENCLASS = "hidden";
const USERNAME_KEY = "username";

function loginsubmit(e) {
    e.preventDefault();
    loginform.className = HIDDENCLASS;
    const username = logininput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintgreeting(username);
}

function paintgreeting(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDENCLASS);
}

const savedusername = window.localStorage[USERNAME_KEY];

if (savedusername === null || savedusername === undefined) {
    loginform.classList.remove(HIDDENCLASS);
    loginform.addEventListener("submit", loginsubmit);
} else {
    paintgreeting(savedusername);
}
