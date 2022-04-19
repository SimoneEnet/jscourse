import * as vh from "./vehicle.js";

export class Car extends vh.Vehicle {
  constructor(m, mm, c) {
    super(m);
    this.modello = mm;
    this.colore = c;
  }
}
