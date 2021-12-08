(function(){
	// Functions
	function buildQuiz(){
	  // variable to store the HTML output
	  const output = [];
  
	  // for each question...
	  myQuestions.forEach(
		(currentQuestion, questionNumber) => {
  
		  // variable to store the list of possible answers
		  const answers = [];
  
		  // and for each available answer...
		  for(letter in currentQuestion.answers){
  
			// ...add an HTML radio button
			answers.push(
			  `<label>
				<input type="radio" name="question${questionNumber}" value="${letter}">
				${letter} :
				${currentQuestion.answers[letter]}
			  </label>`
			);
		  }
  
		  // add this question and its answers to the output
		  output.push(
			`<div class="slide">
			  <div class="question"> ${currentQuestion.question} </div>
			  <div class="answers"> ${answers.join("")} </div>
			</div>`
		  );
		}
	  );
  
	  // finally combine our output list into one string of HTML and put it on the page
	  quizContainer.innerHTML = output.join('');
	}
  
	function showResults(){
  
	  // gather answer containers from our quiz
	  const answerContainers = quizContainer.querySelectorAll('.answers');
  
	  // keep track of user's answers
	  let numCorrect = 0;
  
	  // for each question...
	  myQuestions.forEach( (currentQuestion, questionNumber) => {
  
		// find selected answer
		const answerContainer = answerContainers[questionNumber];
		const selector = `input[name=question${questionNumber}]:checked`;
		const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
		// if answer is correct
		if(userAnswer === currentQuestion.correctAnswer){
		  // add to the number of correct answers
		  numCorrect++;
  
		  // color the answers green
		  answerContainers[questionNumber].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
		  // color the answers red
		  answerContainers[questionNumber].style.color = 'red';
		}
	  });
  
	  // show number of correct answers out of total
	  resultsContainer.innerHTML = `${numCorrect} av ${myQuestions.length}`;
	  if(numCorrect === 3){
		  alert("Du har vunnet førstepremien!")
	  } else {
		  alert("Prøv igjen senere")
	  }
	}
  
	function showSlide(n) {
	  slides[currentSlide].classList.remove('active-slide');
	  slides[n].classList.add('active-slide');
	  currentSlide = n;
	  if(currentSlide === 0){
		previousButton.style.display = 'none';
	  }
	  else{
		previousButton.style.display = 'inline-block';
	  }
	  if(currentSlide === slides.length-1){
		nextButton.style.display = 'none';
		submitButton.style.display = 'inline-block';
	  }
	  else{
		nextButton.style.display = 'inline-block';
		submitButton.style.display = 'none';
	  }
	}
  
	function showNextSlide() {
	  showSlide(currentSlide + 1);
	}
  
	function showPreviousSlide() {
	  showSlide(currentSlide - 1);
	}
  
	// Variables
	const quizContainer = document.getElementById('quiz');
	const resultsContainer = document.getElementById('results');
	const submitButton = document.getElementById('submit');
	const myQuestions = [
	  {
		question: "Hvilken ukedag er Hedvig født?",
		answers: {
		  a: "Søndag",
		  b: "Mandag",
		  c: "Tirsdag"
		},
		correctAnswer: "b"
	  },
	  {
		question: "Hva sier Hedvig her? MEEEEER GAKK GAKK",
		answers: {
		  a: "Kan jeg vær så snill få litt mer mat",
		  b: "La oss gå ut å leke litt",
		  c: "Kjempefint om vi kan se sangen 'Vi roper det vi ser' på YouTube"
		},
		correctAnswer: "c"
	  },
	  {
		question: "Hva er kallenavnet til Fantus?",
		answers: {
		  a: "Gakk Gakk",
		  b: "Ha det",
		  c: "Mei Mei",
		  d: "Mapa"
		},
		correctAnswer: "b"
	  }
	];
  
	// Kick things off
	buildQuiz();
  
	// Pagination
	const previousButton = document.getElementById("previous");
	const nextButton = document.getElementById("next");
	const slides = document.querySelectorAll(".slide");
	let currentSlide = 0;
  
	// Show the first slide
	showSlide(currentSlide);
  
	// Event listeners
	submitButton.addEventListener('click', showResults);
	previousButton.addEventListener("click", showPreviousSlide);
	nextButton.addEventListener("click", showNextSlide);
  })();
  