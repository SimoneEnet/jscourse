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
  block_to_insert.appendChild(document.createElement('br'));
  block_to_insert.appendChild(document.createTextNode("modello: " + car.modello));
  block_to_insert.appendChild(document.createElement('br'));
  block_to_insert.appendChild(document.createTextNode("colore: " + car.colore));
  block_to_insert.appendChild(document.createElement('br'));
  var button = document.createElement('button');
  button.innerHTML = "Delete";
  button.onclick = function() {
    document.getElementById("carList").removeChild(this.parentElement);
  }
  block_to_insert.appendChild(button);

  document.getElementById("carList").appendChild(block_to_insert);
}
