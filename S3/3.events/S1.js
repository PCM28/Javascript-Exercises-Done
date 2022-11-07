function handleClick(event) {
    console.log(event.target.value)//Es el aproximado
}
const btnNd = document.querySelector('[id="btnToClick"]')
btnNd.addEventListener('click', handleClick)