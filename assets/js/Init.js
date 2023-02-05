import { Calculator as CalculatorClass } from './Calculator.js';

(function () {

    var button = document.querySelector('form button[type="submit"]');

    console.log(button)

    button.addEventListener("click", function(event) {

        event.preventDefault();

        const form = document.getElementById('imc-calculator-form');;
        const formData = new FormData(form);

        const Calculator = new CalculatorClass();
      
        Calculator.height(formData.get('imc-calculator-height'));
        Calculator.weight(formData.get('imc-calculator-weight'));

        console.log(Calculator.calc());

    });

}());