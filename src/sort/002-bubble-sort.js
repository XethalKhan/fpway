import range from '../array/008-range.js';

export default function bubbleSort(sequence) {
  const result = sequence.slice(0);

  const switchElements = (i, j) => {
    const temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  }

  range(sequence.length - 1, 0, -1)
    .forEach((i) =>
      range(0, i)
        .forEach((j) => result[j] > result[j + 1] ? switchElements(j, j + 1) : null));

  return result;
}

console.log(bubbleSort([1, 6, 3, 9, 4, 2, 5]));