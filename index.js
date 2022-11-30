// utility
function printValue(value){
    console.info(value)
}
​
// 1.0 FUNCTION DECLARATION
//TODO: create a basic function that adds two random values
function add(){
    const num1 = 4
    const num2 = 20
    printValue(num1 + num2)
}
add()
​
//TODO: create a function that takes in two values and adds them
function addNums(n1,n2){
    printValue(n1 + n2)
}
addNums(5,103)
addNums(13,13)
​
//TODO: create a function that takes in two values, adds them and returns the value of the addition
function addNumbers(n1,n2){
    const sum = n1 + n2
    return sum
}
const summation = addNumbers(145,36)
printValue(summation)
​
​
// 1.0 FUNCTION EXPRESSION
//TODO: create a basic function that adds two random values
const addExpression = function(){
    printValue(310 + 50)
}
addExpression()
​
//TODO: create a function that takes in two values and adds them
const addValue = function(n1,n2){
    printValue(n1 + n2)
}
addValue(100,80)
​
//TODO: create a function that takes in two values, adds them and returns the value of the addition
const addTwoValues = function(n1,n2){
    const sum = n1 + n2
    return sum
}
const adding = addTwoValues(300,640)
printValue(adding)
​
// 1.0 ARROW FUNCTION
//TODO: create a basic function that adds two random values
const addAnonymous = ()=> {
    printValue(60 +90)
}
addAnonymous()
​
//TODO: create a function that takes in two values and adds them
const anonymousAdd = (n1,n2)=> {
    printValue(n1 + n2)   
}
anonymousAdd(90,70)
​
//TODO: create a function that takes in two values, adds them and returns the value of the addition
const addAnon = (n1,n2) => {
    const sum = n1 + n2
    return sum
}
const addition = addAnon(80,70)
printValue(addition)