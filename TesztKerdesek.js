import TesztKerdes from "./TesztKerdes.js";

export default class TesztKerdesek {
  #lista = [];

  constructor(lista, szuloElem) {
    this.#lista = lista;
    this.szuloElem = szuloElem;
    this.megjelenit();
  }

  megjelenit() {
    this.szuloElem.innerHTML = "";
    for (let i = 2; i < this.#lista.length; i++) {
      new TesztKerdes(this.#lista[i], this.szuloElem, i);
    }
  }
}