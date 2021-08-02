const btnWrap = document.querySelector('.filter-sect__list');

btnWrap.addEventListener('click', function(e) {
	if (e.target.classList.contains('filter-sect__text')) {
		e.target.closest('.filter-sect__item').classList.toggle('active');
	}
});