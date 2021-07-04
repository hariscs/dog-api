const doggos = document.querySelector('.doggos');
const addDog = document.querySelector('.random-btn');
const huskyBtn = document.querySelector('.husky-btn');
const germanBtn = document.querySelector('.german-btn');
const husky = 'https://dog.ceo/api/breed/husky/images/random';
const DOG_URL = 'https://dog.ceo/api/breeds/image/random';
const german = 'https://dog.ceo/api/breed/germanshepherd/images/random';

// requesting API
function addNewDog() {
	const promise = fetch(DOG_URL);

	promise
		.then(function (response) {
			processingResponse = response.json();
			return processingResponse;
		})
		.then(function (processedResponse) {
			const img = document.createElement('img');
			img.src = processedResponse.message;
			img.alt = 'cute dog';
			doggos.appendChild(img);
		});
}

function addHusky() {
	const promise = fetch(husky);

	promise
		.then(function (response) {
			processingResponse = response.json();
			return processingResponse;
		})
		.then(function (processedResponse) {
			const img = document.createElement('img');
			img.src = processedResponse.message;
			img.alt = 'cute husky';
			doggos.appendChild(img);
		});
}

function addGerman() {
	const promise = fetch(german);

	promise
		.then(function (response) {
			processingResponse = response.json();
			return processingResponse;
		})
		.then(function (processedResponse) {
			const img = document.createElement('img');
			img.src = processedResponse.message;
			img.alt = 'cute husky';
			doggos.appendChild(img);
		});
}

huskyBtn.addEventListener('click', addHusky);
addDog.addEventListener('click', addNewDog);
germanBtn.addEventListener('click', addGerman);
