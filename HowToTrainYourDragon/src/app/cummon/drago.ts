
export class Drago {
    
        id:number;
        name: string;
        species : string;
        classe: string;
        attack: string;
        speed: string ;
        armor: string ;
        firepower: string ;
        shotLimit: string ;
        venom: string ;
        jawStrength: string ;
        stealth: string ;
        description: string ;
        image: string ;

        constructor(id:Drago, name: Drago, species : Drago, classe: Drago, attack: Drago, speed: Drago, armor: Drago, firepower: Drago, shotLimit: Drago, 
                    venom: Drago, jawStrength: Drago, stealth: Drago, description: Drago, image: Drago){
                
                        this.id = id.id;
                        this.name = name.name;
                        this.species = species.species;
                        this.classe = classe.classe;
                        this.attack = attack.attack;
                        this.speed = speed.speed;
                        this.armor = armor.armor;
                        this.firepower = firepower.firepower;
                        this.shotLimit = shotLimit.shotLimit;
                        this.venom = venom.venom;
                        this.jawStrength = jawStrength.jawStrength;
                        this.stealth = stealth.stealth;
                        this.description = description.description;
                        this.image = image.image;
            }
    
}
