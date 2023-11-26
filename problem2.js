function reverseArrayInPlace(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        // Swap elements at start and end indices
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        // Move indices towards the center
        start++;
        end--;
    }
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];
console.log("Original Array:", myArray);

reverseArrayInPlace(myArray);

console.log("Reversed Array:", myArray);
