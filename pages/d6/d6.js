const game = () => {
    let pScore = 0;
    let cScore = 0;
  
    //Start the Game
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    //Play Match
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
  
      hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });
      //Computer Options
      const computerOptions = ["stein", "papir", "saks"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
          //Computer Choice
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
  
          setTimeout(() => {
            //Here is where we call compare hands
            compareHands(this.textContent, computerChoice);
            //Update Images
            playerHand.src = `${this.textContent}.png`;
            computerHand.src = `${computerChoice}.png`;
          }, 2000);
          //Animation
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";
        });
      });
    };
  
    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
      if(pScore === 3){alert("Gratulerer! Du har vunnet førstepremien")}
      if(cScore === 3){
          alert("Beklager! Prøv igjen i morgen");
          window.close();
    }
    };
  
    const compareHands = (playerChoice, computerChoice) => {
      //Update Text
      const winner = document.querySelector(".winner");
      //Checking for a tie
      if (playerChoice === computerChoice) {
        winner.textContent = "It is a tie";
        return;
      }
      //Check for stein
      if (playerChoice === "stein") {
        if (computerChoice === "saks") {
          winner.textContent = "Eline vinner!";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Helge vinner!";
          cScore++;
          updateScore();
          return;
        }
      }
      //Check for papir
      if (playerChoice === "papir") {
        if (computerChoice === "saks") {
          winner.textContent = "Helge vinner!";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Eline vinner";
          pScore++;
          updateScore();
          return;
        }
      }
      //Check for saks
      if (playerChoice === "saks") {
        if (computerChoice === "stein") {
          winner.textContent = "Helge vinner";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Eline vinner";
          pScore++;
          updateScore();
          return;
        }
      }
    };

    
  
    //Is call all the inner function
    startGame();
    playMatch();
  };
  
  //start the game function
  game();