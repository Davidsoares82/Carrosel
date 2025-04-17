'use strict'

const images = [
    { id: 1, url: 'Photos-me and my love/imagem_convertida_1.jpg' },
    { id: 2, url: 'Photos-me and my love/imagem_convertida_2.jpg' },
    { id: 3, url: 'Photos-me and my love/imagem_convertida_3.jpg' },
    { id: 4, url: 'Photos-me and my love/imagem_convertida_4.jpg' },
    { id: 5, url: 'Photos-me and my love/imagem_convertida_5.jpg' }

]

const containerItems = document.querySelector('#container-items')

const loadImagem = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
        <div class= 'item'>
        <img src = '${image.url}' alt = 'Imagem ${image.id}' >
        </div>
        `
    })
}

loadImagem(images, containerItems)

let items = document.querySelectorAll('.item')

const previous = () => {
    containerItems.appendChild(items[0])
    items = document.querySelectorAll('.item')
}

const next = () => {
    const lastItem = items[items.length - 1]
    containerItems.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item')

}

setInterval(() =>{
    next()

},4000)

document.querySelector('#previous').addEventListener('click', previous)

document.querySelector('#next').addEventListener('click', next)