import Container from './Container.js';

export default class Functor extends Container {
    static of(value) {
        return new Functor(value);
    }

    map(func) {
        return Functor.of(func(this.value));
    }
}