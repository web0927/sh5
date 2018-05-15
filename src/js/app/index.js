require(['jquery','swiper'], function ($, swiper) {
    var mySwiper = new swiper('.container',{
        loop:true,
        autoplay:{
            delay:1000
        },
        pagination:{
            el:'.swiper-pagination'
        }
    })
})