import { ImcCalculator } from './Calculator.js';

(function () {

    const imcCalculator = new ImcCalculator();

    var button = document.querySelector('form button[type="submit"]');

    button.addEventListener("click", async function(event) {

        event.preventDefault();

        const form = document.getElementById('imc-calculator-form');
        const formData = new FormData(form);

        const Calculator = new CalculatorClass();
        
        const height = formData.get('imc-calculator-height');
        const weight = formData.get('imc-calculator-weight');
      
        Calculator.height = height;
        Calculator.weight = weight;

        const imcValue = await Calculator.calcImc();
        


    });

}());