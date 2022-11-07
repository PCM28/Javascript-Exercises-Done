const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 43, name: 'El gato felix'},
    {id: 18, name: 'Buzz MyYear'},
    {id: 44, name: 'El gato felixqwe'},
    {id: 45, name: 'El gato felixqwew'},
    {id: 46, name: 'El gato felixqweeq'},
    {id: 9, name: 'Buzz MyYear'},
]
const toys2 = []
for (const toy of toys) {
    if(!toy.name.includes("gato")) toys2.push(toy)
}

console.log(toys2)
