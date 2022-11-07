function handleFocus(event) {
    console.log(event.target.value)
}

const inputNd = document.querySelector('[type="text"]')
inputNd.addEventListener('focus',handleFocus)