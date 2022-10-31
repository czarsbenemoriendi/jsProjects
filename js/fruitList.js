const input = document.querySelector('.card__input');
const warning = document.querySelector('.card__text--warning');
const nameOfTheFruit = document.querySelector('.headingFruitName');

const fruitDescr = {
	fruitName: document.querySelector('.fruitName'),
	genus: document.querySelector('.genus'),
	family: document.querySelector('.family'),
	order: document.querySelector('.order'),
	carbohydrates: document.querySelector('.carbohydrates'),
	protein: document.querySelector('.protein'),
	fat: document.querySelector('.fat'),
	calories: document.querySelector('.calories'),
	sugar: document.querySelector('.sugar'),
};

const {
	fruitName,
	genus,
	family,
	order,
	carbohydrates,
	protein,
	fat,
	calories,
	sugar,
} = fruitDescr;

const btn = document.querySelector('button');
const URL =
	'https://cors-anywhere.herokuapp.com/https://www.fruityvice.com/api/fruit/all';

let data, res;
let fruitNameFromInput;
let firstLetter, firstLetterCap, remainingLetters, capitalizedWord;

alert(
	`Before you use these application you have to temporarily unlock acces to this https://cors-anywhere.herokuapp.com/`
);

async function getFruityvice() {
	try {
		fruitNameFromInput = input.value;
		firstLetter = fruitNameFromInput.charAt(0);
		firstLetterCap = firstLetter.toUpperCase();
		remainingLetters = fruitNameFromInput.slice(1);
		capitalizedWord = firstLetterCap + remainingLetters;

		res = await fetch(URL, {
			method: 'GET',
		});
		data = await res.json();

		getDataFromArray();
	} catch {
		console.error('error');
	}
}

const getDataFromArray = function() {
	data.forEach((element) => {
		arr = Object.values(element);

		// I dont know how to stop my loop when it return
		if (arr.find((element) => element === capitalizedWord)) {
			warning.textContent = '';

			const dataArr = {
				dataGenus: element.genus,
				dataName: element.name,
				dataFamily: element.family,
				dataOrder: element.order,
				dataCarbohydrates: element.nutritions.carbohydrates,
				dataProtein: element.nutritions.protein,
				dataFat: element.nutritions.fat,
				dataCalories: element.nutritions.calories,
				dataSugar: element.nutritions.sugar,
			};
			const {
				dataGenus,
				dataName,
				dataFamily,
				dataOrder,
				dataCarbohydrates,
				dataProtein,
				dataFat,
				dataCalories,
				dataSugar,
			} = dataArr;

			fruitName.textContent = dataName;
			family.textContent = dataFamily;
			genus.textContent = dataGenus;
			order.textContent = dataOrder;
			carbohydrates.textContent = dataCarbohydrates;
			protein.textContent = dataProtein;
			fat.textContent = dataFat;
			calories.textContent = dataCalories;
			sugar.textContent = dataSugar;
		} else if (capitalizedWord === '') {
			warning.textContent = 'Wrong fruit name';
			fruitName.textContent = '';
			family.textContent = '';
			genus.textContent = '';
			order.textContent = '';
			carbohydrates.textContent = '';
			protein.textContent = '';
			fat.textContent = '';
			calories.textContent = '';
			sugar.textContent = '';
		}
	});
}

btn.addEventListener('click', getFruityvice);
document.addEventListener('keydown', function (e) {
	'Enter' === e.key && getFruityvice();
});
