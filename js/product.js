
let adminAdd = document.querySelector("#adminAdd")

let overlayAdminAll = document.querySelector("#overlayAdminAll")

let secCard = document.querySelector("#secCard")


let AddCard = document.querySelector("#AddCard")
let AddCat = document.querySelector("#AddCat")
let changtoproductBTN = document.querySelector("#changtoproductBTN")
let changtocategoryBTN = document.querySelector("#changtocategoryBTN")

let adminCard = document.querySelector("#adminCard")
let closeAdminCard = document.querySelector("#closeAdminCard")
let adminImgInput = document.querySelector("#adminImgInput")
let adminTitleInput = document.querySelector("#adminTitleInput")
let adminDescripInput = document.querySelector("#adminDescripInput")
let adminPriceInput = document.querySelector("#adminPriceInput")
let adminCatInput = document.querySelector("#adminCatInput")
let submitAdmin = document.querySelector("#submitAdmin")
let showtext = document.querySelector("#showtext")
let showimg = document.querySelector("#showimg")
let showing = document.querySelector("#showing")

let adminCategory = document.querySelector("#adminCategory")
let closeAdminCat = document.querySelector("#closeAdminCat")
let categoryNameInput = document.querySelector("#categoryNameInput")
let removeCat = document.querySelector("#removeCat")
let addCat = document.querySelector("#addCat")
let showCategory = document.querySelector("#showCategory")


let productCard = []

let prodFavId = []


let count = +localStorage.getItem("countcat")
function CAT(cat,emoj){
    count++
    localStorage.setItem("countcat",`${count}`)
    localStorage.setItem(`cat${count}`,`${cat}`)
    localStorage.setItem(`emoj${count}`,`${emoj}`)
    addcat()
}

function addcat(){
    showCategory.innerHTML = ""
    adminCatInput.innerHTML = ""
    adminCatInput.innerHTML = `<option value="Select category">-- Select category  --</option>`
    for(let i=1; i <= +localStorage.getItem("countcat"); i++) {
        let option = document.createElement('option');
        option.value = localStorage.getItem(`cat${i}`);
        option.id = `categ${i}`;
        option.innerHTML = `${localStorage.getItem(`emoj${i}`)} ${localStorage.getItem(`cat${i}`)}`
        adminCatInput.appendChild(option);
        showCategory.innerHTML += `
            <div class="catshow" id="catshow${i}">
                <div>
                    <span id="catEmojy${i}">${localStorage.getItem(`emoj${i}`)}</span>
                    <p id="catShow${i}">${localStorage.getItem(`cat${i}`)}</p>
                </div>
                <button type="button" id="removeCat${i}" title="${localStorage.getItem(`cat${i}`)}">delete</button>
            </div>
        `
    }
}
addcat()

function removecat(cat){
    let noremove = []
    let noremoveEmoj = []
    for(var i=1; i <= +localStorage.getItem("countcat"); i++) {
        if(localStorage.getItem(`cat${i}`) !== cat) {
            noremove.push(localStorage.getItem(`cat${i}`))
            noremoveEmoj.push(localStorage.getItem(`emoj${i}`))
        } 
        localStorage.removeItem(`cat${i}`)
        localStorage.removeItem(`emoj${i}`)
    }

    for (var i=0; i < noremove.length ; i++) {
        localStorage.setItem(`cat${i+1}`,`${noremove[i]}`)
        localStorage.setItem(`emoj${i+1}`,`${noremoveEmoj[i]}`)
    }

    count = noremove.length
    localStorage.countcat = noremove.length
    window.location.reload() 
}


for(var i=1; i <= +localStorage.getItem("countcat"); i++) {
    let removecatbtn = document.querySelector(`#removeCat${i}`)
    removecatbtn.addEventListener("click",function(){
        removecat(removecatbtn.title)
    })
}


function loafprod(){
    secCard.innerHTML = ""
    productCard = JSON.parse(localStorage.getItem("prodact"))
    for(let i = 0; i < productCard.length; i++) {
        productCard[i].id = i
        secCard.innerHTML += `
            <div class="card" id="card${i}" tap="${0}">
                <button class="removBtn none" id="removBtn${i}" name="${productCard[i].title}"><i class="fa-solid fa-trash-can"></i></button>
                <button class="favBtn" id="favBtn${i}" value="${productCard[i].title}"><i class="fa-solid fa-heart"></i></button>
                <title id="cat${i}">${productCard[i].category}</title>
                <title id="${i}">${i}</title>
                <img src="${productCard[i].img}" alt="" id="imgCard${i}" class="imgcard">
                <div class="contCard">
                    <div class="textCard" id="textCard${i}">
                        <h3 id="title${i}">${productCard[i].title}</h3>
                        <p id="desc${i}">${productCard[i].descrip}</p>
                        <span id="pric${i}">${productCard[i].price} EGP</span>
                    </div>
                    <div class="cardBtn">
                        <button class="btnCart" id="btnCart${i}" addtocart="${productCard[i].title}">add to Cart</button>
                        <button class="btnBuy" id="btnBuy${i}">Buy now</button>
                    </div>
                </div>
            </div>
        `
    }
}
loafprod()

for (let i = 0; i < productCard.length; i++ ){
    let removBtn = document.querySelector(`#removBtn${i}`)
    removBtn.addEventListener("click",function(){
        let ID = ""
        for (let x = 0; x < removBtn.id.length; x++){
            for (let n = 0; n <= 9; n++){
                if(removBtn.id[x] == n) {
                    ID += removBtn.id[x]
                }
            }
        }
        productCard = productCard.filter(item => item.id != ID)
        localStorage.setItem("prodact",JSON.stringify(productCard)) 
        let newar = prodFavId.filter(function(ele){
            return removBtn.name !== ele
        })
        prodFavId = newar
        localStorage.favid = prodFavId
        loafprod()
        window.location.reload()
    })
}


adminImgInput.addEventListener("change",function(){
    let read = new FileReader()
    read.addEventListener("load",function(){
        sessionStorage.setItem("imagecardurl",read.result)
        showing.innerHTML = `<img src="${sessionStorage.getItem("imagecardurl")}" id="showimg"> `
    })
    read.readAsDataURL(this.files[0])
})


submitAdmin.addEventListener("click",function(eve){
    eve.preventDefault()

    let prod = {
        id:`${productCard.length}`,
        img:`${sessionStorage.getItem("imagecardurl")}`,
        title:`${adminTitleInput.value}`,
        descrip:`${adminDescripInput.value}`,
        price:`${adminPriceInput.value}`,
        category:`${adminCatInput.value}`
    }
    productCard.push(prod)
    localStorage.setItem("prodact",JSON.stringify(productCard)) 
    loafprod()
    window.location.reload()
})

function logadmin(){
    localStorage.removeItem("admin")
    if (getemail == "admin@add.com" && getuser == "admin" && getpass == "Admin2020@") {
        if (localStorage.getItem("Lusepass") || sessionStorage.getItem("Susepass")){
            localStorage.setItem("admin","true")
        }
    }
}
logadmin()

if (localStorage.getItem("admin") == "true") {
    adminAdd.classList.remove("none")

    let removeBTN = document.querySelectorAll(".removBtn")
    for (let i = 0; i < removeBTN.length; i++) {
        removeBTN[i].classList.remove("none")
    }

    adminAdd.addEventListener("click",function(){
        overlayAdminAll.classList.remove("none")
        adminCard.classList.remove("none")
    })

    closeAdminCard.addEventListener("click",function(){
        adminCard.classList.add("none")
        overlayAdminAll.classList.add("none")
    })

    changtocategoryBTN.addEventListener("click",function(){
        adminCard.classList.add("none")
        adminCategory.classList.remove("none")
    })

    changtoproductBTN.addEventListener("click",function(){
        adminCategory.classList.add("none")
        adminCard.classList.remove("none")
    })

    closeAdminCat.addEventListener("click",function(){
        adminCategory.classList.add("none")
        overlayAdminAll.classList.add("none")
    })

    addCat.addEventListener("click",function(eve){
        eve.preventDefault()
        CAT(categoryNameInput.value,categoryemojyInput.value)
        window.location.reload()
    })

}

//////
// localStorage.removeItem("favid")


if(!localStorage.getItem("favid")){
    localStorage.setItem("favid",JSON.stringify(prodFavId))
}else {
    prodFavId = JSON.parse(localStorage.getItem("favid"))
}

function activfav(){
    for(let i = 0; i < prodFavId.length; i++){
        let favBtn = document.querySelector(`[value="${prodFavId[i]}"]`)
        favBtn.classList.add("activred")
    }
}
activfav()

function arrfavid(id){
    prodFavId = JSON.parse(localStorage.getItem("favid"))
    let trueec = 0
    for (let i = 0; i < prodFavId.length; i++){
        if(id == prodFavId[i]){
            trueec += 1
        }
    }
    if(prodFavId.length == 0 || trueec == 0){
        if (prodFavId.length == 0) {
            prodFavId.push(id)
            let favBtn = document.querySelector(`[value="${id}"]`)
            favBtn.classList.add("activred") 
        } else {
            let trueor = 0
            for (let i = 0; i < prodFavId.length; i++){
                if(id == prodFavId[i]){
                    trueor += 1
                }
            }
            if (trueor == 0) {
                prodFavId.push(id)
                let favBtn = document.querySelector(`[value="${id}"]`)
                favBtn.classList.add("activred") 
            }
        }
    } else {
        let after = prodFavId.filter(function(ele){
            return ele !== id
        })
        prodFavId = after
        let favBtn = document.querySelector(`[value="${id}"]`)
        favBtn.classList.remove("activred") 
    }
    localStorage.favid = JSON.stringify(prodFavId)
    // activfav()
}






for (let i = 0; i < productCard.length; i++) {
    let addfavbtn = document.querySelector(`#favBtn${i}`)
    addfavbtn.addEventListener("click",function(){
        console.log(addfavbtn.value)
        arrfavid(addfavbtn.value)
    })
}


