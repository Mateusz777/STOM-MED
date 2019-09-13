const menuToggler = document.querySelector('.menu-toggler');

menuToggler.addEventListener("click", function () {
    document.querySelector('.nav-list').classList.toggle('open');
})