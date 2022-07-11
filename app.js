const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.navbar .menu');
const menuBtn = document.querySelector('.menu-btn');
const menuBtnI = document.querySelector('.menu-btn i');

window.onload = function () {
    window.addEventListener('scroll', function () {
        if (this.scrollY > 20) {
            console.log("scrollY>20");
            navbar.classList.add('sticky');
        }
        else {
            navbar.classList.remove('sticky');
        }
    });

    //Navbar toggle script
    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('active');
        menuBtnI.classList.toggle('active');
    });

}