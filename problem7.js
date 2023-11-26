function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function isOperand(char) {
    return /^[a-zA-Z0-9]$/.test(char);
}

function prefixToInfix(prefix) {
    const stack = [];

    for (let i = prefix.length - 1; i >= 0; i--) {
        const char = prefix[i];

        if (isOperand(char)) {
            stack.push(char);
        } else if (isOperator(char)) {
            const operand1 = stack.pop();
            const operand2 = stack.pop();
            const expression = `(${operand1}${char}${operand2})`;
            stack.push(expression);
        }
    }

    return stack.pop();
}
const prefixExpression = "*+ab-cd";
const infixExpression = prefixToInfix(prefixExpression);

console.log(`Prefix Expression: ${prefixExpression}`);
console.log(`Infix Expression: ${infixExpression}`);
