// var a_parent = document.querySelectorAll(".a_parent");
// var dd_menu_a = document.querySelectorAll(".dd_menu_a");

// a_parent.forEach(function (aitem) {

//     aitem.addEventListener("click", function () {
//         a_parent.forEach(function (aitem) {
//             aitem.classList.remove("active");
//         })
//         dd_menu_a.forEach(function (dd_menu_item) {
//             dd_menu_item.classList.remove("active");
//         })
//         aitem.classList.add("active");
//     })
// })

// dd_menu_a.forEach(function (dd_menu_item) {

//     dd_menu_item.addEventListener("click", function () {
//         dd_menu_a.forEach(function (dd_menu_item) {
//             dd_menu_item.classList.remove("active");
//         })
//         dd_menu_item.classList.add("active");
//     })
// })
function myFunction() {
    let body = document.querySelector("body");
    body.classList.toggle("modelactive");

}
function myFunction1() {
    let body = document.querySelector("body");
    body.classList.remove("modelactive")

}

function myFunction2() {
    let bodyshow = document.querySelector("body");
    bodyshow.classList.add("active");
}
function myFunction3() {
    let bodyshow = document.querySelector("body");
    bodyshow.classList.remove("active");
}

const popup = document.querySelector('.dialog-widget');
const close = document.querySelector('.closeicon');
let remove = document.getElementById('body');
window.onload = function () {
    setTimeout(function () {
        popup.style.visibility = "visible"
        // popup.style.transform = "translateY(0%)"
        // popup.classList.add("test");

    }, 1000)
    let remove = document.getElementById('body').className = 'test';
};

close.addEventListener('click', () => {
    popup.style.visibility = "hidden"
    remove.classList.remove("test");
    // remove.style.transform = "translateY(-150%)";


})
// function myFunction4(){
//     document.getElementById("myDIV").style.transform = "translateY(-150%)";
// }









