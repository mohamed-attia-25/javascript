let favProductSave = document.querySelector("#favProductSave")
let productfav = []
let productfavid = []



function loadAdd(){
    productfav = JSON.parse(localStorage.getItem("prodact"))
    productfavid = JSON.parse(localStorage.getItem("favid"))
    favProductSave.innerHTML = ""
    if(productfavid.length != 0){
        for (let i = 0; i < productfavid.length; i++){
            let favsave = productfav.filter(function(ele){
                if (ele.title == productfavid[i]){
                    return ele
                }
            })
            favProductSave.innerHTML += `
                <div class="favprod" id="favProd${favsave[0].id}">
                    <div class="contfav">
                        <dic class="imgfav">
                            <img src="${favsave[0].img}" alt="">
                        </dic>
                        <div class="textFav">
                            <span>${favsave[0].title}</span>
                            <span>${favsave[0].descrip}</span>
                        </div>
                    </div>
                    <div class="btnfav">
                        <button type="button" id="btnRemoveFav${favsave[0].id}" value="${favsave[0].title}">remove</button>
                    </div>
                </div>
            `
        }
    }

}
loadAdd()

function removefaveprod(id){
    let removeprodfav = productfavid.filter(function(ele){
        return ele !== id
    })
    productfavid = removeprodfav
    localStorage.favid = JSON.stringify(productfavid)
    loadAdd()
    window.location.reload()
}

for (let i = 0; i < productfavid.length; i++) {
    let btnremovefav = document.querySelector(`[value="${productfavid[i]}"]`)
    btnremovefav.addEventListener("click",function(){
        removefaveprod(btnremovefav.value)
    })
}


