const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
for (const key in alien) {
    if (Object.hasOwnProperty.call(alien, key)) {//cambiar key por el atributo que quieres que muestre en todos los objetos del array, este caso solo hay 1 objeto y como lleva por defecto key imprime todos sus valores 
        const element = alien[key];
        console.log(element)
    }
}