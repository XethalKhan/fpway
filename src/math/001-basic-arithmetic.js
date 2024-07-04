export const add = (a, b) => a + b;
export const substract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const division = (a, b) => a / b;
export const exponent = (a, b) => a ** b;

export const sum = (sequence) =>  sequence.reduce(add, 0);

const basicArithmetic = {
    add,
    substract,
    multiply,
    division,
    exponent,

    sum,
};

export default basicArithmetic;