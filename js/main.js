
//TODO мобильное меню js

window.onload = function () {
    
    $(document).ready(function () {
        $("#phone").mask(" +7 (999)-999-99-99");
    });

    document.querySelector(".mob-menu").onclick = showMenu;
    document.querySelector(".mob-menu").onclick = hideMenu;

    function showMenu() {
        document.querySelector(".nav-list").style.right = "0";
    };
    function hideMenu() {
        document.querySelector(".nav-list").style.right = "-250px";
    };
};