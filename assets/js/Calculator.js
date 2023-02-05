class Calculator {

    constructor() {
        this.height = 0;
        this.weight = 0;
    }

    // Get height
    static get getHeight() {
      return this.height;
    }

    // Get weight
    static get getWeight() {
      return this.weight;
    }

    // Set height
    static set setHeight(value) {

        value = parseFloat(value);
        
        /*
        if (value === 0) {
            throw 'Enter an height value';
        }
        */

        this.height = value;
    }

    // Set weight
    static set setWeight(value) {

        value = parseFloat(value);

        /*
        if (value === 0) {
            throw 'Enter an weight value';
        }
        */
        
        this.weight = value;
    }

    // Method
    calc() {        
        return this.weight / this.height ** 2;
    }
}

export {Calculator}