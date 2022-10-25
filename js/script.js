
const hamburger = document.querySelector('.hamburger');
const harmy_b = hamburger.querySelector('span');
const mobile_menu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () =>{
harmy_b.innerText =harmy_b.innerText ==='menu'
?'menu_open'
:'menu';

mobile_menu.classList.toggle('is-open');



})