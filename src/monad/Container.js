export default class Container{
    constructor(value) {
        this.value = value;
    }

    man(func) {
        return func(this.value);
    }

    static of(value) {
        return new Container(value);
    }

    valueOf() {
        return this.value;
    }
}