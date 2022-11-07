const print= async(data)=>{
    const h1Nd = document.createElement('h1')
    const h2Nd = document.createElement('h2')
    const h3Nd = document.createElement('h3')

    h1Nd.innerHTML=data.name
    h2Nd.innerHTML=data.age
    h3Nd.innerHTML=data.count

    
}
const getData = async() =>{

}
fetch('https://api.agify.io?name=michael')