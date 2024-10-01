const menu = document.querySelector(".menu-lateral")
const botao = document.querySelector(".btn")
const content = document.querySelector(".content") 
const background = document.querySelector(".background")
const body = document.querySelector("body")

function abrirMenu(){
    menu.classList.toggle('ativo')
    botao.classList.toggle('ativo')
    content.classList.toggle('ativo')
    background.classList.toggle('ativo')
    body.style.backgroundColor = menu.classList.contains('ativo') ? '#34495e' : '#ecf0f1'
}
