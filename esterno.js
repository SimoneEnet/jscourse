"use strict";

function Car(m, mm, c) {
	this.marca = m;
	this.modello = mm;
	this.colore = c;
}

function addCar() {
	var marca = document.getElementById("marca").value;
	var modelloMacchina = document.getElementById("carModel").value;
	var coloreMacchina = document.getElementById("carColor").value;
	var car = new Car(marca, modelloMacchina, coloreMacchina);
	var block_to_insert = document.createElement("div");

	block_to_insert.appendChild(document.createTextNode("marca: " + car.marca));
	block_to_insert.appendChild(document.createElement("br"));
	block_to_insert.appendChild(document.createTextNode("modello: " + car.modello));
	block_to_insert.appendChild(document.createElement("br"));
	block_to_insert.appendChild(document.createTextNode("colore: " + car.colore));
	block_to_insert.appendChild(document.createElement("br"));
	var button = document.createElement("button");
	button.innerHTML = "Delete";
	button.onclick = function () {
		document.getElementById("carList").removeChild(this.parentElement);
	};
	block_to_insert.appendChild(button);

	document.getElementById("carList").appendChild(block_to_insert);
}

/* fare FizzBuzz

  creare una funzione fizzBuzz che una volta chiamata stampi a console numeri da 1 a 100

  ma con Fizz al posto dei numeri multipli di 3

  Buzz al posto dei numeri multipli di 5

  e FizzBuzz al posto dei numeri multipli di entrambi

  ie:

  fizzBuzz(); // 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz*/
function FizzBuzz() {
	for (var i = 1; i <= 15; i++) {
		if (i % 15 == 0) console.log("FizzBuzz");
		else if (i % 3 == 0) console.log("Fizz");
		else if (i % 5 == 0) console.log("Buzz");
		else console.log(i);
	}
}

FizzBuzz();
