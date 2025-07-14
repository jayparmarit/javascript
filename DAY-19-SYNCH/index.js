function message(){
    for(let i=0; i<10000000000; i++){
        console.log("hellow second")
    }
}



function first(){
    console.log("hellow first")
}

function second(){
    setTimeout(function(){
        console.log("hellow second")
    },1000)
}

function third(){
    console.log("hellow third")
}

function fourth(){
    setTimeout(function(){
        console.log("hellow fourth")
    },1000)
}

function fifth(){
    console.log("hellow fifth")
}
function sixth(){
    console.log("hellow sixth")
}
function seventh(){
    setTimeout(function(){
        console.log("hellow seventh")
    },1000)
}
function eight(){
    console.log("hellow eight")
}

first()
second()
third()
fourth()
fifth()
sixth()
seventh()
eight()