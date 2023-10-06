/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
    name : "Mitchell Brandt Bower", 
    photo: "images/me.jpg", 
    favoriteFoods: ['Tacos', 'Fajitas', 'Muter Paneer Curry', 'Pumpkin Pie', 'Nachos'],
    hobbies: ['Unicycle Riding', 'Watching Movies', 'Board Game Playing', 'Video Game Playing', 'Listening to Music'],
    placesLived: [],
}



/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({place: "Wisconsin", length: "About 4 years"})
myProfile.placesLived.push({place: "South Carolina", length: "About 16 years"})
myProfile.placesLived.push({place: "Arizona", length: "About 2 years"})
myProfile.placesLived.push({place: "Idaho", length: "About a year and a half"})



/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").textContent = myProfile.name
/* Photo with attributes */
document.getElementById("photo").setAttribute("src", myProfile.photo)

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    const foodEl = document.createElement('li')
    foodEl.textContent = food
    document.getElementById("favorite-foods").appendChild(foodEl)

})

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    const hobbyEl = document.createElement('li')
    hobbyEl.textContent = hobby
    document.getElementById("hobbies").appendChild(hobbyEl)
})

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    const placeEl = document.createElement("dt")
    placeEl.textContent = place.place

    const lengthEl = document.createElement("dd")
    lengthEl.textContent = place.length

    const dataListEl = document.getElementById("places-lived")
    dataListEl.appendChild(placeEl)
    dataListEl.appendChild(lengthEl)
})

