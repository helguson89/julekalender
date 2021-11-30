document.addEventListener("DOMContentLoaded", () => {
	var greenButton = document.getElementById("greenButton");
	var yellowButton = document.getElementById("yellowButton");
	var pinkButton = document.getElementById("pinkButton");
	var indigoButton = document.getElementById("indigoButton");
	var darkgreenButton = document.getElementById("darkgreenButton");
	var orangeButton = document.getElementById("orangeButton");
	var brownButton = document.getElementById("brownButton");
	var greyButton = document.getElementById("greyButton");
	var goldButton = document.getElementById("goldButton");
	greenButton.addEventListener("click", changeGreen);
	yellowButton.addEventListener("click", changeYellow);
	pinkButton.addEventListener("click", changePink);
	indigoButton.addEventListener("click", changeIndigo);
	darkgreenButton.addEventListener("click", changeDarkgreen);
	orangeButton.addEventListener("click", changeOrange);
	brownButton.addEventListener("click", changeBrown);
	greyButton.addEventListener("click", changeGrey);
	goldButton.addEventListener("click", changeGold);

	function changeGreen() {
		let test = document.getElementsByClassName("star")[0];
		test.setAttribute("fill", "green");
		console.log(test);
	}
	function changeYellow() {
		let test = document.getElementsByClassName("star")[0];
		test.setAttribute("fill", "yellow");
		console.log(test);
	}
	function changePink() {
		let test = document.getElementsByClassName("star")[0];
		test.setAttribute("fill", "pink");
		console.log(test);
	}
	function changeIndigo() {
		let test = document.getElementsByClassName("tree")[0];
		test.setAttribute("fill", "indigo");
		console.log(test);
	}
	function changeDarkgreen() {
		let test = document.getElementsByClassName("tree")[0];
		test.setAttribute("fill", "darkgreen");
		console.log(test);
	}
	function changeOrange() {
		let test = document.getElementsByClassName("tree")[0];
		test.setAttribute("fill", "orange");
		console.log(test);
	}
	function changeBrown() {
		let test = document.getElementsByClassName("trunk")[0];
		test.setAttribute("fill", "tan");
		console.log(test);
	}
	function changeGrey() {
		let test = document.getElementsByClassName("trunk")[0];
		test.setAttribute("fill", "silver");
		console.log(test);
	}
	function changeGold() {
		let test = document.getElementsByClassName("trunk")[0];
		test.setAttribute("fill", "gold");
		console.log(test);
	}

 
});


function message() {
    alert("Godt jobbet! Du er klar for å pynte et ekte tre nå")
}