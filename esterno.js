"use strict";
  var block_to_insert ;
  var container_block ;
  
  function addCar(){
    
  var modelloMacchina =document.getElementById("carModel").value;
  var coloreMacchina = document.getElementById("carColor").value;
  block_to_insert = document.createElement( "div" );
  block_to_insert.innerHTML = modelloMacchina + " " + coloreMacchina + "<button  type='submit' onclick='removeElement()'>Delete</button>";
  
  container_block = document.getElementById( "carList" );
  container_block.appendChild( block_to_insert );
}


function removeElement(){
  container_block.removeChild(container_block.childNodes[0]); 
}