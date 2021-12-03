function donutbite() {
	document.getElementById("bite1").style.visibility = "visible";
	document.getElementById("bite2").style.visibility = "visible";
	document.getElementById("bite3").style.visibility = "visible";
	document.getElementById("donutFill").style.cursor = "auto";
	document.getElementById("donutFill").style.cursor = "auto";
}

var box1 = new Box(1);
var box2 = new Box(2);
var box3 = new Box(3);
var box4 = new Box(4);
var box5 = new Box(5);
var box6 = new Box(6);
var box7 = new Box(7);
var box8 = new Box(8);
var box9 = new Box(9);
function Box(order) {
	this.order = order;
	this.rand = Math.random();
	this.elm = false;
}
Box.prototype.sortTemp = function (boxId) {
	if (this.rand <= 0.325) {
		this.elm = "Stratos";
	} else if (this.rand <= 0.475) {
		this.elm = "Flaxlodd";
	} else if (this.rand <= 0.675) {
		this.elm = "Julebrus";
	} else if (this.rand <= 0.85) {
		this.elm = "Håndkrem";
	} else if (this.rand <= 0.925) {
		this.elm = "Question Mark";
	} else {
		this.elm = "Overaskelse";
	}
	switch (this.elm) {
		case "Stratos":
			document.getElementById("temp" + boxId).style.backgroundColor = "black";
			document.getElementById("temp" + boxId).innerHTML = "Stratos";
			test();
			break;
		case "Flaxlodd":
			document.getElementById("temp" + boxId).style.backgroundColor = "#8A5C2E";
			document.getElementById("temp" + boxId).innerHTML = "Flaxlodd";
			test();
			break;
		case "Julebrus":
			document.getElementById("temp" + boxId).style.backgroundColor = "#FFD119";
			document.getElementById("temp" + boxId).innerHTML = "Julebrus";
			test();
			break;
		case "Håndkrem":
			document.getElementById("temp" + boxId).style.backgroundColor = "	#CC2900";
			document.getElementById("temp" + boxId).innerHTML = "Håndkrem";
			test();
			break;
		case "Question Mark":
			document.getElementById("temp" + boxId).style.backgroundColor = "#B2B2B2";
			document.getElementById("temp" + boxId).innerHTML = "?";
			test();
			break;
		default:
			document.getElementById("temp" + boxId).style.backgroundColor = "purple";
			document.getElementById("temp" + boxId).style.fontSize = "21px";
			document.getElementById("temp" + boxId).innerHTML = "Overaskelse";

			test();
	}

	//if(box1.elm === "Stratos"){alert("BLACK");}
	//else {alert(box1.elm);}
};
function test() {
	if (box1.elm === box2.elm && box1.elm === box3.elm && box1.elm !== false) {
		prize(box1.elm);
	} else if (
		box1.elm === box5.elm &&
		box1.elm === box9.elm &&
		box1.elm !== false
	) {
		prize(box1.elm);
	} else if (
		box1.elm === box4.elm &&
		box1.elm === box7.elm &&
		box1.elm !== false
	) {
		prize(box1.elm);
	} else if (
		box2.elm === box5.elm &&
		box2.elm === box8.elm &&
		box2.elm !== false
	) {
		prize(box2.elm);
	} else if (
		box3.elm === box6.elm &&
		box3.elm === box9.elm &&
		box3.elm !== false
	) {
		prize(box3.elm);
	} else if (
		box3.elm === box5.elm &&
		box3.elm === box7.elm &&
		box3.elm !== false
	) {
		prize(box3.elm);
	} else if (
		box4.elm === box6.elm &&
		box4.elm === box5.elm &&
		box4.elm !== false
	) {
		prize(box4.elm);
	} else if (
		box7.elm === box8.elm &&
		box7.elm === box9.elm &&
		box7.elm !== false
	) {
		prize(box7.elm);
	} else if (
		box1.elm !== false &&
		box2.elm !== false &&
		box3.elm !== false &&
		box4.elm !== false &&
		box5.elm !== false &&
		box6.elm !== false &&
		box7.elm !== false &&
		box8.elm !== false &&
		box9.elm !== false
	) {
		document.getElementById("endB").style.visibility = "visible";
		document.getElementById("endDiv").innerHTML =
			"Beklager, ingen gevinst! Prøv igjen senere";
		document.getElementById("endDiv").style.visibility = "visible";
	}
}
function prize(element) {
	switch (element) {
		case "Stratos":
			document.getElementById("endB").style.visibility = "visible";
			document.getElementById("endIMGB").style.visibility = "visible";
			document.getElementById("endIMGB").src =
				"https://www.nidar.no/app/uploads/sites/2/2019/03/Salty-Caramel-plate-lavooplst-600x600.png";
			document.getElementById("endDiv").style.visibility = "visible";
			document.getElementById("endDiv").innerHTML =
				"Gratulerer, du har vunnet en Stratos!";
			document.getElementById("endDiv").style.marginLeft = "500px";
			break;
		case "Flaxlodd":
			document.getElementById("endB").style.visibility = "visible";
			document.getElementById("endIMG").style.visibility = "visible";
			document.getElementById("endDiv").style.visibility = "visible";
			document.getElementById("endDiv").innerHTML =
				"Gratulerer, du vant et Flaxlodd!";
			document.getElementById("endDiv").style.marginLeft = "500px";
			document.getElementById("endIMG").src =
				"https://www.norsk-tipping.no/artikler/_image/183671/label/medium.jpeg?_encoded=2f66666666666678302f30382f3b29303033286874646977656c616373&_ts=16f0ea8a920";
			document.getElementById("endIMG").style.marginLeft = "580px";
			document.getElementById("endIMG").style.marginTop = "200px";
			document.getElementById("endDiv").style.marginLeft = "530px";
			break;
		case "Julebrus":
			document.getElementById("endB").style.visibility = "visible";
			document.getElementById("endIMG").style.visibility = "visible";
			document.getElementById("endDiv").style.marginLeft = "465px";
			document.getElementById("endIMG").src =
				"https://fatcamp.io/test.no/images/categories/mat_og_drikke/julebrus/2015/versjon/ringnes_hamar_lillehammer_julebrus.jpg?width=855";
			document.getElementById("endDiv").style.visibility = "visible";
			document.getElementById("endDiv").innerHTML =
				"Gratulerer, du vant en Julebruss!";
			break;
		case "Håndkrem":
			document.getElementById("endB").style.visibility = "visible";
			document.getElementById("endIMG").style.visibility = "visible";
			document.getElementById("endIMG").src =
				"https://www.vitusapotek.no/medias/Shea-Hand-Cream-30ml-2017-pearl866x?context=bWFzdGVyfGltYWdlc3w0MDM1OXxpbWFnZS9qcGVnfGltYWdlcy9oOTQvaGY4LzkwNjgxMDMyNzA0MzAuanBnfGI4M2RhNmU3MTdmN2EyMTE2OTUyZDQ4MTVkNzA2Mjk0MTBhYTM3NDBjMTdmYjhmZTU5NDQ2NDIyODI3OTdhYTQ";
			document.getElementById("endDiv").innerHTML =
				"Gratulerer, du har vunnet en håndkrem!";
			document.getElementById("endDiv").style.visibility = "visible";
			document.getElementById("endIMG").style.marginLeft = "380px";
			document.getElementById("endIMG").style.marginTop = "100px";
			document.getElementById("endDiv").style.marginLeft = "430px";
			break;
		case "Question Mark":
			var ran = Math.random();
			if (ran <= 0.35) {
				prize("Stratos");
			} else if (ran <= 0.55) {
				prize("Flaxlodd");
			} else if (ran <= 0.75) {
				prize("Julebrus");
			} else if (ran <= 0.85) {
				prize("Håndkrem");
			} else if (ran <= 0.925) {
				prize("Håndkrem");
			} else {
				prize("Overaskelse");
			}
			break;
		default:
			document.getElementById("endB").style.visibility = "visible";
			document.getElementById("endDiv").style.visibility = "visible";
			document.getElementById("endDiv").innerHTML =
				"Det blir spennende å se hva overraskelsen er!";
	}
}
