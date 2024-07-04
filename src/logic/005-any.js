const any = (sequence, predicate) => sequence.reduce((isFound, element) => isFound ? isFound : predicate(element), false);

any.arrity = 2;

export default any;