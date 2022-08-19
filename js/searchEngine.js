const allUlItems = document.querySelectorAll('.ul');
const input = document.querySelector('.card__input');
let word, ulItem;

const regExp = /([A-Z])/gi;
const inputValue = () => {
	word = input.value;
	allUlItems.forEach((element) => {
		ulItem = element.innerHTML;
		if (word.indexOf(regExp) === -1) {
			console.log(word);
		}
	});
};
input.addEventListener('keyup', inputValue);
