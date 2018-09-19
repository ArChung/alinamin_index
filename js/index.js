$(document).ready(function () {


    initMenu();
    initSwiper();

})

function initSwiper() {
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        on: {
            slideChangeTransitionStart:function(){
                console.log('start');
                $('.swiper-slide iframe').parent().empty();
            },
            slideChangeTransitionEnd: function () {
                console.log('end');
                var slide = $('.swiper-slide-active');
                if(slide.attr('data-youtubeId')!=null){
                    slide.append('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+slide.attr('data-youtubeId')+'?rel=0&amp;showinfo=0&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')
                }
            },
        },
    })
}

function initMenu() {
    $(".m_menuBtn").click(function () {
        $('#m_menuPop').addClass('open')
    });

    $('#m_menuPop .mBtn').click(function () {
        $('#m_menuPop').toggleClass('open')
    })

    $('#m_menuPop .clozBtn').click(function () {
        $('#m_menuPop').toggleClass('open')
    })
}