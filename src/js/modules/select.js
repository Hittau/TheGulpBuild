document.querySelectorAll('.select__wrapper').forEach(selectWrapper => {
	const selectBtn = selectWrapper.querySelector('.select__btn')
	const selectList = selectWrapper.querySelector('.select__list')
	const selectItem = selectList.querySelectorAll('.select__item')
	const selectValue = selectWrapper.querySelector('.select__value')

	selectBtn.onclick = _ => selectList.classList.toggle('active')

	selectItem.forEach(listItem => {
		listItem.onclick = _ => {
			selectBtn.textContent = listItem.textContent
			selectList.classList.remove('active')
			selectValue.value = listItem.dataset.value
		}
	})

	// Закрытие select при клике вне его
	document.addEventListener('click', e => {
		const selectArea = e.composedPath().includes(selectBtn)

		if (selectList.classList.contains('active')) {
			if (!selectArea) {
				selectList.classList.remove('active')
			}
		}
	})

	// Закрытие select при нажатии tab или esc
	document.addEventListener('keydown', e => {
		if (selectList.classList.contains('active')) {
			if (e.key === 'Tab' || e.key === 'Escape') {
				selectList.classList.remove('active')
			}
		}
	})
})
