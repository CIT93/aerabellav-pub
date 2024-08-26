console.log("hello from inside the main.js file");

//let myVar;
const myVar = "string";
const myVarType = typeof(myVar);
console.log("myVarType" + myVarType);
console.log('myVarType $(myVarType)');

if(myVarType === "number")  {
    console.log('will 10 this one run?')
} else {
    console.log('this 12 line will run')
}

function runNow () {
    if(myVarType === "number")  {
        console.log('will 10 this one run?')
    } else {
        console.log('this 12 line will run')
    }
)

runNow();
runNow();