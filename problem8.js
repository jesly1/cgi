function areBracketsClosed(codeSnippet) {
    const stack = [];
    const brackets = { '(': ')', '[': ']', '{': '}' };

    for (const char of codeSnippet) {
        if (brackets[char]) {
            stack.push(char);
        } else if (Object.values(brackets).includes(char)) {
            const lastOpenedBracket = stack.pop();
            if (brackets[lastOpenedBracket] !== char) {
                return false;
            }
        }
    }

    // Check if there are any unclosed brackets left in the stack
    return stack.length === 0;
}
const codeSnippet1 = "{[a + b] * (c - d)}";
const codeSnippet2 = "if (x > 0 { return x; }";
const codeSnippet3 = "function example() { console.log('Hello World!'); }";

console.log(areBracketsClosed(codeSnippet1)); 
console.log(areBracketsClosed(codeSnippet2)); 
console.log(areBracketsClosed(codeSnippet3)); 
