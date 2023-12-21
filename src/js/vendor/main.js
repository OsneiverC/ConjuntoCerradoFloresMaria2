const cerrar = document.querySelector('.cerrar');
const abrir = document.querySelector('.abrir')
const menu = document.querySelector('nav')




cerrar.addEventListener('click', function(){
    menu.classList.remove('absolute')
    menu.classList.add('hidden');
})

abrir.addEventListener('click', function(){
    menu.classList.remove('hidden')
    menu.classList.add('absolute');
})


