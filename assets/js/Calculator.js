class Calculator {

    constructor() {
        this.height = 0;
        this.weight = 0;
    }

    // Get height
    get height() {
      return this.height;
    }

    // Get weight
    get weight() {
      return this.weight;
    }

    // Set height
    set height(value) {

        value = value.trim();

        if (value === 0) {
            throw 'Enter an height value';
        }

        this.height = parseFloat(value);
    }

    // Set weight
    set weight(value) {

        value = value.trim();

        if (value === 0) {
            throw 'Enter an weight value';
        }
        
        this.weight = parseFloat(value);
    }

    // Method
    calc() {        
        return this.weight / this.height ** 2;
    }
}

export {Calculator}