import noticias from "../../comuniadad.js";
const noticiaSec = document.querySelector('#noticiasSec')

noticias.map(noticia =>{
    const h3Noticias = document.createElement('h5')
    const containerDiv = document.createElement('div')
    const articleNoticia = document.createElement('article')
    const parrafoNoticia = document.createElement('p')
    const figureNoticia = document.createElement('div')
    const imgNoticia = document.createElement('img')



    h3Noticias.classList.add('text-[2rem]','text-center', 'font-bold', 'mb-[3%]');
    figureNoticia.classList.add('lg:flex')
    imgNoticia.classList.add('sm:w-[50%]','shadow-2xl')
    parrafoNoticia.classList.add('flex','flex-col', 'self-center', 'p-5', 'text-[1.5rem]')
    articleNoticia.classList.add('mb-[5%]')


    h3Noticias.innerHTML = noticia.titulo
    parrafoNoticia.innerHTML = noticia.contenido + '<br>' + '<small class="text-gray-500 text-end block">'+ '<i class="fa-solid fa-calendar-days"></i>  ' + noticia.fecha + '</samll>'
    imgNoticia.setAttribute('src', noticia.foto)
    imgNoticia.setAttribute('data-lightbox', "models")
    imgNoticia.setAttribute('data-title', "Noticia")




    containerDiv.appendChild(h3Noticias)
    figureNoticia.appendChild(imgNoticia)
    figureNoticia.appendChild(parrafoNoticia) 
    containerDiv.appendChild(figureNoticia)
    articleNoticia.appendChild(containerDiv)
    noticiaSec.appendChild(articleNoticia)
})



