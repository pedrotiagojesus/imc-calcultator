import { Calculator } from './Calculator.js';

document.querySelector('form button[type="submit"]').addEventListener("click", function(event) {

    event.preventDefault();

    console.log(this);
});