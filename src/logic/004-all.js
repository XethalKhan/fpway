const all = (sequence, predicate) => sequence.reduce((result, element) => result && predicate(element), true);

all.arrity = 2;

export default all;