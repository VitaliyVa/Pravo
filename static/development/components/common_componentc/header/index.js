import './index.scss';
import return_anim_item from "./../../module/animation";




$('.btn_consultation').on('click', function () {
    $.fancybox.open({
        src: '#form_consultation',
        touch: false
    });
});


$('.header_menu').on('click', function () {
    $(this).toggleClass('noActive');
    $(this).toggleClass('active');
    $(this).parents('.header__block').toggleClass('active');
});



return_anim_item('.header_navbar_li', 'anim_top', 100);


