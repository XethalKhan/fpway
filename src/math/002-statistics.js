import * as arithmetic from './001-basic-arithmetic.js';

import pipeline from './../function-manipulation/001-pipeline.js';
import flip from './../function-manipulation/003-flip.js';
import curry from './../function-manipulation/004-curry.js';
import composition from './../function-manipulation/005-composition.js';

import sort from './../array/001-sort.js';
import numberOfOccurence from './../array/004-number-of-occurences.js';
import distinct from './../array/005-distinct.js';
import elementAtMiddle from './../array/006-element-in-the-middle.js';

const sum = arithmetic.sum;

const average = (sequence) => sum(sequence) / sequence.length; 

const median = composition(
    elementAtMiddle,
    sort
);

function modus(sequence){

    const countElements = curry(flip(numberOfOccurence))(sequence);
    const createElementWithCount = (value) => ({
        element: value,
        count: countElements(value)
    });
    const getMaxElementWithCount = (a, b) => a.count < b.count ? b : a;

    return distinct(sequence)
        .map(createElementWithCount)
        .reduce(getMaxElementWithCount, {element: 0, count: 0})
        .element;
}

console.log(median([1, 2, 6, 5, 2, 5, 3, 2, 9, 6, 6, 6, 6, 5, 6, 0, 3]));