export interface iCharacters {
    id:string,
    name:string,
    role:string,
    house?:string,
    school?:string,
    _v?:number,
    ministryofMagic:boolean,
    orderOfThePhoenix:boolean,
    dumbledoresArmy:boolean,
    deathEater:boolean,
    bloodStatus:string,
    species:string,
    boggart?:string,
    animagus?:string,
    alias?:string,
    wand?:string
}

export interface iChar {
    char:iCharacters
}
