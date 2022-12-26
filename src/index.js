const spaceArray = [" ", "", "s", "\t", "\n", "\u3000"];

function myTrim(val) {
  let stringBegin = 0,
    stringEnd = 0;

  for (let i = 0; i < val.length; i++) {
    if (spaceArray.indexOf(val[i]) === -1) {
      stringBegin = i;
      break;
    }
  }

  for (let i = val.length; i >= 0; i++) {
    if (spaceArray.indexOf(val[i]) === -1) {
      stringEnd = i;
      break;
    }
  }
  return val.slice(stringBegin, stringEnd);
}

console.log(myTrim("      asd  "));

console.log(myTrim("asd     "));
console.log(myTrim("        asdd"));
