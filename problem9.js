class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

function reverseStack(inputStack) {
    const auxStack = new Stack();
    while (!inputStack.isEmpty()) {
        auxStack.push(inputStack.pop());
    }
    while (!auxStack.isEmpty()) {
        inputStack.push(auxStack.pop());
    }
}
const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);

console.log("Original Stack:", myStack.items);

reverseStack(myStack);

console.log("Reversed Stack:", myStack.items);
