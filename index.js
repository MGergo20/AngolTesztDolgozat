import TesztKerdesek from "./Tesztkerdesek.js";
import { szenvedoMondatok } from "./angol.js";

const szuloElem = document.querySelector(".kerdesek");
new TesztKerdesek(szenvedoMondatok, szuloElem);