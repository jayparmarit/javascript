// JavaScript Array some() Method
// The some() method checks whether at least one of the elements of the array satisfies the condition checked by the argument function.


function checkMark(mark){
    return mark > 100
}

let marks = [40, 80, 88, 75, 90, 92, 96, 55];

let oldMark = marks.some(checkMark)

console.log(oldMark);

// <------------------------------------>


let numArry = [1,2,3,4,5,6,7,8,]

console.log(numArry.reverse());

// <-------------------------------->