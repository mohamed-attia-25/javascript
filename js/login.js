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


let eay1 = document.querySelector("#eay1")
let eay2 = document.querySelector("#eay2")
let eyeOpen1 = document.querySelector("#eyeOpen1")
let eyeOpen2 = document.querySelector("#eyeOpen2")
let eyeClose1 = document.querySelector("#eyeClose1")
let eyeClose2 = document.querySelector("#eyeClose2")
let eye = false
let input = document.querySelectorAll('[type="password"]')



function eyemode() {
    if (eye == false) {
        input[1].setAttribute("type","password")
        input[0].setAttribute("type","password")
        eyeOpen1.classList.remove("none")
        eyeOpen2.classList.remove("none")
        eyeClose1.classList.add("none")
        eyeClose2.classList.add("none")
    } else {
        input[0].setAttribute("type","text")
        input[1].setAttribute("type","text")
        eyeOpen2.classList.add("none")
        eyeOpen1.classList.add("none")
        eyeClose1.classList.remove("none")
        eyeClose2.classList.remove("none")
    }
}
eyemode()



eay1.addEventListener("click", function(){
    eye = !eye
    eyemode()
})

eay2.addEventListener("click", function(){
    eye = !eye
    eyemode()
})


// end password eye



let overlay = document.querySelector("#overlay")
let layLoginBtn = document.querySelector("#layLoginBtn")
let laysignBtn = document.querySelector("#laysignBtn")
let contLogin = document.querySelector("#contLogin")
let contSignup = document.querySelector("#contSignup")
let creatBtn =document.querySelector("#creatBtn")
let arrdBtn = document.querySelector("#arrdBtn")

layLoginBtn.addEventListener("click", function(){
    overlay.setAttribute("style","left: 50%;")
    contLogin.classList.add("none")
    contSignup.classList.remove("none")
})

creatBtn.addEventListener("click", function(){
    overlay.setAttribute("style","left: 50%;")
    contLogin.classList.add("none")
    contSignup.classList.remove("none")
})

laysignBtn.addEventListener("click", function(){
    overlay.setAttribute("style","left: 0;")
    contLogin.classList.remove("none")
    contSignup.classList.add("none")
})

arrdBtn.addEventListener("click", function(){
    overlay.setAttribute("style","left: 0;")
    contLogin.classList.remove("none")
    contSignup.classList.add("none")
})