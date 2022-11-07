function handleChange(event) {
    console.log(event.target.value)
}

const inputNd = document.querySelector('[type="text"]')
inputNd.addEventListener('input',handleChange)