
import emprendimientos from "../../emprendimientos.js";
const container = document.querySelector('#container_emprendimiento')

emprendimientos.map(emprendimiento => {
    const containerCard = document.createElement('div')
    const h2Emprende = document.createElement('h2')
    const titleHouse = document.createElement('h5')
    const divCard = document.createElement('div')
    const figureImg = document.createElement('div')
    const img = document.createElement('img')
    const ulList = document.createElement('ul')
    const liInstagram = document.createElement('li')
    const liName = document.createElement('li')
    const liCelular = document.createElement('li')
    const btnContact = document.createElement('a')
    const iconBtn = document.createElement('button')

    h2Emprende.classList.add('font-bold', 'text-[1.5rem]', 'text-[#02519C]', 'text-center')
    titleHouse.classList.add('text-center', 'font-bold', 'text-[1.5rem]', 'mb-[15px]', 'text-[#02519C]')
    container.classList.add('flex', 'flex-wrap', 'gap-5', 'justify-center')
    containerCard.classList.add('p-4', 'shadow-2xl', 'sm:w-[30%]', 'rounded')
    btnContact.classList.add('bg-[#02519C]', 'py-2', 'px-3', 'text-white', 'text-center', 'block', 'w-[100%]')
    figureImg.classList.add('mt-[10px]', 'm-auto')
    img.classList.add('sm:w-[600px]', 'sm:h-[300px]')

    btnContact.setAttribute('href', 'https://wa.me/57' + emprendimiento.celular)
    btnContact.innerHTML = '<i class="fa-brands fa-whatsapp"></i> (+57) ' + emprendimiento.celular
    img.setAttribute('src', emprendimiento.foto)
    liInstagram.textContent = emprendimiento.instagram
    liName.textContent = emprendimiento.propietario
    h2Emprende.textContent = emprendimiento.emprendimiento
    titleHouse.textContent = emprendimiento.casa

    containerCard.appendChild(titleHouse)
    containerCard.appendChild(h2Emprende)
    ulList.appendChild(liInstagram)
    ulList.appendChild(liName)
    ulList.appendChild(liCelular)
    containerCard.appendChild(ulList)
    figureImg.appendChild(img)
    containerCard.appendChild(figureImg)
    divCard.appendChild(iconBtn)
    divCard.appendChild(btnContact)
    containerCard.appendChild(divCard)
    container.appendChild(containerCard)
})


function filterFrios() {
    emprendimientos.filter(emprendimiento => emprendimiento.categoria == 'frios')
    return emprendimiento.categoria == 'frios'
} 


// switch (emprendimientos.categoria){
//     case 'frios': 
//     break
// }