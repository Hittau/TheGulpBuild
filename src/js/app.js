// burger and menu
const burger = document.querySelector('.burger')
const wrapper = document.querySelector('.wrapper')
const menu = document.querySelector('.menu')

burger.onclick = _ => {
	menu.classList.toggle('active')
	burger.classList.toggle('active')
	wrapper.classList.toggle('scroll-block')
}

// dynamic adapt
const headerBtn = document.querySelector('.header__btn')
const parent = document.querySelector('.header__container')

window.addEventListener('resize', event => {
	const screenWidth = window.screen.width
	if (screenWidth <= 767.98) {
		if (!headerBtn.classList.contains('adapted')) {
			menu.insertBefore(headerBtn, menu[4])
			headerBtn.classList.add('adapted')
		}
	} else {
		if (headerBtn.classList.contains('adapted')) {
			parent.insertBefore(headerBtn, parent[2])
			headerBtn.classList.remove('adapted')
		}
	}
})
