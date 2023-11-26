function areRotations(str1, str2) {
    // Check if both strings are of the same length and not empty
    if (str1.length !== str2.length || str1.length === 0) {
        return false;
    }

    // Concatenate str1 with itself
    const concatenatedStr = str1 + str1;

    // Check if str2 is a substring of the concatenated string
    return concatenatedStr.includes(str2);
}

// Example usage:
const string1 = "cgi";
const string2 = "igc";

if (areRotations(string1, string2)) {
    console.log(`${string1} and ${string2} are rotations of each other.`);
} else {
    console.log(`${string1} and ${string2} are not rotations of each other.`);
}
