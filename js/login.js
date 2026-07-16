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

// placeholder="Enter Your Username"

function eyemode() {
    if (eye == false) {
        input[0].setAttribute("type","password")
        input[1].setAttribute("type","password")
        input[1].setAttribute("placeholder","...............")
        input[0].setAttribute("placeholder","...............")
        eyeOpen1.classList.remove("none")
        eyeOpen2.classList.remove("none")
        eyeClose1.classList.add("none")
        eyeClose2.classList.add("none")
    } else {
        input[0].setAttribute("type","text")
        input[1].setAttribute("type","text")
        input[0].setAttribute("placeholder","password")
        input[1].setAttribute("placeholder","password")
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
    sectionlogin.classList.add("none")
    sectionsignup.classList.remove("none")
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
    sectionlogin.classList.remove("none")
    sectionsignup.classList.add("none")
})

arrdBtn.addEventListener("click", function(){
    overlay.setAttribute("style","left: 0;")
    contLogin.classList.remove("none")
    contSignup.classList.add("none")
})

// end function pc

let resin = document.querySelector("#resin")
let resup = document.querySelector("#resup")
let sectionlogin = document.querySelector("#sectionlogin")
let sectionsignup = document.querySelector("#sectionsignup")

resup.addEventListener("click",function(){
    sectionlogin.classList.add("none")
    sectionsignup.classList.remove("none")
    resup.classList.add("back")
    resin.classList.remove("back")
})
creatBtn.addEventListener("click",function(){
    sectionlogin.classList.add("none")
    sectionsignup.classList.remove("none")
    resup.classList.add("back")
    resin.classList.remove("back")
})

resin.addEventListener("click",function(){
    sectionlogin.classList.remove("none")
    sectionsignup.classList.add("none")
    resup.classList.remove("back")
    resin.classList.add("back")
})
arrdBtn.addEventListener("click",function(){
    sectionlogin.classList.remove("none")
    sectionsignup.classList.add("none")
    resup.classList.remove("back")
    resin.classList.add("back")
})
// end function mobile


let login = document.querySelector("#login")
let signup = document.querySelector("#signup")

let inUser =document.querySelector("#inUser")
let inPass = document.querySelector("#inPass")

let SinUser =document.querySelector("#SinUser")
let SinPass = document.querySelector("#SinPass")

let upUser = document.querySelector("#upUser")
let upEmail = document.querySelector("#upEmail")
let upPass = document.querySelector("#upPass")

let SupUser = document.querySelector("#SupUser")
let SupEmail = document.querySelector("#SupEmail")
let SupPass = document.querySelector("#SupPass")

let em = ["com", "net", "org", "biz", "info", "eg", "gov", "edu", "dev"]
let vel = false

signup.addEventListener("click",function(eve){
    eve.preventDefault()
                for(let i = 0; i < em.length; i++){
                if(upEmail.value.includes(em[i])){
                    vel = true
                    break
                }
            }
    if((upUser.value == "") || (upEmail.value == "") || (upPass.value == "") || (upUser.value.length > 20) || (upPass.value.length > 25) || !vel) {
        if (upUser.value == "") {
            SupUser.innerHTML = "Nothing Username"
            SupUser.setAttribute("style","padding: 4px 8px;")
        } 

        if (upEmail.value == "") {
            SupEmail.innerHTML = "Nothing Email"
            SupEmail.setAttribute("style","padding: 4px 8px;")
        } 

        if (upPass.value == "") {
            SupPass.innerHTML = "Nothing Password"
            SupPass.setAttribute("style","padding: 4px 8px;")
        } 

        
        if ((upUser.value.length > 20) || (upPass.value.length > 25) || (upEmail.value !== "") || (upUser.value == "") || (upEmail.value == "") || (upEmail.value !== "") || (upPass.value == "")) {
            if (upEmail.value !== "" && !upEmail.value.includes("@")) {
                SupEmail.innerHTML = "The @ symbol is missing"
                SupEmail.setAttribute("style","padding: 4px 8px;")
            } else if (upEmail.value !== "" && !upEmail.value.includes(".")) {
                SupEmail.innerHTML = "The point is missing"
                SupEmail.setAttribute("style","padding: 4px 8px;")
            } else if (upEmail.value !== "" && !vel){
                SupEmail.innerHTML = "The email address is incorrect"
                SupEmail.setAttribute("style","padding: 4px 8px;")
            } else if(upEmail.value !== "" && vel) {
                SupEmail.innerHTML = ""
                SupEmail.setAttribute("style","padding: 0px 0px;")
            }
    
            if (upUser.value.length > 20 && upUser.value != "") {
                SupUser.innerHTML = "number of characters Username exceeded 20"
                SupUser.setAttribute("style","padding: 4px 8px;")
            } else if (upUser.value == "") {
            SupUser.innerHTML = "Nothing Username"
            SupUser.setAttribute("style","padding: 4px 8px;")
            } else {
                SupUser.innerHTML = ""
                SupUser.setAttribute("style","padding: 0px 0px;")
            }
    
            if (upPass.value.length > 25 && upPass.value != "") {
                SupPass.innerHTML = "number of characters Password exceeded 25"
                SupPass.setAttribute("style","padding: 4px 8px;")
            } else if (upPass.value == "") {
                SupPass.innerHTML = "Nothing Password"
                SupPass.setAttribute("style","padding: 4px 8px;")
            }else {
                SupPass.innerHTML = ""
                SupPass.setAttribute("style","padding: 0px 0px;")
            }
        }
    }else {
        localStorage.setItem("user",upUser.value)
        localStorage.setItem("email",upEmail.value)
        localStorage.setItem("pass",upPass.value)
        SupUser.innerHTML = ""
        SupEmail.innerHTML = ""
        SupPass.innerHTML = ""
        SupUser.setAttribute("style","padding: 0px 0px;")
        SupEmail.setAttribute("style","padding: 0px 0px;")
        SupPass.setAttribute("style","padding: 0px 0px;")
        
        setTimeout(function(){
            overlay.setAttribute("style","left: 0;")
            contLogin.classList.remove("none")
            contSignup.classList.add("none")
            sectionlogin.classList.remove("none")
            sectionsignup.classList.add("none")
            resup.classList.remove("back")
            resin.classList.add("back")
        },350)
    }
})

// end sign up js