import { Calculator as CalculatorClass } from './Calculator.js';

(function () {

    var button = document.querySelector('form button[type="submit"]');

    button.addEventListener("click", function(event) {

        event.preventDefault();

        const form = document.getElementById('imc-calculator-form');;
        const formData = new FormData(form);

        const Calculator = new CalculatorClass();

        const height = formData.get('imc-calculator-height');
        const weight = formData.get('imc-calculator-weight');
      
        Calculator.setHeight(height);
        Calculator.setWeight(weight);

        console.log(Calculator.calc());

    });

}());