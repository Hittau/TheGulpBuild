// динамический адаптив
// перебрасывание кнопки в меню
const headerBtn = document.querySelector('.header__btn')
const parent = document.querySelector('.header__container')

export const da = _ => {
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
}
