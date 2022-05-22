const burger = document.querySelector('.burger')
const wrapper = document.querySelector('.wrapper')
const menu = document.querySelector('.menu')

// Открытие меню при клике на гамбургер
export const menuOpen = _ => {
	burger.onclick = _ => {
		menu.classList.toggle('active')
		burger.classList.toggle('active')
		wrapper.classList.toggle('scroll-block')
	}
	// Закрытие меню при клике вне его области
	document.addEventListener('click', e => {
		const menuArea =
			e.composedPath().includes(menu) || e.composedPath().includes(burger)

		if (menu.classList.contains('active')) {
			if (!menuArea) {
				menu.classList.remove('active')
				burger.classList.remove('active')
			}
		}
	})
}
