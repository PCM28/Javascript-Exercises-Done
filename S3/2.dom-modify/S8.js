const secondDivNd = document.querySelectorAll('div')[1]
const pNd = document.createElement('p')
pNd.textContent = "Voy en medio!"

document.body.insertBefore(pNd, secondDivNd)