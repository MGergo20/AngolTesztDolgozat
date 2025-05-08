import { szenvedoMondatok } from "./angol.js";

export default class Kerdes {
    #obj = {}
    #szElem;
    #buttonElem;
  
    constructor(obj, szElem) {
      this.#obj = obj;
      this.#szElem = szElem;
  
      this.megjelenit();
      this.#buttonElem = this.#szElem.querySelector(".kerdes:last-child button");
      this.esemenykezeleo();
    }
  
    esemenykezeleo() {
      this.#buttonElem.addEventListener("click", () => {
        window.dispatchEvent(new CustomEvent("kivalaszt", { detail: this.#obj }));
      });
    }
    megjelenit() {
        let html = `
          <div class="kerdes">
            <p>${this.#obj.mondat}</p>
            <p>${this.#obj.valasztas[0]}</p>
            <button>Kiválaszt</button>
          </div>
        `
    this.#szElem.insertAdjacentHTML("beforeend", html);
  }
  
  kever() {

  }
}
