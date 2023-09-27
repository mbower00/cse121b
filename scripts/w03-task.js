/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2
}

function addNumbers() {
    document.getElementById("sum").value = add(
        Number(document.getElementById("add1").value),
        Number(document.getElementById("add2").value)
    )
}

document.getElementById("addNumbers").addEventListener("click", addNumbers)

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2
}

const subtractNumbers = function () {
    document.getElementById("difference").value = subtract(
        Number(document.getElementById("subtract1").value),
        Number(document.getElementById("subtract2").value)
    )
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers)

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2

const multiplyNumbers = () => {
    document.getElementById("product").value = multiply(
        Number(document.getElementById("factor1").value),
        Number(document.getElementById("factor2").value)
    )
}

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers)

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2

const divideNumbers = function () {
    document.getElementById("quotient").value = divide(
        Number(document.getElementById("dividend").value),
        Number(document.getElementById("divisor").value)
    )
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers)
/* Decision Structure */
// Year section
const date = new Date()
let year
year = date.getFullYear()
document.getElementById("year").value = year

// Member discount section
document.getElementById("getTotal").addEventListener("click", () => {
    let subtotal = Number(document.getElementById("subtotal").value)
    const isMember = document.getElementById("member").checked
    if (isMember) {
        // 20% discount is applied if the user is a member
        subtotal = subtotal - (subtotal * .2)
    }
    document.getElementById("total").textContent = subtotal.toFixed(2)
})

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const array = [1,2,3,4,5,6,7,8,9,10,11,12,13]
document.getElementById("array").textContent = array
/* Output Odds Only Array */
document.getElementById("odds").textContent = array.filter(num => num % 2 == 1)
/* Output Evens Only Array */
document.getElementById("evens").textContent = array.filter(num => num % 2 == 0)
/* Output Sum of Org. Array */
document.getElementById("sumOfArray").textContent = array.reduce((p, c) => p + c)
/* Output Multiplied by 2 Array */
document.getElementById("multiplied").textContent = array.map(num => num * 2)
/* Output Sum of Multiplied by 2 Array */
document.getElementById("sumOfMultiplied").textContent = array.map(num => num * 2).reduce((p, c) => p + c)