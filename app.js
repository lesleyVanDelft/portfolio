const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('navMenu');

// hamburger.addEventListener('click', () => {
// 	hamburger.classList.toggle('active');
// 	menu.classList.toggle('active');
// });

const toggleMenu = target => {
	hamburger.classList.toggle('active');
	menu.classList.toggle('active');
};
