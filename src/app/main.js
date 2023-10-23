AOS.init({
	duration: 700,
	once: false
});

// navbar burger
document.addEventListener('DOMContentLoaded', () => {
	const $navbarBurgers = Array.prototype.slice.call(
		document.querySelectorAll('.navbar-burger'),
		0
	);

	if ($navbarBurgers.length > 0) {
		$navbarBurgers.forEach((el) => {
			el.addEventListener('click', () => {
				const target = el.dataset.target;
				const $target = document.getElementById(target);
				el.classList.toggle('is-active');
				$target.classList.toggle('is-active');
			});
		});
	}
});

$(document).on('ready', function () {
	$('.navbar-burger').on('click', function () {
		$('.navbar-burger').toggleClass('is-active');
		$('.navbar-menu').toggleClass('is-active');
	});
});

// navbar on scroll
$(() => {
	$(window).on('scroll', (e) => {
		if ($(window).scrollTop() > $(window).height() / 2) {
			$('nav').addClass('nav-w');
			$('.navbar-menu').addClass('nav-w');
			$('.navbar-item').addClass('nav-dark');
			$('.navbar-link').addClass('nav-dark');
			$('.navbar-burger').removeClass('has-text-white');
			$('.navbar-burger').addClass('has-text-dark');
		} else {
			$('nav').removeClass('nav-w');
			$('.navbar-menu').removeClass('nav-w');
			$('.navbar-item').removeClass('nav-dark');
			$('.navbar-link').removeClass('nav-dark');
			$('.navbar-burger').removeClass('has-text-dark');
			$('.navbar-burger').addClass('has-text-white');
		}
	});
});

const durationEasing = 50,
	sections = ['', '#about', '#skills', '#projects', '#contact'];
$(document).on('keydown', (e) => {
	const index = sections.indexOf(window.location.hash);
	let hash = '';
	if (
		(e.code === 'ArrowDown' || e.code === 'ArrowRight' || e.code === 'Enter') &&
		index < sections.length - 1
	) {
		e.preventDefault();
		hash = sections[index + 1];
	} else if (e.code === 'ArrowUp' || e.code === 'ArrowLeft') {
		e.preventDefault();
		if (index > 0) hash = sections[index - 1];
	}
	window.location.hash = hash;
	$('html, body').animate(
		{
			scrollTop: $(hash).offset().top - $('nav').height()
		},
		durationEasing
	);
});
$('.jq-scroll').on('click', (e) => {
	e.preventDefault();
	const hash = e.target.hash;
	window.location.hash = hash;
	$('html, body').animate(
		{
			scrollTop: $(hash).offset().top - $('nav').height()
		},
		durationEasing
	);
});
$('.down-button').on('click', () => {
	$('html, body').animate(
		{
			scrollTop: $(window).scrollTop() + $(window).height()
		},
		durationEasing
	);
});
$('.up-button').on('click', () => {
	$('html, body').animate(
		{
			scrollTop: $(window).scrollTop() - $(window).height()
		},
		durationEasing
	);
});

// back to top
var btn = $('#backtotop');

$(window).on('scroll', () => {
	if ($(window).scrollTop() > 100) {
		btn.addClass('show');
	} else {
		btn.removeClass('show');
	}
});

btn.on('click', (e) => {
	e.preventDefault();
	$('html, body').animate({ scrollTop: 0 }, duration_easing);
});

// copyright year
document.getElementById('cp-year').innerHTML = new Date().getFullYear();
