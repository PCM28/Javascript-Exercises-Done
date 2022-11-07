
const divNd = document.createElement('div')
for (let i = 0; i < 6; i++) {
    const pNd = document.createElement('p')
    divNd.appendChild(pNd)
}
document.body.appendChild(divNd)