export default class TesztKerdes {
    #obj;
    #szElem;
    #index;

    constructor(obj, szElem, index) {
        this.#obj = obj;
        this.#szElem = szElem;
        this.#index = index;
        this.megjelenit();
        this.esemenykezelo();
    }

    
    megjelenit() {
        let html = `
        <div class="tesztkerdes">
            <p class="mondat">${this.#obj.mondat}</p>
            <div class="valaszok">
                ${this.#obj.valasztas.map((valasz, i) => {
                    return `<button data-index="${i}"><p class="valasz">${valasz}</p></button>`;
                }).join('')}
            </div>
        </div>
        `;
        this.#szElem.insertAdjacentHTML("beforeend", html);
    }

    esemenykezelo() {
        const utolsoTesztElem = this.#szElem.querySelectorAll(".tesztkerdes");
        const aktualisElem = utolsoTesztElem[utolsoTesztElem.length - 1];
        const valaszok = aktualisElem.querySelectorAll(".valasz");

       
        valaszok.forEach((valaszElem) => {
            valaszElem.addEventListener("click", (event) => {
                const valasztottIndex = event.target.closest('button').dataset.index;
                
                const helyes = this.#obj.valasztas[0] === this.#obj.valasztas[valasztottIndex];
                this.ertekeles(helyes);
            });
        });
    }

    
    ertekeles(helyes) {
        if (helyes) {
            alert("Helyes válasz!");
        } else {
            alert("Helytelen válasz!");
        }
    }
}