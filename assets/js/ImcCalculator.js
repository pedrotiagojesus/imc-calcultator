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
     * Calculate IMC value
     *
     * @param {number} value The IMC value. 
     * @return {ImcCalculator}
     */
    async calcImc() {        
        return this._weight / this._height ** 2;
    }

    /**
     * Callback function that handles the formulary submit.
     *
     * @param {FormData} formData Formulary data to work with.
     * @return {ImcCalculator}
     * @author Pedro Jesus <pedro.jesus@magicbrain.pt>
     */
    onSubmit() {
    
        this._formSubmitEl.addEventListener("click", async function(event) {
    
            event.preventDefault();
    
            const formData = new FormData(this._formEl);

            this._height = formData.get('imc-calculator-height');
            this._weight = formData.get('imc-calculator-weight');
    
            const imcValue = await this.calcImc();

            console.log(imcValue);
    
        });

        return this;

    }
}

export {ImcCalculator};