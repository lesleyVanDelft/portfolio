const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('navMenu');
const body = document.querySelector('body');
const span = document.querySelector('.yellowAccent');
const landingText = document.querySelector('.landing__text');

const toggleMenu = target => {
	hamburger.classList.toggle('active');
	menu.classList.toggle('active');
};

// viewport height
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

anime({
	targets: 'body',
	opacity: 1,
	duration: 2500,
	// delay: anime.stagger(1000),
});
// anime({
// 	targets: '.landing__text .yellowAccent',
// 	opacity: 1,
// 	// duration: 500,
// });

// anime({
// 	targets: body,
// 	opacity: 1,
// 	duration: 4000,
// });

// anime({
// 	targets: '.navbar',
// 	opacity: 1,
// 	duration: 5000,
// 	delay: 300,
// });

// anime({
// 	targets: '.landing__text',
// 	opacity: 1,
// 	duration: 5000,
// 	delay: 800,
// });
// anime({
// 	targets: '.btn-about',
// 	opacity: 1,
// 	duration: 5000,
// 	delay: 1200,
// });

const animateTimeline = anime.timeline({
	easing: 'easeInCubic',
	duration: 800,
});

animateTimeline
	.add({
		targets: '.navbar',
		opacity: 1,
	})
	.add({
		targets: '.landing__text .yellowAccent',
		opacity: 1,
	})
	.add({
		targets: '.landing__text',
		update: function () {
			landingText.style.color = 'rgba(255, 255, 255, 100%)';
		},
	})
	.add({
		targets: '.btn-about',
		opacity: 1,
		duration: 200,
	});

// anime({
// 	targets: '.landing__text .yellowAccent',
// 	opacity: 1,
// 	delay: anime.stagger(1250),
// });

// anime;
