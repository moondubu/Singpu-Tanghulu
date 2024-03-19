function myFunction(imgs) {
    let expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.classList.add('fadeIn');
    setTimeout(() => {
        expandImg.classList.remove('fadeIn');
    }, 300);
}
function myFunction2(imgs) {
    let expandImg2 = document.getElementById("expandedImg2");
    expandImg2.src = imgs.src;
    expandImg2.classList.add('fadeIn');
    setTimeout(() => {
        expandImg2.classList.remove('fadeIn');
    }, 300);
}


$(document).ready(function(){
    new Swiper('.menu_slide_box', {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop : true,
        breakpoints: {
            1440: {
                slidesPerView: 4,
                spaceBetween: 125
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 60
            },
            850 : {
                slidesPerView: 3,
                spaceBetween: 60
            },
            600 : {
                slidesPerView: 2,
                spaceBetween: 60
            },

        }
    });
    let mainCateBtn = $('.nav > ul > li > a')
    let contactFloatBtn = $('.floating > ul > li > a')
    let s0ScrollY = $("#heroSection").offset().top;
    let nav = $('.nav')

    $('.logo, .btn_up').on('click', function (){
        $("html, body").stop().animate({
            scrollTop: s0ScrollY,
            duration: 400,
        })
        if(nav.hasClass('on')) {
            nav.removeClass('on');
        }
    });
    contactFloatBtn.on('click', function (e){
        if(nav.hasClass('on')) {
            nav.removeClass('on');
        }
        e.preventDefault();
        let targetHash = this.hash;
        let $targetHash = $(targetHash);

        $('html, body').stop().animate({
            'scrollTop': $targetHash.offset().top - 58
        }, 500, 'swing');
        return false;
    });
    mainCateBtn.on('click',function (e) {
        if(nav.hasClass('on')) {
            nav.removeClass('on');
        }
        let targetHash = this.hash;
        let $targetHash = $(targetHash);
        if($(this).parent('li').index() === 3) {
            e.preventDefault();
            $('.open_layer').toggleClass('on');
            return false;
        }else {
            e.preventDefault();
            $('html, body').stop().animate({
                'scrollTop': $targetHash.offset().top - 58
            }, 500, 'swing');
            return false;
        }
    });
    $('.btn_cost').on('click', function (){
        $('.open_layer').toggleClass('on');
    });
    $('.open_layer_close_btn').on('click', function (){
        $('.open_layer').toggleClass('on');
        if(nav.hasClass('on')) {
            nav.removeClass('on');
        }
    });


    // $("input[name='inflow']").click(function (){
    //     let value = $("input[name='inflow']:checked").val();
    //     if( value === "etc"){
    //         $("input[id='etc_text']").attr('disabled', false);
    //     }else {
    //         $("input[id='etc_text']").attr('disabled', true);
    //     }
    // });

    //모바일 햄버거 버튼

    $('.m_ham').click(function (){
        nav.toggleClass('on');
        if(nav.hasClass('on')) {
            $('.header').addClass('bg');
        } else if(scrollY < $('.main_hero').height()){
            $('.header').removeClass('bg');
        }
    });
    $('.submit_btn').click(function (){
        alert('본 사이트는 포트폴리오 사이트입니다.');
    });
});
$(window).scroll(function (){
    let scrollY = $(window).scrollTop();
    if( scrollY >= $('.main_hero').height() - 58){
        $('.header').addClass('bg');
    }else if(!$('.nav').hasClass('on')){
        $('.header').removeClass('bg');
    }
});


