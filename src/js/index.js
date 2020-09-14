const menu = document.getElementById("mySidenav");
const menuButton = document.getElementById("menu-button");

function openNav() {
    menu.style.width = "70%";
    menu.style.visibility = "visible";
}

function closeNav() {
    menu.style.width = "0";
    menu.style.visibility = "hidden";
}

function keyPress (e) {
    if(e.key === "Escape") {
        closeNav();
    }
}

window.addEventListener('click', function(event){
    if(event.target != menu && event.target != menuButton){
        closeNav();
    }
});

window.addEventListener('keydown', keyPress);