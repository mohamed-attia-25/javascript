let togel = document.getElementById("togel")
let navbar = document.getElementById("navbar")
let openNav = false

togel.addEventListener ("click" , function () {
    if (openNav == false) {
        navbar.style.setProperty("height","400px")
        togel.style.setProperty("transform","rotate(90deg)")
        openNav = true
    } else {
        navbar.style.setProperty("height","120px")
        togel.style.setProperty("transform","rotate(0deg)")
        openNav = false
    }
})
//....................................................

let getuser = localStorage.getItem("user")
let getpass = localStorage.getItem("pass")

let log = document.querySelector("#log")
let logB = document.querySelector("#log-in")

let aftLog = document.querySelector("#aftLog")
let imgUser = document.querySelector("#imgUser")
let username = document.querySelector("#username")
let logout = document.querySelector("#logout")
let outt = document.getElementById("outt")

let imgOver = document.querySelector("#imgOver")
let imgOverX = document.querySelector("#imgOverX")
let imgOverInput = document.querySelector("#imgOverInput")
let imgOverBtn = document.querySelector("#imgOverBtn")
let imgOverBtnremove = document.querySelector("#imgOverBtnremove")

function outon (trfl) {
    if (trfl == true) {
        outt.style.width = "0"
    } else {
        outt.style.width = "auto"
    }
}
outon(true)

if (getpass && getuser) {
    log.classList.add("none")
    aftLog.classList.remove("none")
    username.innerHTML = getuser
    logB.setAttribute("style","top: 11px;")

    let out = false
    username.addEventListener("click",function(){
        if (out == false) {
            logout.classList.add("logout10")
            outon(false)
            out = true
        } else {
            logout.classList.remove("logout10")
            outon(true)
            out = false
        }
    })

    if (!localStorage.getItem("img")) {
        localStorage.setItem("img","img/backlogin.jpeg")
    }

    function back() {
        if (localStorage.img == "img/backlogin.jpeg") {
            imgUser.setAttribute("src",`${localStorage.img}`)
        }
    }
    back()

    imgUser.addEventListener("click",function(){
        imgOver.classList.remove("none")
    })

    imgOverBtn.addEventListener("click",function(eve){
        eve.preventDefault()
        localStorage.img = imgOverInput.velue
        console.log(localStorage.img)
        back()
        imgOver.classList.add("none")
    })

    imgOverBtnremove.addEventListener("click",function(eve){
        eve.preventDefault()
        localStorage.img = "img/backlogin.jpeg"
        console.log(localStorage.img)
        back()
        imgOver.classList.add("none")
    })

    imgOverX.addEventListener("click",function(){
        imgOver.classList.add("none")
    })


    logout.addEventListener("click",function(){
    })
}

