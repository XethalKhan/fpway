import range from './../array/008-range.js';

export default function insertionSort(sequence) {
  const result = sequence.slice(0);

  const switchElements = (i, j) => {
    const temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  }

  sequence
    .forEach((element, index) =>
      range(index - 1, -1, -1)
        .forEach((j) => result[j] > result[j+1] ? switchElements(j, j + 1) : null));

  return result;
}

console.log(insertionSort([1, 6, 3, 9, 4, 2, 5]));