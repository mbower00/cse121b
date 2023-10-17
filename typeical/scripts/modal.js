export const showModal = () => {
    document.getElementById("modal").classList = "modal"
    document.getElementById("modal-shade").classList = "modal-shade cursor center"
}

export const hideModal = () => {
    document.getElementById("modal").classList = "modal hide"
    document.getElementById("modal-shade").classList = "modal-shade center hide"
}

export const modalXEl = document.getElementById("modal-x")

export const modalShadeEl = document.getElementById("modal-shade")