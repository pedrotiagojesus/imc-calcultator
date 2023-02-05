class Calculator {

    _height = 0;
    _weight = 0;

    // Get height
    get height() {
        return this._height;
    }

    // Get weight
    get weight() {
        return this._weight;
    }

    /**
     * Set height
     * 
     * @param {number} value
     */
    set height(value) {

        value = parseFloat(value);
        
        /*
        if (value === 0) {
            throw 'Enter an height value';
        }
        */

        this._height = value;

        return this;
    }

    /**
     * Set weight
     * 
     * @param {number} value
     */
    set weight(value) {

        value = parseFloat(value);

        /*
        if (value === 0) {
            throw 'Enter an weight value';
        }
        */
        
        this._weight = value;

        return this;
    }

    // Method
    calc() {        
        return this._weight / this._height ** 2;
    }
}

export {Calculator};