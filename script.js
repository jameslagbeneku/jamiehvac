const openNav = document.querySelector('.fa-bars')
const mobileNav = document.querySelector('.mobile-nav')
const closeNav = document.querySelector('.fa-times')

openNav.addEventListener('click', () => mobileNav.style.right = '0')
closeNav.addEventListener('click', () => mobileNav.style.right = '-100%')
