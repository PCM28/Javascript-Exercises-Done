const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for (const alumn of alumns) {
    (alumn.T1 && alumn.T2) ? console.log(alumn) : ((alumn.T1 && alumn.T3) ? console.log(alumn): ((alumn.T2 && alumn.T3 ? console.log(alumn):null)))
    let i=0;
    (alumn.T1) ? i++ : i;
    (alumn.T2) ? i++ : i;
    (alumn.T3) ? i++ : i;
    alumn.isApproved = i>1 ? true : false;//alumn.(atributoNuevo) es la forma de añadir new atributes a lo objetos 
}
console.log(alumns)