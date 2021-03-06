new Swiper('.carousel',{
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    mousewheel:{
        eventTarget: ".carousel"
    },
    freeMode: true,
    loop: true
})

function scrollUp() {
    window.scrollTo({top: 0, behavior: "smooth"})
}
function scrollDown(){
    window.scrollTo({top: 10000, behavior: 'smooth'})
}

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})