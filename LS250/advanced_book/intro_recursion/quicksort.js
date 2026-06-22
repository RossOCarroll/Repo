function partition(arr, low = 0, high = arr.length - 1) {
  const pivotIndex = Math.floor((low + high) / 2);
  const pivot = arr[pivotIndex];

  [arr[pivotIndex], arr[low]] = [arr[low], arr[pivotIndex]];
  
  let left = low + 1;
  let right = high;

  while (left <= right) {
    while (left <= right && arr[left] < pivot) {
      left++;
    }

    while (left <= right && arr[right] >= pivot) {
      right --;
    }

    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }

  [arr[low], arr[right]] = [arr[right], arr[low]]

  return right;
}

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
}

const arr = [7, 3, 9, 8, 5, 1];
quickSort(arr);
console.log(arr); // Output: [1, 3, 5, 7, 8, 9]