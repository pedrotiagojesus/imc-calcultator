class Calculator {

    constructor() {
        this.heightVal = 0;
        this.weightVal = 0;
    }

    // Get height
    get height() {
      return this.heightVal;
    }

    // Get weight
    get weight() {
      return this.weightVal;
    }

    // Set height
    set height(value) {

        value = parseFloat(value);
        
        /*
        if (value === 0) {
            throw 'Enter an height value';
        }
        */

        this.heightVal = value;
    }

    // Set weight
    set weight(value) {

        value = parseFloat(value);

        /*
        if (value === 0) {
            throw 'Enter an weight value';
        }
        */
        
        this.weightVal = value;
    }

    // Method
    calc() {        
        return this.weightVal / this.heightVal ** 2;
    }
}

export {Calculator}