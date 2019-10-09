$(function () {

    // меню-гамбургер
    $('.header__opener').click(function () {
        $('.header__collapse').toggleClass('d-none').css('order', '1');
        $('.header__list').toggleClass('menu-opened');
    });

	//плавная прокрутка
	$("a#go").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });

	//всплывающее модальное окно
    $('#btn').click(function (e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal();
    });

    $('a#button').click(function (e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal();
    });

    $('a#buttons').click(function (e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal();
    });

    //галерея изображений
     $('.photo__wrapper').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
    });
});