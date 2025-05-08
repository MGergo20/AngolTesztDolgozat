import Kerdes from "./TesztKerdes.js";
import { szenvedoMondatok } from "./angol.js";

let kerdes = new Kerdes();

function kerdesMegjelenit(adat) {   
    console.log(adat);
    new Kerdes(adat, document.querySelector(".tarolo"));
}
window.addEventListener("kivalaszt", (event) => {
    console.log(event.detail);
    new Kerdes(event.detail,document.querySelector(".kivalasztott"))
});