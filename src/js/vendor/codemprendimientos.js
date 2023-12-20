const container = document.querySelector('.container')
import emprendimientos from "../../emprendimientos.js";


emprendimientos.map(emprendimiento => {
    var div = document.createElement('div')
    div.innerHTML = '<h5>' + emprendimiento.casa + '</h5>', '<div><figure>' + emprendimiento.foto +'<figure/></div>'
    document.body.appendChild('div')
})


