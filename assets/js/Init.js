import { Calculator as CalculatorClass } from './Calculator.js';

(function () {

    var button = document.querySelector('form button[type="submit"]');

    console.log(button)

    button.addEventListener("click", function(event) {

        event.preventDefault();

        const form = document.getElementById('imc-calculator-form');;
        const formData = new FormData(form);
        
        console.log(formData.getAll('imc-calculator-height'));

        const Calculator = new CalculatorClass();
      
        // Calculator.setHeight(formData.getAll('imc-calculator-height'));

    });

}());