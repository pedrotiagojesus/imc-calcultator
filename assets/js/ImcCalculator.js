import { Core } from './Core.js';

/**
 * IMC Calculator
 *
 * Allow the user to know IMC result of the calculation.
 *
 * @author Pedro Jesus <pedrotiagojesus1995@gmail.com>
 * @since 10-02-2023 First time this was introduced.
 */
class ImcCalculator extends Core {

    /**
     * Holds a reference to the DOM element object.
     *
     * @property {element}
     * @author Pedro Jesus <pedrotiagojesus1995@gmail.com>
     */
    _el = null;

    /**
     * Holds formulary DOM element object.
     *
     * @property {element}
     * @author Pedro Jesus <pedrotiagojesus1995@gmail.com>
     */
    _formEl = null;

    /**
     * Holds formulary submit DOM element object.
     *
     * @property {element}
     * @author Pedro Jesus <pedrotiagojesus1995@gmail.com>
     */
    _formSubmitEl = null;

    /**
     * Holds calculator result submit DOM element object.
     *
     * @property {element}
     * @author Pedro Jesus <pedrotiagojesus1995@gmail.com>
     */
    _calculatorResultEl = null;

    /**
     * Holds height value use for IMC calculation
     *
     * @property {number}
     * @author Pedro Jesus <pedrotiagojesus1995@gmail.com>
     */
    _height = 0;

    /**
     * Holds weight value use for IMC calculation
     *
     * @property {number}
     * @author Pedro Jesus <pedrotiagojesus1995@gmail.com>
     */
    _weight = 0;

    /**
     * Initializes the IMC calculator.
     *
     * @returns {void}
     * @author Pedro Jesus <pedrotiagojesus1995@gmail.com>
     */
    constructor(id = '', name = '') {

        super(id, name);

        // cache elements
        this._el = document.getElementById(id);

        if (this._el === undefined || this._el === null) {
            this.logInfo('Class not loaded!');
            return;
        }

        this.logInfo('Loading...');

        this._formEl = this._el.querySelector('form');
        this._formSubmitEl = this._formEl.querySelector('button[type="submit"]');

        // bind events
        this.onSubmit();

        this.logInfo('Loaded complete!');

    }

    /**
     * Callback function that handles the formulary submit.
     *
     * @param {FormData} formData Formulary data to work with.
     * @return {ImcCalculator}
     * @author Pedro Jesus <pedro.jesus@magicbrain.pt>
     */
    onSubmit() {

        const scope = this;

        this._formSubmitEl.addEventListener("click", async function (event) {

            event.preventDefault();

            scope._formEl = scope._el.querySelector('form');

            const formData = new FormData(scope._formEl);

            scope._height = formData.get('imc-calculator-height');
            scope._weight = formData.get('imc-calculator-weight');

            const imcValue = scope.calculateImc();

            scope._calculatorResultEl = scope._el.querySelector('[data-tpl="imc-calculator-result"]');

            scope.result(imcValue);

        });

        return this;

    }

    /**
     * Calculate IMC value
     *
     * @return {number} The IMC value.
     * @author Pedro Jesus <pedro.jesus@magicbrain.pt>
     */
    calculateImc() {

        const value = this._weight / (this._height ** 2);

        return Number(value).toFixed(1);
    }

    /**
     * Result
     *
     * @param {Number} value  The IMC value.
     * @return {ImcCalculator}
     * @author Pedro Jesus <pedro.jesus@magicbrain.pt>
     */
    result(value = 0) {



        // Display
        if (!this._calculatorResultEl.classList.contains('show')) {
            this._calculatorResultEl.classList.add('show');
            this._calculatorResultEl.style.maxHeight = this._calculatorResultEl.scrollHeight + "px";
        }

        // Put the result
        this._calculatorResultEl.querySelector('[data-tpl="calculator-result-value"]').innerText = value;

        // Position result marker
        const resultMarker = this._calculatorResultEl.querySelector('[data-tpl="calculator-result-marker"]');
        var markerValue = value - 18.5;
        markerValue = (markerValue * 100) / 21.5;

        if (markerValue < 0 || markerValue > 100) {
            markerValue = 0;
            resultMarker.classList.add('pulse');
        } else {
            resultMarker.classList.remove('pulse');
        }

        resultMarker.style.left = markerValue + '%';

        // Handle the colors
        switch (true) {
            case (markerValue > 75 && markerValue <= 100):
                resultMarker.classList.remove('text-success', 'text-warning', 'text-primary');
                resultMarker.classList.add('text-danger');
                break;

            case (markerValue > 50 && markerValue <= 75):
                resultMarker.classList.remove('text-success', 'text-primary', 'text-danger');
                resultMarker.classList.add('text-warning');
                break;

            case (markerValue > 25 && markerValue <= 50):
                resultMarker.classList.remove('text-success', 'text-warning', 'text-danger');
                resultMarker.classList.add('text-primary');
                break;

            default:
                resultMarker.classList.remove('text-primary', 'text-warning', 'text-danger');
                resultMarker.classList.add('text-success');
                break;
        }
        // Highlight progress bar
        const progressBarArr = this._calculatorResultEl.querySelectorAll('[data-tpl="imc-calculator-graph"]');

        progressBarArr.forEach(progressBar => {

            const minValue = Number(progressBar.dataset.tplMin);
            const maxValue = Number(progressBar.dataset.tplMax);

            if (minValue <= value && value <= maxValue) {
                if (progressBar.children.length) {
                    progressBar.children[0].classList.add('active');
                }
            } else {
                if (progressBar.children.length) {
                    progressBar.children[0].classList.remove('active');
                }
            }

            /*
            console.log('Min: ' + minValue);
            console.log('Max: ' + maxValue);
            console.log('Value: ' + value);
            console.log(minValue <= value && value <= maxValue);
            */
        });

    }
}

export { ImcCalculator };