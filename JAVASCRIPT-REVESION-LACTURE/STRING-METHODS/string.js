// ‘A JavaScript String is a sequence of characters, typically used to represent text.

// we can write our string using '', and "" quote


let name = "jay";

//  strings methods example

let text = "hello jayy";

console.log(text);

// charAt() method  ==> returns the character at specified index(position) counting from zero

console.log(text.charAt(6));

// concat() method ==> returns two or more joint strings

console.log(text.concat("good morning"));

// endsWith() method ==> returns true if the string ends with a specified value


console.log(text.endsWith("y"))

// includes() method ==> returns true if the string contains a specified value

console.log(text.includes("p"))

// indexOf() method ==> returns the index(position) of the first occurrence of a value in string

console.log(text.indexOf("jayy"));

console.log(text.indexOf("parmar"))

// lastIndexOf() method ==> returns the last occurrence of a value in string

console.log(text.lastIndexOf("jayy"));

// length returns the length of the string

console.log(text.length);