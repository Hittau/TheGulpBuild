// burger and menu
const burger = document.querySelector('.burger')
const wrapper = document.querySelector('.wrapper')
const menu = document.querySelector('.menu')

burger.onclick = _ => {
	menu.classList.toggle('active')
	burger.classList.toggle('active')
	wrapper.classList.toggle('scroll-block')
}
