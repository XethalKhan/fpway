import range from '../array/008-range.js';

export default function selectionSort(sequence) {
  const result = sequence.slice(0);

  const switchElements = (i, j) => {
    const temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  }

  range(0, sequence.length)
    .forEach((i) =>
      range(i, sequence.length)
        .forEach((j) => result[j] < result[i] ? switchElements(j, i) : null));

  return result;
}

console.log(selectionSort([1, 6, 3, 9, 4, 2, 5]));