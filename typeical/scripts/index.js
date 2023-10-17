import {modalShadeEl, modalXEl, hideModal, showModal} from "./modal.js"
import {getAnalysis} from "./analysis.js"
const loadBtn = document.getElementById("load-btn")
const triviaStack = []
let completed = []
let attempts = []
const TIME = 60000


const getTrivia = async () => {
    // Fetch and return a trivia
    const res = await fetch("http://numbersapi.com/random/trivia?json")
    const trivia = await res.json()
    return trivia.text
}

const pushTrivia = async () => {
    // Fetch and push a trivia to the triviaStack
    const trivia = await getTrivia()
    triviaStack.push(trivia)
}

const nextTrivia = () => {
    const out = document.getElementById("data-output")
    const input = document.getElementById("typing-input")
    
    // Push the current trivia to completed
    completed.push(out.textContent)
    
    // Push the current attempt to attempts, and reset input
    attempts.push(input.value)
    input.value = ""
    input.focus()
    
    // Display new trivia
    out.textContent = triviaStack.pop()
    
    // Load another trivia for a buffer
    pushTrivia()    
}

const handleEnter = (event) => {
    if (event.key === "Enter") {
        nextTrivia()
    }
}

const endGame = () => {
    // Reset the game

    const out = document.getElementById("data-output")
    const input = document.getElementById("typing-input")
    
    loadBtn.removeEventListener("click", nextTrivia)
    setupStartBtn()

    completed.push(out.textContent)
    out.textContent = 'Click "Start" to try again!'
    
    input.removeEventListener("keypress", handleEnter)
    attempts.push(input.value)
    input.value = ""

    // Populate and show modal

    const {
        charCount,
        approxWords,
        promptCount,
        correctPromptsCount,
        incorrectPromptsCount,
        correctPrompts,
        incorrectPrompts
    } = getAnalysis(completed, attempts)

    document.getElementById("char-count").textContent = charCount
    document.getElementById("word-count").textContent = approxWords
    document.getElementById("prompt-count").textContent = promptCount
    document.getElementById("correct-count").textContent = correctPromptsCount
    document.getElementById("incorrect-count").textContent = incorrectPromptsCount

    const correctPromptsEl = document.getElementById("correct-container")
    const incorrectPromptsEl = document.getElementById("incorrect-container")

    correctPromptsEl.innerHTML = ''
    incorrectPromptsEl.innerHTML = ''

    correctPrompts.forEach((prompt => {
        correctPromptsEl.innerHTML += `
            <div class="correct">${prompt}</div>
        `
    }))

    incorrectPrompts.forEach((promptData => {
        incorrectPromptsEl.innerHTML += `
            <div class="incorrect">${promptData.attempt}</div>
            <div class="correct">${promptData.correct}</div>
        `
    }))

    showModal()

    // clear old data
    
    completed = []
    attempts = []
}

const startGame = async () => {
    // Set the button to show "Loading..."
    loadBtn.textContent = "Loading..."
    loadBtn.style.backgroundColor = "#555"

    // load three trivia so there is a buffer
    await pushTrivia()
    await pushTrivia()
    await pushTrivia()
    
    // Show the first trivia to be used
    const out = document.getElementById("data-output")
    out.textContent = triviaStack.pop()

    // Prepare the input
    const input = document.getElementById("typing-input")
    input.focus()
    input.addEventListener("keypress", handleEnter)
    input.textContent = ""

    // Setup the button for "Next" feature
    loadBtn.textContent = "Next"
    loadBtn.style.backgroundColor = "#151d32"
    loadBtn.addEventListener("click", nextTrivia)
    
    // Set a 1 min game timer.
    setTimeout(endGame, TIME)
}

const setupStartBtn = () => {
    const start = () => {
        loadBtn.removeEventListener("click", start)
        startGame()
    }
    loadBtn.textContent = "Start (1 min )"
    loadBtn.addEventListener("click", start)
}


setupStartBtn()
modalShadeEl.addEventListener("click", hideModal)
modalXEl.addEventListener("click", hideModal)