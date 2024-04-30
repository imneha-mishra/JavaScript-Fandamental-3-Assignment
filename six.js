function reverseString(input){
    return input.split("").reverse().join("");
}

const OriginalString="Hello World";
const reversedString =reverseString(OriginalString)
console.log(reversedString);