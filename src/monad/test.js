import Monad from './Monad.js';

const m = Monad.of(Monad.of(2));

console.log(m.unwrap());