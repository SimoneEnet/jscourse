"use strict";
// ok
import Car from "car";

var ita = new Map().set("car", "auto");
var eng = new Map().set("car", "car");

var a = 1;

var cars = [
  new Car(
    "qwe1",
    navigator.language === "it" ? ita.get("car") : eng.get("car"),
    "123"
  ),
  new Car("qwe" + a + "2", "qwe", "123"),
  new Car(
    `qw
asd
asd
  e${a + 2}3`,
    "qwe",
    "123"
  ),
];

function addCar() {
  var marca = document.getElementById("marca").value;
  var modelloMacchina = document.getElementById("carModel").value;
  var coloreMacchina = document.getElementById("carColor").value;
  var car = new Car(marca, modelloMacchina, coloreMacchina);
  cars.push(car);

  createCarList();
}

function createCarList() {
  console.log(cars);
  var carlist = document.getElementById("carList");

  carlist.innerHTML = "";

  for (let i = 0; i < cars.length; i++) {
    var block_to_insert = document.createElement("div");
    var title = document.createElement("h1");
    title.innerHTML = "Element " + i;
    block_to_insert.appendChild(title);
    block_to_insert.appendChild(
      document.createTextNode("marca: " + cars[i].marca)
    );
    block_to_insert.appendChild(document.createElement("br"));
    block_to_insert.appendChild(
      document.createTextNode("modello: " + cars[i].modello)
    );
    block_to_insert.appendChild(document.createElement("br"));
    block_to_insert.appendChild(
      document.createTextNode("colore: " + cars[i].colore)
    );
    block_to_insert.appendChild(document.createElement("br"));
    var button = document.createElement("button");
    button.innerHTML = "Delete";
    button.onclick = function () {
      cars.splice(i, 1);
      createCarList();
    };
    block_to_insert.appendChild(button);
    block_to_insert.appendChild(document.createElement("hr"));
    carlist.appendChild(block_to_insert);
  }
}

/*
  fare FizzBuzz
  creare una funzione fizzBuzz che una volta chiamata stampi a console numeri da 1 a 100
  ma con Fizz al posto dei numeri multipli di 3
  Buzz al posto dei numeri multipli di 5
  e FizzBuzz al posto dei numeri multipli di entrambi

  ie:
  fizzBuzz(); // 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz
*/
