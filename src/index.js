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