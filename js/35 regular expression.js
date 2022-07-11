/*
  Regular Expression : 

  Modifier  => flags
  i         => case insensitive
  g         => global
  m         => multiline

  match return null if no match is found
*/

let myString = "Hello Elzero web School, elzero";

let regex1 = /elzero/;

console.log(myString.match(regex1)); // ['elzero', index: 25, input: 'Hello Elzero web School, elzero']

let regex2 = /elzero/i;

console.log(myString.match(regex2)); // ['Elzero', index: 6, input: 'Hello Elzero web School, elzero']

let regex3 = /elzero/gi;

console.log(myString.match(regex3)); // (2) ['Elzero', 'elzero']

/*
  Regular Expression : 

  Ranges :
  (x|y)       => x or y
  [0-9]       => 0 to 9
  [^0-9]      => any character not from 0 to 9

  [a-z]       => a to z
  [^a-z]      => any character not from a to z
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]
*/

let tld = "Com Net Org Info Code Io";

let tldRegex1 = /(org|info|io)/i;

console.log(tld.match(tldRegex1)); // (2) ['Org', 'Org', index: 8, input: 'Com Net Org Info Code Io']

let tldRegex2 = /(org|info|io)/gi;

console.log(tld.match(tldRegex2)); // (3) ['Org', 'Info', 'Io']

let nums = "12!3%%45^^^&&678910";

let numsRegex = /[0-5]/g;

console.log(nums.match(numsRegex)); // (7) ['1', '2', '3', '4', '5', '1', '0']

let notBinary = "123456701";

let binaryRegex = /[^0-2]/;

console.log(notBinary.match(binaryRegex)); // ['3', index: 2, input: '123456701']

let practice = "os1 os1os os2 os8 os8os";

let practiceRegex = /os[5-9]os/gi;

console.log(practice.match(practiceRegex)); // ['os8os']

/*
  Regular Expression :
*/

let theString = "AaBbcdefG123!234%^&*";

let aTOzRegex = /[a-z]/g;

console.log(theString.match(aTOzRegex)); // (6) ['a', 'b', 'c', 'd', 'e', 'f']

let notaTozRegex = /[^a-z]/g;

console.log(theString.match(notaTozRegex));
// (14) ['A', 'B', 'G', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']

let AToZRegex = /[A-Z]/g;

console.log(theString.match(AToZRegex)); // (3) ['A', 'B', 'G']

let aedRegex = /[aed]/g;

console.log(theString.match(aedRegex)); // (3) ['a', 'd', 'e']

let notaedRegex = /[^aed]/g;

console.log(theString.match(notaedRegex)); // (17) ...

let allLetterRegex = /[a-zA-Z]/g;

console.log(theString.match(allLetterRegex)); // (9) ['A', 'a', 'B', 'b', 'c', 'd', 'e', 'f', 'G']

let specialChars = /[^a-zA-Z0-9]/g;

console.log(theString.match(specialChars)); // (5) ['!', '%', '^', '&', '*']

/*
  Regular Expression : 

  Character Classes 
  .     => matches any char , except newline or other line terminators
  \w    => matches word characters [a-z, A-Z, 0-9 and underscore]
  \W    => matches non word characters [^a-z, A-Z, 0-9 and underscore]
  \d    => matches digital from 0 - 9
  \D    => matches non digital
*/

let email = "a@@@g....com a@g.com o@g.net A@Y.com A-b.com a@a.org 1@1.com";

let dot = /./g;

console.log(email.match(dot)); // (60) match even the space

let word = /\w/g;

console.log(email.match(word)); // (35)

let valid = /\w@/g;

console.log(email.match(valid)); // (6) ['a@', 'a@', 'o@', 'A@', 'a@', '1@']

let valid1 = /\w@\w/g;

console.log(email.match(valid1)); // (5) ['a@g', 'o@g', 'A@Y', 'a@a', '1@1']

let valid2 = /\w@\w.(com|net)/g;

console.log(email.match(valid2)); // (4) ['a@g.com', 'o@g.net', 'A@Y.com', '1@1.com']
