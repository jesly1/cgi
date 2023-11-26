function towerOfHanoi(n, sourceRod, auxiliaryRod, targetRod) {
    if (n === 1) {
        console.log(`Move disk 1 from ${sourceRod} to ${targetRod}`);
        return;
    }

    towerOfHanoi(n - 1, sourceRod, targetRod, auxiliaryRod);
    console.log(`Move disk ${n} from ${sourceRod} to ${targetRod}`);
    towerOfHanoi(n - 1, auxiliaryRod, sourceRod, targetRod);
}


const numberOfDisks = 3;
const source = "A";
const auxiliary = "B";
const target = "C";

console.log(`Tower of Hanoi with ${numberOfDisks} disks:`);
towerOfHanoi(numberOfDisks, source, auxiliary, target);
