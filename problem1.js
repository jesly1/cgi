
function findPairsWithSum(arr, targetSum) {
    const seenNumbers = new Set();

    for (const num of arr) {
        const complement = targetSum - num;

        if (seenNumbers.has(complement)) {
            console.log(`Pair: (${complement}, ${num})`);
        }

        seenNumbers.add(num);
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const targetSum = 10;

console.log(`Pairs with sum ${targetSum}:`);
findPairsWithSum(arr, targetSum);

