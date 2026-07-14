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


