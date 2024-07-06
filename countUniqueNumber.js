const arrayNumber = [1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8, 11, 11];
// output 8

let i = 0;

function countNumber(array) {
  if (array.length > 0) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i + 1;
  } else {
    throw new Error("array is empty");
  }
}

console.log(countNumber(arrayNumber));