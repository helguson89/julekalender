document.addEventListener("DOMContentLoaded", () => {
	//Card options
	const cardArray = [
		{
			name: "sandkasse",
			img: "images/sandkasse.jpg",
		},
		{
			name: "sandkasse",
			img: "images/sandkasse.jpg",
		},
		{
			name: "glad",
			img: "images/glad.jpg",
		},
		{
			name: "glad",
			img: "images/glad.jpg",
		},
		{
			name: "hjemme",
			img: "images/hjemme.jpg",
		},
		{
			name: "hjemme",
			img: "images/hjemme.jpg",
		},
		{
			name: "milla",
			img: "images/milla.jpg",
		},
		{
			name: "milla",
			img: "images/milla.jpg",
		},
		{
			name: "sommer",
			img: "images/sommer.jpg",
		},
		{
			name: "sommer",
			img: "images/sommer.jpg",
		},
		{
			name: "mamma",
			img: "images/mamma.jpg",
		},
		{
			name: "mamma",
			img: "images/mamma.jpg",
		},
	];

	cardArray.sort(() => 0.5 - Math.random());

	const grid = document.querySelector(".grid");
	const resultDisplay = document.querySelector('#result');
	let cardsChosen = [];
	let cardsChosenId = [];
	let cardsWon = [];

	//create board
	function createBoard() {
		for (let i = 0; i < cardArray.length; i++) {
			var card = document.createElement("img");
			card.setAttribute("src", "images/black.jpg");
			card.setAttribute("data-id", i);
			card.addEventListener("click", flipCard);
			grid.appendChild(card);
		}
	}

	//check for matches
	function checkForMatch() {
		const cards = document.querySelectorAll('img');
		const optionOneId = cardsChosenId[0];
		const optionTwoId = cardsChosenId[1];

		if (optionOneId == optionTwoId) {
			cards[optionOneId].setAttribute('src', 'images/black.jpg');
			cards[optionTwoId].setAttribute('src', 'images/black.jpg');
			alert('Du trykket jo på samme bildet!');
		} else if (cardsChosen[0] === cardsChosen[1]){
            alert('Du fant to like, gratulerer!')
            cards[optionOneId].setAttribute('src', 'images/white.jpg')
            cards[optionTwoId].setAttribute('src', 'images/white.jpg')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/black.jpg')
            cards[optionTwoId].setAttribute('src', 'images/black.jpg')
            alert('Prøv igjen!')
        }

        cardsChosen = []
        cardsChosenId = []
        //resultDisplay.textContent = cardsWon.lenght
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Gratulerer! Eller var det bare FLAX? Premie hentes i Furumogrenda 1'
        }

    }

	//flip your card
	function flipCard() {
		let cardId = this.getAttribute('data-id');
		cardsChosen.push(cardArray[cardId].name);
		cardsChosenId.push(cardId);
		this.setAttribute("src", cardArray[cardId].img);
		if (cardsChosen.length === 2) {
			setTimeout(checkForMatch, 500);
		}
	}

	createBoard();
});
