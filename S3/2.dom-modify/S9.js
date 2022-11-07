const divNd = document.querySelectorAll('[class="fn-insert-here"]')//Es un array

for (const divN of divNd) {
    const pNd = document.createElement('p')//Siempre al colocar elementos dentro de un array, el contenido como la creación de la variable va dentro del bucle, esto solo en javascript en java va a fuera
    pNd.textContent="Voy dentro!"
    divN.appendChild(pNd)
}