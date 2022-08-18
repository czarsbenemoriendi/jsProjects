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

async function getFruityvice() {
	try {
		fruitNameFromInput = input.value;
		res = await fetch(URL, {
			method: 'GET',
			'Retry-After': 120,
		});
		data = await res.json();
		getDataFromArray();
	} catch {
		console.error('error');
	}
}

function getDataFromArray() {
	data.forEach((element) => {
		const arr = Object.values(element);
		console.log(arr, element);
		if (arr.find((element) => arr.name === fruitNameFromInput)) {
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

			nameOfTheFruit.textContent = dataName;
			fruitName.textContent = dataName;
			family.textContent = dataFamily;
			genus.textContent = dataGenus;
			order.textContent = dataOrder;
			carbohydrates.textContent = dataCarbohydrates;
			protein.textContent = dataProtein;
			fat.textContent = dataFat;
			calories.textContent = dataCalories;
			sugar.textContent = dataSugar;
			// warning.classList.add('hide');
			// warning.textContent = '';
		} else {
			console.log('error');
			warning.classList.remove('hide');
			warning.textContent = 'wrong name entered';
		}
	});
}

btn.addEventListener('click', getFruityvice);
document.addEventListener('keydown', function (e) {
	'Enter' === e.key && getFruityvice();
});
