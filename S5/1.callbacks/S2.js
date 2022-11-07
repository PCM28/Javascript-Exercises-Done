const userAnwsers = [];
let description=""

const confirmExample=(description)=>{return description="confirmado"}

const promptExample=(description)=>{return description="pronto"}

const father = (callback) => {userAnwsers.push(callback(description))}

father(confirmExample)
father(promptExample)
father(confirmExample)
father(promptExample)
console.log(userAnwsers)