

class Hero {
    Name
    Age
    Type
    constructor(Name, Age, Type) {
        this.Name = Name;
        this.Age = Age;
        this.Type = Type;
    }

    atacar(infoPersona) {
     //type of attack  
        let atMago = "magia";
        let atWarrior = "espada";
        let atMonge = "artes marciais";
        let atNinja = "shurikane";

       
        if (infoPersona == "mago") {
            console.log(`O ${infoPersona} atacou usando ${atMago} `)

        } else if (infoPersona == "warrior") {
            console.log(`O ${infoPersona} atacou usando ${atWarrior} `)

        } else if (infoPersona == "monge") {
            console.log(`O ${infoPersona} atacou usando ${atMonge} `)

        } else if (infoPersona == "ninja") {
            console.log(`O ${infoPersona} atacou usando ${atNinja} `)

        } else {
            console.log("Herói não encontrado")
        }
    }
}
//creating a hero

let persona = new Hero ("Arthur", 30, "warrior")

// using atacar
let ataqueMa = persona.atacar("mago")
let ataqueM = persona.atacar("monge")
let ataqueW = persona.atacar("warrior")
let ataqueN = persona.atacar("ninja")




