new Swiper('.carousel',{
    slidesPerView: 2.8,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    mousewheel:{
        eventTarget: ".carousel"
    },
})
