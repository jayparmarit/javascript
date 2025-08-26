let text= "hellow jayyyy";

//  split() methods ==> Splits a string into an array of substrings

console.log(text.split(" "));
console.log(text.split(""));
console.log(text.split("j"));  // will remove specified value in text and return string

// startsWith() methods ==> startswith method whether a string begins with specified characters

console.log(text.startsWith("hellow"))
console.log(text.startsWith("jayyy"))


// The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.

// The substring() method extracts characters from start to end (exclusive).

// The substring() method does not change the original string.

// If start is greater than end, arguments are swapped: (4, 1) = (1, 4).

// Start or end values less than 0, are treated as 0


console.log(text.substring(2));
console.log(text.substring(1, 4));
console.log(text.substring(-1));  // return full text

// trim()	Returns a string with removed whitespace

let trimTextExample = "            hellow               ";

console.log(trimTextExample.length);

console.log(trimTextExample.trim().length
);

// we can trim from start and end using trim.start() and trim.end() methods



console.log(trimTextExample.trimStart().length
);

// trim.end() example

console.log(trimTextExample.trimEnd().length
);