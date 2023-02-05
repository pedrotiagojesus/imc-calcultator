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

        value = parseFloat(value);
console.log(value);
        if (value === 0) {
            throw 'Enter an height value';
        }

        this.height = value;
    }

    // Set weight
    set weight(value) {

        value = parseFloat(value);

        if (value === 0) {
            throw 'Enter an weight value';
        }
        
        this.weight = value;
    }

    // Method
    calc() {        
        return this.weight / this.height ** 2;
    }
}

export {Calculator}