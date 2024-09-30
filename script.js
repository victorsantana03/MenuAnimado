const menu = document.querySelector(".menu-lateral")
const botao = document.querySelector(".btn")
const content = document.querySelector(".content") 
const background = document.querySelector(".background")

function abrirMenu(){
    menu.classList.toggle('ativo')
    botao.classList.toggle('ativo')
    content.classList.toggle('ativo')
    background.classList.toggle('ativo')
}
