const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ulNd = document.createElement('ul')
for (const app of apps) {
    const liNd = document.createElement('li')
    liNd.textContent=app
    ulNd.appendChild(liNd)
}
document.body.appendChild(ulNd)