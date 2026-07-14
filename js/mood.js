// let body = document.body

// let allElement = document.querySelectorAll("*")

// localStorage.setItem("mood","light")

// let orMood = false 

// let mood = document.getElementById("mood")

// let navBtn = document.getElementById("navBtn") 
// navBtn.style.cssText = `left: 2.5px;`


// function trueFalse() {
//     if (orMood == false) {
//         orMood = true
//         localStorage.mood = "dark"
//     } else {
//         orMood = false
//         localStorage.mood = "light"
//     }
// }

// mood.addEventListener("click",function(){
//     if (localStorage.mood == "light") {
//         for(let i = 0; i < allElement.length; i++) {
//             allElement[i].style.cssText = `color: #ffffff;`
//         }
//         body.style.cssText = `background-color: #0B1228`
//         mood.style.cssText = `background-color:darkorange;`
//         navBtn.style.cssText = `left: 45px;`
//     } else if (localStorage.mood == "dark") {
//         for(let i = 0; i < allElement.length; i++) {
//             allElement[i].style.cssText = `color: #000000;`
//         }
//         body.style.cssText = `background-color: #ffffff`
//         navBtn.style.cssText = `left: 2.5px;`
//     }
//     trueFalse()
// })




let body = document.body;
let allElement = document.querySelectorAll("*");
let mood = document.getElementById("mood");
let navBtn = document.getElementById("navBtn");


if (!localStorage.getItem("mood")) {
    localStorage.setItem("mood", "light");
}

function mode() {
    if (localStorage.mood == "dark") {
        for (let i = 0; i < allElement.length; i++) {
            allElement[i].style.setProperty("color", "#ffffff");
        }
        body.style.cssText = `background-color: #0B1228`;
        mood.style.cssText = `background-color:darkorange;`;
        navBtn.style.cssText = `left: 45px;`;
    } else {
        for (let i = 0; i < allElement.length; i++) {
            allElement[i].style.setProperty("color", "#000000");
        }
        body.style.cssText = `background-color: #ffffff`;
        mood.style.cssText = `background-color: #121e44`;
        navBtn.style.cssText = `left: 2.5px;`;
    }
}
mode();

mood.addEventListener("click", function () {
    if (localStorage.mood == "light") {
        localStorage.mood = "dark"
    } else {
        localStorage.mood = "light"
    }
    mode();
});