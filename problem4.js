function firstNonRepeatedCharacter(str) {
  
    const charCount = new Map();

   
    for (const char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    for (const char of str) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }


    return null;
}


const inputString = "aabbccdeeff";
const result = firstNonRepeatedCharacter(inputString);

if (result !== null) {
    console.log(`The first non-repeated character is: ${result}`);
} else {
    console.log("All characters are repeated in the given string.");
}
