"use strict";
import * as car from "./car.js";

let ita = new Map().set("carName", "auto");
let eng = new Map().set("carName", "car");

let a = 1;

let cars = [
  new car.Car(
    "qwe1",
    navigator.language === "it" ? ita.get("carName") : eng.get("carName"),
    "123"
  ),
  new car.Car("qwe" + a + "2", "qwe", "123"),
  new car.Car(
    `qw
asd
asd
  e${a + 2}3`,
    "qwe",
    "123"
  ),
];

function addCar() {
  let marca = document.getElementById("marca").value;
  let modelloMacchina = document.getElementById("carModel").value;
  let coloreMacchina = document.getElementById("carColor").value;
  let newCar = new car.Car(marca, modelloMacchina, coloreMacchina);
  cars.push(newCar);

  createCarList();
}

function createCarList() {
  console.log(cars);
  let carlist = document.getElementById("carList");

  carlist.innerHTML = "";

  cars.forEach((c, i) => {
    let block_to_insert = document.createElement("div");
    let title = document.createElement("h1");
    title.innerHTML = "Element " + i;
    block_to_insert.appendChild(title);
    block_to_insert.appendChild(
      document.createTextNode("marca: " + c.marca)
    );
    block_to_insert.appendChild(document.createElement("br"));
    block_to_insert.appendChild(
      document.createTextNode("modello: " + c.modello)
    );
    block_to_insert.appendChild(document.createElement("br"));
    block_to_insert.appendChild(
      document.createTextNode("colore: " + c.colore)
    );
    block_to_insert.appendChild(document.createElement("br"));
    let button = document.createElement("button");
    button.innerHTML = "Delete";
    button.onclick = () => {
      cars.splice(i, 1);
      createCarList();
    };
    block_to_insert.appendChild(button);
    block_to_insert.appendChild(document.createElement("hr"));
    carlist.appendChild(block_to_insert);
  });
}

window.createCarList = createCarList;
window.addCar = addCar;

/*
  fare FizzBuzz
  creare una funzione fizzBuzz che una volta chiamata stampi a console numeri da 1 a 100
  ma con Fizz al posto dei numeri multipli di 3
  Buzz al posto dei numeri multipli di 5
  e FizzBuzz al posto dei numeri multipli di entrambi

  ie:
  fizzBuzz(); // 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz
*/
