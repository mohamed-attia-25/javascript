// الحجات الي هنستدعيها ونحطها في متغير هيا البدي عشن الباك جروند كلر و كل العناصر عشان نطبق عليها للون التيكست جوا لوب عشان يطبق علي كلو
// و زرار المود عشان نعمل عليه الحدث كليك والناف بتن الدايره الي بتتحرك جوا
let body = document.body;
let allElement = document.querySelectorAll("*");
let mood = document.getElementById("mood");
let navBtn = document.getElementById("navBtn");


// لو مفيس حاجه في اللوكل ستوردج اسمها مود اعملي واحده وحط فيها القيمه ليت نفذ فور تشغيل الصفحه
if (!localStorage.getItem("mood")) {
    localStorage.setItem("mood", "light");
}

// اتاكد جوا الفانكشن لو الوكال استوردج الي اسمها مود دارك هتنفذ الدارك مود ولو مش دارك يعني ليت هتنفز الليت مود 
// عملناها فانكشن عشان نستدعيها تاني تحت
function mode() {
    if (localStorage.mood == "dark") {
        for (let i = 0; i < allElement.length; i++) {
            allElement[i].style.setProperty("color", "#ffffff");
        }
        body.style.cssText = `background-color: #0B1228;`;
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

// نفذو علي طول الفانكشن اول لما الصفحه تفتح
mode();


// اعملي ايفينت كليك علي الزرار لما ادوس علي والمود الي في اللوكال استوردج ليت تخليه دارك والعكس
// بعد كدا استدعي الداله الي فوق عشان تغير الوضع علي حسب الي لسا متخزن حالا بعد الكليك في اللوكال ستوردج
mood.addEventListener("click",function(){
    if (localStorage.mood == "light") {
        localStorage.mood = "dark"
    } else {
        localStorage.mood = "light"
    }
    mode();
});


