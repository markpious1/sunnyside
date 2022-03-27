var menu=document.getElementById('menu');
var ul = document.querySelector('ul');

menu.addEventListener('click',()=> {
    ul.classList.toggle('active');   
})