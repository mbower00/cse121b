/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples")
let templeList = []

/* async displayTemples Function */
const displayTemples  = temples => {
    temples.forEach(temple => {
        const article = document.createElement("article")
        const h3 = document.createElement("h3")
        h3.textContent = temple.templeName
        const img = document.createElement("img")
        img.setAttribute("src", temple.imageUrl)
        img.setAttribute("alt", temple.location)
        article.appendChild(h3)
        article.appendChild(img)
        templesElement.appendChild(article)
    })
}


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    templeList = await response.json()
    displayTemples(templeList)
}


/* reset Function */
const reset = () => {
    templesElement.replaceChildren()
}

/* sortBy Function */
const sortBy = temples => {
    reset()
    const filter = document.getElementById("sortBy").value
    switch (filter) {
        case "utah":
            displayTemples(
                temples.filter(temple => {
                    return temple.location.includes("Utah")
                })
            )
            break
        case "notutah":
            displayTemples(
                temples.filter(temple => {
                    console.log('s')
                    return !temple.location.includes("Utah")
                })
            )
            break
        case "older":
            displayTemples(
                temples.filter(temple => {
                    const oldDate = new Date(1950, 0, 1)
                    const templeDate = new Date(temple.dedicated)
                    return templeDate < oldDate
                })
            )
            break
        case "all":
            displayTemples(temples)
            break
    }
}


/* Event Listener */
document.getElementById("sortBy").addEventListener("change", () => {sortBy(templeList)})


getTemples()