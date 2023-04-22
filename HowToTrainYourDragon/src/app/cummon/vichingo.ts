export class Vichingo {
    
    id:number;
    firstName: string;
    lastName : string;
    tribe: string;
    gender: string;
    height: string ;
    eyes: string ;
    hair: string ;
    weapon: string ;
    location: string ;
    imageV: string;
    constructor(id:Vichingo, firstName: Vichingo, lastName : Vichingo, tribe: Vichingo, gender: Vichingo, height: Vichingo, eyes: Vichingo, hair: Vichingo, weapon: Vichingo, 
        location: Vichingo, imageV: Vichingo){
            
                    this.id = id.id;
                    this.firstName = firstName.firstName;
                    this.lastName = lastName.lastName;
                    this.tribe = tribe.tribe;
                    this.height = height.height;
                    this.eyes = eyes.eyes;
                    this.hair = hair.hair;
                    this.weapon = weapon.weapon;
                    this.location = location.location;
                    this.gender = gender.gender;
                    this.imageV = imageV.imageV;
        }

}

