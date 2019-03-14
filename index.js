
const string = "(id,created,employee(id,firstname,employeeType(id),lastname),location)";

//removed the outer parenthesis, and add a comma after first open parenthesis found
const removeOutParent = string.substring(1, string.length - 1).replace("(", "(,");

//split the string using "," as delimiter 
const splitComma = removeOutParent.split(",");

let foundFirstNested = false;
let indexFirstNested = 0;
let foundLastNested = 0;

//loop through the array of strings to find the first and last word of the nested words
for (let i = 0; i < splitComma.length; i++) {
  let element = splitComma[i];

  if (element.includes("(") && foundFirstNested === false) {
    foundFirstNested = true;
    indexFirstNested = splitComma.indexOf(element) + 1;
  } else if (element.includes(")")) {
    foundLastNested = splitComma.indexOf(element);
  }
}

//store an array of the nested words
let nestedWords = splitComma.slice(indexFirstNested, foundLastNested + 1);

//sort the nested words
nestedWords.sort();

//join the array of nested words into one string
const joinNested = nestedWords.join();

//concat the nested word back into the original array of strings
splitComma[indexFirstNested - 1] = splitComma[indexFirstNested - 1] + joinNested;

//remove duplicate words
splitComma.splice(indexFirstNested, foundLastNested + 1 - indexFirstNested);

//sort the array of strings alphabetically
splitComma.sort();

//join the array to turn back into a string
const sortedString = splitComma.join();

//split each characters of the string
const allChars = sortedString.split("");

let newString = "";
let dash = 0;

//loop each characters to include dash, and to add new line to the first letter of each words, and concat the character into the final string
allChars.forEach(char => {
  if (char == '(') {
    dash++;
  } else if (char == ')') {
    dash--;
  }
  if (char == ',' || char == '(') {
    newString = newString.concat('\n');
    for (let i = 0; i < dash; i++) {
      newString = newString.concat('-');
    }
  } else if (char != '(' && char != ')') {
    newString = newString.concat(char);
  }
});

//output final result to the console
console.log(newString);




