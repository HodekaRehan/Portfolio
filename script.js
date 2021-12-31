const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu');
const navLink = document.querySelectorAll('.link');

hamburger.addEventListener('click', openMenu);

function openMenu() {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
}

navLink.forEach((n) => n.addEventListener('click', closeMenu));

function closeMenu() {
	hamburger.classList.remove('open');
	navMenu.classList.remove('open');
}


/*-------add/remove active class ---------*/

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', highlightLink);

function highlightLink() {
    let index = sections.length;

    while(--index && window.scrollY + 80 < sections[index].offsetTop) {}

    navLink.forEach((link) => link.classList.remove('active'));

    if(scrollY - sections[index].offsetTop) {
        navLink[index].classList.add('active');
    }
}

highlightLink();

//set date 
const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();



