// start login form mood
let headLogin = document.getElementById("headLogin")
let headSign = document.getElementById("headSign")

function moodlogin() {
    if (localStorage.mood == "dark") {
        headLogin.classList.add("colorDark")
        headSign.classList.add("colorDark")
    } else {
        headSign.classList.add("colorLight")
        headLogin.classList.add("colorLight")
    }
}
moodlogin()

// end login form mood