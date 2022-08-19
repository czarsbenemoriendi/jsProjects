const allLiItems = document.querySelectorAll('.li');
const input = document.querySelector('.card__input');

const filter = () => {
	allLiItems.forEach((el) => {
		const match = new RegExp(input.value, 'i').test(el.textContent);
		if (match) {
			el.classList.remove('hide');
		} else {
			el.classList.add('hide');
		}
	});
};
input.addEventListener('keyup', filter);
