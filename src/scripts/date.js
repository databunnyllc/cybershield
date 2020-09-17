/** THE FOOTER ********************************************/
//Getting the Date
let d = new Date();
let yearEl = document.querySelector("footer p span");

let year = d.getFullYear();
yearEl.innerHTML = year;