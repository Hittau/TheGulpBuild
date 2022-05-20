// burger
const burger = document.querySelector('.burger')
const wrapper = document.querySelector('.wrapper')

burger.onclick = _ => {
	burger.classList.toggle('active')
	wrapper.classList.toggle('scroll_block')
}
