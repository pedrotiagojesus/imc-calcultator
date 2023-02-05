class Calculator {

    constructor() {
        this._height = 0;
        this._weight = 0;
    }

    // Get height
    static get getHeight() {
      return this._height;
    }

    // Get weight
    static get getWeight() {
      return this._weight;
    }

    /**
     * Set height
     * 
     * @param {number} value
     */
    static set setHeight(value) {

        value = parseFloat(value);
        
        /*
        if (value === 0) {
            throw 'Enter an height value';
        }
        */

        this._height = value;
    }

    /**
     * Set weight
     * 
     * @param {number} value
     */
    static set setWeight(value) {

        value = parseFloat(value);

        /*
        if (value === 0) {
            throw 'Enter an weight value';
        }
        */
        
        this._weight = value;
    }

    // Method
    calc() {        
        return this._weight / this._height ** 2;
    }
}

export {Calculator};