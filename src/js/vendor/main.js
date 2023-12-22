const cerrar = document.querySelector('.cerrar');
const abrir = document.querySelector('.abrir')
const menu = document.querySelector('nav')



cerrar.addEventListener('click', function(){
    menu.classList.remove('absolute')
    menu.classList.add('hidden');
    document.body.classList.remove('overflow-hidden')
})

abrir.addEventListener('click', function(){
    menu.classList.remove('hidden')
    menu.classList.add('absolute');
    document.body.classList.add('overflow-hidden')
})

function up () {
    const scroll = document.documentElement.scrollTop
    if (scroll > 0){
        window.requestAnimationFrame(up)
        window.scrollTo (0, scroll - (scroll / 5) ) 
    }
    
}
document.getElementById('up').addEventListener('click', up)

window.onscroll = function(){
    const scroll = document.documentElement.scrollTop
    if (scroll > 500){
        document.getElementById('up').style.transform = 'scale(1)'
    }else if (scroll < 500){
        document.getElementById('up').style.transform = 'scale(0)'
    }
}