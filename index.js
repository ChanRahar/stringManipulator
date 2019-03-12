const stringOrganizer = (string) => {

  const removeOutParent = string.substring(1, string.length - 1).replace("(", ",(");
  // console.log(removeOutParent);

  const splitComma = removeOutParent.split(",");

  let count = 0
  let firstIndex = 0;
  let lastIndex = 0;

  splitComma.forEach(element => {
    if (element.includes("(") && count === 0) {
      count++;
      firstIndex = splitComma.indexOf(element);
    } else if (element.includes(")")) {
      lastIndex = splitComma.indexOf(element);
    }
  });

  let nestedWords = splitComma.slice(firstIndex, lastIndex + 1);

  for (let i = 0; i < nestedWords.length; i++) {
    if (nestedWords[i].includes("(")) {
      nestedWords[i] = nestedWords[i].replace("(", "");
    }
    break;
  }

  nestedWords.sort();

  nestedWords[0] = "(" + nestedWords[0];

  const joinNested = nestedWords.join();

  splitComma[firstIndex - 1] = splitComma[firstIndex - 1] + joinNested;

  splitComma.splice(firstIndex, lastIndex + 1 - firstIndex);

  splitComma.sort();

  const sortedString = splitComma.join();
  console.log(sortedString);

  const allChars = sortedString.split("");

  let newString = "";
  let indentation = 0;

  allChars.forEach(char => {
    if (char == '(') {
      indentation++;
    } else if (char == ')') {
      indentation--;
    }
    if (char == ',' || char == '(') {
      newString = newString.concat('\n');
      for (let i = 0; i < indentation; i++) {
        newString = newString.concat('-');
      }
    } else if (char != '(' && char != ')') {
      newString = newString.concat(char);
    }
  });
  
  console.log(newString);
  // let splitWords = newString.split(",");
  // let nestedWords = splitWords.slice(3, 8);
  // let deepNestedWrd = nestedWords.slice(2, 4).join();

  // nestedWords.splice(2, 2, deepNestedWrd);

  // nestedWords = splitWords[2] + "," + nestedWords.sort().join();

  // splitWords.splice(2, 6, nestedWords);

  // splitWords = splitWords.sort().join();

  // console.log(splitWords.replace(/,/gi, "\n"))
}

const string = "(id,created,employee(id,firstname,employeeType(id),lastname),location)";

stringOrganizer(string);