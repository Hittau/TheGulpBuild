document.querySelectorAll('.nav__item').forEach(item => {
	item.onclick = e => {
		e.preventDefault()
		const contentId = e.target.getAttribute('href').replace('#', '')

		document
			.querySelectorAll('.nav__item')
			.forEach(link => link.classList.remove('active'))
		document
			.querySelectorAll('.tabs__content')
			.forEach(content => content.classList.remove('active'))

		item.classList.add('active')
		document.getElementById(contentId).classList.add('active')
	}
})
document.querySelector('.nav__item').click()
