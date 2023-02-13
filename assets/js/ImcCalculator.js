/**
 * Catalog
 *
 * Displays the products catalog, allowing the user to
 * search and filter results, to locate products based
 * on their name, reference and catalogation.
 *
 * @author Pedro Jesus <pedrotiagojesus1995@gmail.com>
 * @since 10-02-2023 First time this was introduced.
 */
class ImcCalculator {

    /**
     * Holds the widget DOM element ID.
     *
     * @property {string}
     * @author Pedro Jesus <pedrotiagojesus1995@gmail.com>
     */
    _id = null;

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
    constructor() {

        // cache elements
        this._id = 'section-calculator';
        this._el = document.getElementById(this._id);

        if (this._el === undefined || this._el === null) {
            return;
        }

        this._formEl = this._el.querySelector('form');
        this._formSubmitEl = this._formEl.querySelector('button[type="submit"]');

        // bind events
        this.onSubmit();

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

        const resultWrapper = this._el.querySelector('[data-tpl="calculator-result"]');

        // Display
        if (!resultWrapper.classList.contains('show')) {
            resultWrapper.classList.add('show');
            resultWrapper.style.maxHeight = resultWrapper.scrollHeight + "px";
        }

        // Put the result
        resultWrapper.querySelector('[data-tpl="calculator-result-value"]').innerText = value;

        // Position result marker
        const resultMarker = resultWrapper.querySelector('[data-tpl="calculator-result-marker"]');
        var markerValue = value - 18.5;
        markerValue = (markerValue * 100) / 21.5;
        resultMarker.style.left = markerValue + '%';

        if (markerValue < 0) {
            markerValue = 0;
            resultMarker.classList.add('pulse');
        } else if (markerValue > 100) {
            markerValue = 100;
            resultMarker.classList.add('pulse');
        } else {
            resultMarker.classList.remove('pulse');
        }

        // Handle the colors
        if (markerValue > 75 && markerValue <= 100) {
            resultMarker.classList.remove('text-success', 'text-warning', 'text-primary');
            resultMarker.classList.add('text-danger');
        } else if (markerValue > 50 && markerValue <= 75) {
            resultMarker.classList.remove('text-success', 'text-primary', 'text-danger');
            resultMarker.classList.add('text-warning');
        } else if (markerValue > 25 && markerValue <= 50) {
            resultMarker.classList.remove('text-success', 'text-warning', 'text-danger');
            resultMarker.classList.add('text-primary');
        } else {
            resultMarker.classList.remove('text-primary', 'text-warning', 'text-danger');
            resultMarker.classList.add('text-success');
        }

        // Highlight progress bar
        const progressBarArr = resultWrapper.querySelectorAll('[data-tpl="calculator-progress-bar"]');
console.log(progressBarArr);
        progressBarArr.forEach(progressBar => {
            console.log(progressBar);
        });

    }
}

export { ImcCalculator };