import Container from './Functor.js';
import Functor from './Functor.js';

export default class Monad extends Functor {
    static of(value) {
        return new Monad(value);
    }

    map(func) {
        return Monad.of(func(this.value));
    }

    unwrap() {
        return this.value instanceof Container ? this.value.valueOf() : this.value;
    }

    chain(func) {
        return this.map(func).unwrap()
    }
}