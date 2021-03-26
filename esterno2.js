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

function fizzbuzz() {
    for (var i = 0; i <= 100; ++i) {
        const div3 = i % 3 === 0;
        const div5 = i % 5 === 0;

        if (div3 && div5) {
            console.log(`FizzBuzz`);
        } else if (div3) {
            console.log(`Fizz`);
        } else if (div5) {
            console.log(`Buzz`);
        } else {
            console.log(i);
        }
    }
}

fizzbuzz()