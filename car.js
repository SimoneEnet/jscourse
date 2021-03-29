import Vehicle from "vehicle";

export class Car extends Vehicle {
  constructor(m, mm, c) {
    super(m);
    this.modello = mm;
    this.colore = c;
  }
}
