let show = true;
const menuContent = document.querySelector('.content');
const menuMobile = menuContent.querySelector('.menu-mobile');

menuMobile.addEventListener('click', ()=> {
    menuContent.classList.toggle('on', show);
    show = !show;
})