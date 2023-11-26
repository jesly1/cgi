class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(item) {
        this.stack.push(item);
        if (this.minStack.length === 0 || item <= this.getMin()) {
            this.minStack.push(item);
        }
    }

    pop() {
        if (this.stack.length === 0) {
            return null;
        }

        const poppedItem = this.stack.pop();
        if (poppedItem === this.getMin()) {
            this.minStack.pop();
        }

        return poppedItem;
    }

    getMin() {
        if (this.minStack.length === 0) {
            return null;
        }

        return this.minStack[this.minStack.length - 1];
    }
}
const minStack = new MinStack();

minStack.push(3);
minStack.push(5);
minStack.push(2);
minStack.push(1);

console.log("Current Stack:", minStack.stack);
console.log("Minimum Element:", minStack.getMin()); 

minStack.pop();
console.log("Current Stack:", minStack.stack);
console.log("Minimum Element:", minStack.getMin()); 
