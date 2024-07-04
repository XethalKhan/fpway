import not from './../logic/001-not.js';

export default function reject(sequence, filter){
    return sequence.filter(not(filter));
}