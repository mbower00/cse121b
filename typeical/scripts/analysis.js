export const getAnalysis = (completed, attempts) => {
    const charCount = getCharCount(attempts)
    const approxWords = charCount / 5 
    const promptCount = completed.length
    const {correctPrompts, incorrectPrompts} = checkPrompts(completed, attempts)
    const correctPromptsCount = correctPrompts.length
    const incorrectPromptsCount = incorrectPrompts.length

    return {
        charCount,
        approxWords,
        promptCount,
        correctPromptsCount,
        incorrectPromptsCount,
        correctPrompts,
        incorrectPrompts
    }
}

function getCharCount(list) {
    let count = 0
    list.forEach((item) => {
        item = item.trim()
        const words = item.split(" ")
        for (let word of words) {
            count += word.length
        }
    })
    return count
}

function checkPrompts(completed, attempts) {
    const incorrectPrompts = []
    const correctPrompts = completed.filter((prompt, index, list) => {
        if (prompt.trim() === attempts[index].trim()) {
            return true
        } else {
            incorrectPrompts.push(
                {
                    attempt: attempts[index].trim(),
                    correct: prompt.trim()
                }
            )
            return false
        }
    })
    return {correctPrompts, incorrectPrompts}
}