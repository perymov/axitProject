$(document).ready(function () {
	// МЕНЮ БУРГЕР
	$('.menu__icon').click(function (event) {
		$('.menu__icon, .menu__body').toggleClass('active');
		$('body').toggleClass('lock');
	});
	// АВТОЗАКРЫТИЕ МЕНЮ БУРГЕР
	$('.menu__link').click(function (event) {
		$('.menu__icon, .menu__body').removeClass('active');
		$('body').removeClass('lock');
	})

	// ПЛАВНАЯ ПРОКРУТКА ДО ЯКОРЯ
	$('a.menu__link, a.header__logo').click(function () {
		let target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top - 70
		}, 1000)
	});

	// ВЫСКАКИВАЮЩИЕ БЛОКИ В СЕКТОРЕ PRICING
	$('.pricing__row--column1').hover(function (event) {
		$('.item4--column1').toggleClass('active');
	});
	$('.pricing__row--column2').hover(function (event) {
		$('.item4--column2').toggleClass('active');
	});
	$('.pricing__row--column3').hover(function (event) {
		$('.item4--column3').toggleClass('active');
	});

	// ВКЛАДКИ-ТАБЫ
	$('.tabs__item').click(function (e) {
		e.preventDefault();

		$('.tabs__item').removeClass('tabs__item--active');
		$('.tabs__block').removeClass('tabs__block--active');

		$(this).addClass('tabs__item--active');
		$($(this).attr('href')).addClass('tabs__block--active');
	});

	document.getElementById("defaultOpen").click(function (e) {
		e.preventDefault()
	});

});