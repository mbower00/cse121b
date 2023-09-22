/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Mitchell Brandt Bower"
const currentYear = new Date().getFullYear()
const imgPath = "images/me.jpg"



/* Step 3 - Element Variables */
const nameElement = document.getElementById("name")
const foodElement = document.getElementById("food")
const yearElement = document.querySelector("#year")
const imageElement = document.querySelector("img")





/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`
yearElement.textContent = currentYear
imageElement.setAttribute("src", imgPath)
imageElement.setAttribute("alt", `Profile image of ${fullName}`)





/* Step 5 - Array */
const foods = ["Tacos", "Fajitas", "Burritos", "Muter Paneer Curry", "Pumpkin Pie"]
foodElement.textContent = foods
const food = "Nachos"
foods.push(food)
foodElement.innerHTML += `<br>${foods}`
foods.splice(0, 1)
foodElement.innerHTML += `<br>${foods}`
foods.pop()
foodElement.innerHTML += `<br>${foods}`






