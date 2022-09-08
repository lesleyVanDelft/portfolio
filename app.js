const container = document.getElementById('container');
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
const navbarMenu = document.getElementById('navMenu');
const navbarList = document.getElementById('navList');
const logo = document.getElementById('logo');
const body = document.querySelector('body');
const span = document.querySelector('.yellowAccent');
const landingText = document.querySelector('.landing__text');
const aboutBtn = document.getElementById('aboutBtn');
const listAboutBtn = document.getElementById('listAbout');
const topScrollBtn = document.getElementById('scrollToTop');
const aboutSection = document.getElementById('about');
const projectsSection = document.getElementById('projects');
const contactSection = document.getElementById('contact');

// viewport height
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// MOBILE handle scroll to top button
container.addEventListener('scroll', () => {
	if (container.scrollTop > 150) {
		topScrollBtn.style.opacity = 1;
	} else {
		topScrollBtn.style.opacity = 0;
	}
});

topScrollBtn.addEventListener('click', () => {
	container.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	// document.location.href = document.location.href.replace(
	// 	/(#)[0-9A-Za-z-]+/gi,
	// 	''
	// );
});
// logo click to top
logo.addEventListener('click', () => {
	container.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});

// MOBILE toggle navigation menu
const toggleMenu = () => {
	hamburger.classList.toggle('active');
	navbarMenu.classList.toggle('active');
};

// Scroll to #about section
const getAbout = () => {
	aboutSection.scrollIntoView();
};
// Scroll to #projects section
const getProjects = () => {
	projectsSection.scrollIntoView();
};
// Scroll to #contact section
const getContact = () => {
	contactSection.scrollIntoView();
};

// Handle click on landing CTA button
aboutBtn.addEventListener('click', () => {
	getAbout();
});

// // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// Handle mobile menu click, close menu
// all navmenu Li node list
const listElements = document.querySelectorAll('#navList li');
// array made from navmenu node list
const menuArray = Array.from(listElements);

// map over array from nodelist, add listener to each <li>, click removes active class
menuArray.map(li => {
	li.addEventListener('click', () => {
		if (hamburger.classList.contains('active')) {
			hamburger.classList.remove('active');
			navbarMenu.classList.remove('active');
		}
	});
});

// window click listener, animate on menu active, else not visible
window.addEventListener('click', () => {
	if (navbarMenu.classList.contains('active')) {
		anime({
			targets: listElements,
			opacity: 1,
			delay: anime.stagger(100, { start: 125 }),
		});
	} else {
		anime({
			targets: listElements,
			opacity: 0,
		});
	}
});

anime({
	targets: 'body',
	opacity: 1,
	duration: 2500,
});
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
		duration: 450,
	});
