const menu = document.getElementById("mySidenav");
const menuButton = document.getElementById("menu-button");

function openNav() {
    menu.style.width = "70%";
}

function closeNav() {
    menu.style.width = "0";
}

window.addEventListener('click', function(event){
    if(event.target != menu && event.target != menuButton){
        closeNav();
    }
});