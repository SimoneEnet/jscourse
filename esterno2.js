// JavaScript source code
"use strict"
var block_to_insert;
var container_block;

function addCar() {
    var modelloMacchina = document.getElementById('carModel').value;
    block_to_insert.innerHTML = modelloMacchina;

    container_block = document.getElementById("carList");
    container_block.appendChild(block_to_insert);
}