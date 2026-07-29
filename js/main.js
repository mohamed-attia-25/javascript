let togel = document.getElementById("togel")
let navbar = document.getElementById("navbar")
let openNav = false

togel.addEventListener ("click" , function () {
    if (openNav == false) {
        navbar.style.setProperty("height","380px")
        togel.style.setProperty("transform","rotate(90deg)")
        openNav = true
    } else {
        navbar.style.setProperty("height","160px")
        togel.style.setProperty("transform","rotate(0deg)")
        openNav = false
    }
})
//....................................................

let getuser = localStorage.getItem("user")
let getpass = localStorage.getItem("pass")
let getemail = localStorage.getItem("email")


let log = document.querySelector("#log")
let logB = document.querySelector("#log-in")

let aftLog = document.querySelector("#aftLog")
let imgUser = document.querySelector("#imgUser")
let username = document.querySelector("#username")
let logout = document.querySelector("#logout")
let outt = document.querySelector("#outt")

let imgOver = document.querySelector("#imgOver")
let imgOverX = document.querySelector("#imgOverX")
let imgOverInput = document.querySelector("#imgOverInput")
let imgOverBtn = document.querySelector("#imgOverBtn")
let imgOverBtnremove = document.querySelector("#imgOverBtnremove")

function outon (trfl) {
    if (trfl == true) {
        outt.setAttribute("style","width: 0; overflow: hidden;")
    } else {
        outt.setAttribute("style","width: auto; overflow: hidden;")
    }
}
outon(true)

if (localStorage.getItem("Lusepass") || sessionStorage.getItem("Susepass")) {
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
        if(localStorage.getItem("Lusepass")) {
            localStorage.removeItem("Lusepass")
            window.location.reload()
        } else if(sessionStorage.getItem("Susepass")) {
            sessionStorage.removeItem("Susepass")
            window.location.reload()
        }
    })
}

// end after log

// let adminAdd = document.querySelector("#adminAdd")

// let overlayAdminAll = document.querySelector("#overlayAdminAll")

// let secCard = document.querySelector("#secCard")

// let btnAdminChoose = document.querySelector("#btnAdminChoose")
// let closeChoose = document.querySelector("#closeChoose")
// let AddCard = document.querySelector("#AddCard")
// let AddCat = document.querySelector("#AddCat")

// let adminCard = document.querySelector("#adminCard")
// let closeAdminCard = document.querySelector("#closeAdminCard")
// let adminImgInput = document.querySelector("#adminImgInput")
// let adminTitleInput = document.querySelector("#adminTitleInput")
// let adminDescripInput = document.querySelector("#adminDescripInput")
// let adminPriceInput = document.querySelector("#adminPriceInput")
// let adminCatInput = document.querySelector("#adminCatInput")
// let submitAdmin = document.querySelector("#submitAdmin")

// let adminCategory = document.querySelector("#adminCategory")
// let closeAdminCat = document.querySelector("#closeAdminCat")
// let categoryNameInput = document.querySelector("#categoryNameInput")
// let removeCat = document.querySelector("#removeCat")
// let addCat = document.querySelector("#addCat")

// let productCard = []



// let count = +localStorage.getItem("countcat")
// function CAT(cat){
//     count++
//     localStorage.setItem("countcat",`${count}`)
//     localStorage.setItem(`cat${count}`,`${cat}`)
//     addcat()
// }

// function addcat(){
//     adminCatInput.innerHTML = ""
//     adminCatInput.innerHTML = `<option value="Select category">-- Select category  --</option>`
//     for(let i=1; i <= +localStorage.getItem("countcat"); i++) {
//         let option = document.createElement('option');
//         option.value = localStorage.getItem(`cat${i}`);
//         option.id = `categ${i}`;
//         option.textContent = localStorage.getItem(`cat${i}`);
//         adminCatInput.appendChild(option);
//     }
// }
// addcat()

// function removecat(cat){
//     let noremove = []
//     for(var i=1; i <= +localStorage.getItem("countcat"); i++) {
//         if(localStorage.getItem(`cat${i}`) !== cat) {
//             noremove.push(localStorage.getItem(`cat${i}`))
//         } 
//         localStorage.removeItem(`cat${i}`)
//     }

//     for (var i=0; i < noremove.length ; i++) {
//         localStorage.setItem(`cat${i+1}`,`${noremove[i]}`)
//     }

//     count = noremove.length
//     localStorage.countcat = noremove.length
//     // addCat()
//     window.location.reload() 
// }



// function loafprod(){
//     secCard.innerHTML = ""
//     productCard = JSON.parse(localStorage.getItem("prodact"))
//     for(let i = 0; i < productCard.length; i++) {
//         productCard[i].id = i
//         secCard.innerHTML += `
//             <div class="card" id="card${i}">
//                 <button class="removBtn none" id="removBtn${i}"><i class="fa-solid fa-trash-can"></i></button>
//                 <button class="favBtn" id="favBtn${i}"><i class="fa-solid fa-heart"></i></button>
//                 <title id="cat${i}">${productCard[i].category}</title>
//                 <title id="${i}">${i}</title>
//                 <img src="${productCard[i].img}" alt="" id="imgCard${i}" class="imgcard">
//                 <div class="contCard">
//                     <div class="textCard" id="textCard${i}">
//                         <h3 id="title${i}">${productCard[i].title}</h3>
//                         <p id="desc${i}">${productCard[i].descrip}</p>
//                     </div>
//                     <div class="cardBtn">
//                         <button id="btnCard${i}" class="btnp ">
//                             <span id="pric${i}">${productCard[i].price}$</span>
//                             <span id="close${i}" class="opac">X</span>
//                         </button>
//                         <button class="btnCart opac" id="btnCart${i}">Cart</button>
//                         <button class="btnBuy opac" id="btnBuy${i}">buy</button>
//                     </div>
//                 </div>
//             </div>
//         `
//     }
// }
// loafprod()


// for (let i = 0; i < productCard.length; i++ ){
//     let removBtn = document.querySelector(`#removBtn${i}`)
//     removBtn.addEventListener("click",function(){
//         let ID = ""
//         for (let x = 0; x < removBtn.id.length; x++){
//             for (let n = 0; n <= 9; n++){
//                 if(removBtn.id[x] == n) {
//                     ID += removBtn.id[x]
//                 }
//             }
//         }
//         productCard = productCard.filter(item => item.id != ID)
//         localStorage.setItem("prodact",JSON.stringify(productCard)) 
//         loafprod()
//         window.location.reload()
//     })
// }


// adminImgInput.addEventListener("change",function(){
//     let read = new FileReader()
//     read.addEventListener("load",function(){
//         sessionStorage.setItem("imagecardurl",read.result)
//     })
//     read.readAsDataURL(this.files[0])
// })


// submitAdmin.addEventListener("click",function(eve){
//     eve.preventDefault()

//     let prod = {
//         id:`${productCard.length}`,
//         img:`${sessionStorage.getItem("imagecardurl")}`,
//         title:`${adminTitleInput.value}`,
//         descrip:`${adminDescripInput.value}`,
//         price:`${adminPriceInput.value}`,
//         category:`${adminCatInput.value}`
//     }
//     productCard.push(prod)
//     localStorage.setItem("prodact",JSON.stringify(productCard)) 
//     loafprod()
//     window.location.reload()
// })



// if (getemail == "admin@add.com" && getuser == "admin" && getpass == "Admin2020@") {
//     adminAdd.classList.remove("none")
//     let removBtnCard = document.querySelectorAll(".removBtn")
//     for(let i = 0; i < removBtnCard.length; i++) {
//         removBtnCard[i].classList.remove("none")
//     }

//     adminAdd.addEventListener("click",function(){
//         overlayAdminAll.classList.remove("none")
//         btnAdminChoose.classList.remove("none")
//     })

//     // closeChoose.addEventListener("click",function(){
//     //     overlayAdminAll.classList.add("none")
//     //     btnAdminChoose.classList.add("none")
//     // })

//     // AddCard.addEventListener("click",function(){
//     //     btnAdminChoose.classList.add("none")
//     //     adminCard.classList.remove("none")
//     // })

//     closeAdminCard.addEventListener("click",function(){
//         adminCard.classList.add("none")
//         overlayAdminAll.classList.add("none")
//     })

//     // AddCat.addEventListener("click",function(){
//     //     btnAdminChoose.classList.add("none")
//     //     adminCategory.classList.remove("none")
//     // })

//     closeAdminCat.addEventListener("click",function(){
//         adminCategory.classList.add("none")
//         overlayAdminAll.classList.add("none")
//     })

//     addCat.addEventListener("click",function(eve){
//         eve.preventDefault()
//         CAT(categoryNameInput.value)
//         window.location.reload()
//     })

//     // removeCat.addEventListener("click",function(eve){
//     //     eve.preventDefault()
//     //     removecat(categoryNameInput.value)
//     // })
// }

