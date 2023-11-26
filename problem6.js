function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function postfixToPrefix(postfix) {
    const stack = [];

    for (const char of postfix) {
        if (isOperator(char)) {
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            const expression = char + operand1 + operand2;
            stack.push(expression);
        } else {
            stack.push(char);
        }
    }

    return stack.pop();
}
const postfixExpression = "ab+c*";
const prefixExpression = postfixToPrefix(postfixExpression);

console.log(`Postfix Expression: ${postfixExpression}`);
console.log(`Prefix Expression: ${prefixExpression}`);
