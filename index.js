const stringOrganizer = (string) => {

  const allChars = string.split("");
  const cleanChars = allChars.slice(1, allChars.length - 1);

  let newString = "";
  let indentation = 0;

  cleanChars.forEach(char => {
    if (char == '(') {
      indentation++;
    } else if (char == ')') {
      indentation--;
    }
    if (char == ',' || char == '(') {
      newString = newString.concat(',');
      for (let i = 0; i < indentation; i++) {
        newString = newString.concat('-');
      }
    } else if (char != '(' && char != ')') {
      newString = newString.concat(char);
    }
  });

  let splitWords = newString.split(",");
  let nestedWords = splitWords.slice(3, 8);
  let deepNestedWrd = nestedWords.slice(2, 4).join();

  nestedWords.splice(2, 2, deepNestedWrd);

  nestedWords = splitWords[2] + "," + nestedWords.sort().join();

  splitWords.splice(2, 6, nestedWords);

  splitWords = splitWords.sort().join();

  console.log(splitWords.replace(/,/gi, "\n"))
}

const string = "(id,created,employee(id,firstname,employeeType(id),lastname),location)";

stringOrganizer(string);