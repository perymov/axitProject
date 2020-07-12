$(document).ready(function () {
	$('.menu__icon').click(function (event) {
		$('.menu__icon, .menu__body').toggleClass('active');
		$('body').toggleClass('lock');
	});


	$('.pricing__row--column1').hover(function (event) {
		$('.item4--column1').toggleClass('active');
	});
	$('.pricing__row--column2').hover(function (event) {
		$('.item4--column2').toggleClass('active');
	});
	$('.pricing__row--column3').hover(function (event) {
		$('.item4--column3').toggleClass('active');
	});

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