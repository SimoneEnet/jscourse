"use strict";

function Car(m, mm, c) {
  this.marca = m;
  this.modello = mm;
  this.colore = c;
}

var cars = [];

function addCar() {
  var marca = document.getElementById("marca").value;
  var modelloMacchina = document.getElementById("carModel").value;
  var coloreMacchina = document.getElementById("carColor").value;
  var car = new Car(marca, modelloMacchina, coloreMacchina);
  cars.push(car);

  createCarList();
}

function createCarList() {
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
