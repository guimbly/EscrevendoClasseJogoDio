class hero{
    constructor(heroName, heroAge, heroClass){
        this.heroName = heroName;
        this.heroAge = heroAge;
        this.heroClass = heroClass.toString().toLowerCase();
    }
    attack(){

        if(this.heroClass == 'mago'){
            console.log(`o ${this.heroClass} atacou usando magia!`)
        }
        else if(this.heroClass == 'ninja'){
            console.log(`o ${this.heroClass} atacou usando shurikens!`)
        }
        else if(this.heroClass == 'monge'){
            console.log(`o ${this.heroClass} atacou usando os punhos!`)
        }
        else if(this.heroClass == 'guerreiro'){
            console.log(`o ${this.heroClass} atacou usando a espada!`)
        }
        else{
            console.log(`a classe secreta ${this.heroClass} atacou usando o ataque secreto!`)
        }
    }
}
