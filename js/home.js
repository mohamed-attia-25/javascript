
let homecatshow = document.querySelector("#homecatshow")
function addcat(){
    homecatshow.innerHTML = ""
    for(let i=1; i <= +localStorage.getItem("countcat"); i++) {
        homecatshow.innerHTML += `
            <div id="homecat${i}" value="${localStorage.getItem(`cat${i}`)}">
                <span>${localStorage.getItem(`emoj${i}`)}</span>
                <p>${localStorage.getItem(`cat${i}`)}</p>
            </div>
        `
    }
}
addcat()