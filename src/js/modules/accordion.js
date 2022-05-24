document.querySelectorAll('.accordion__title').forEach(item => {
	item.onclick = _ => {
		const parent = item.parentNode
		if (parent.classList.contains('active')) {
			parent.classList.remove('active')
		} else {
			document.querySelectorAll('.accordion__item').forEach(accordion => {
				accordion.classList.remove('active')
			})
			parent.classList.add('active')
		}
	}
})
