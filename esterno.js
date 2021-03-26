"use strict";
/*  creare una pagina html con una lista di auto, questa lista viene mostrata dove ogni elemento è un div, uno sotto l'altro.
    creare un oggetto javascript Car
    serve una form per aggiungere un oggetto Car alla lista, che verrà anche aggiunto come div
    ogni div deve mostrare le proprietà dell'oggetto Car, e deve avere anche un bottone per rimuovere l'elemento */

// Creazione oggetto Car
var auto = {
	marca: "Fiat",
	modello: "Punto",
	colore: "Grigio",
	alimentazione: "benzina",
	anno: 2006,
	cavalli: 65,
};

// Funzione Aggiungi Auto
function aggiungiAuto() {
	var div = document.createElement("div");
	var nuovaAuto = document.createTextNode("Auto 3");
	div.appendChild(nuovaAuto);
	document.getElementById("Auto").appendChild(div);
}
