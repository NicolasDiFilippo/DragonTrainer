import { Component } from '@angular/core';
import { DatiServizioService } from '../cummon/dati-servizio.service';
import { Drago } from '../cummon/drago';

@Component({
  selector: 'app-visualizza-draghi',
  templateUrl: './visualizza-draghi.component.html',
  styleUrls: ['./visualizza-draghi.component.css']
})
export class VisualizzaDraghiComponent {

  listaDraghi: Drago[] = [
    {
        "id": 1,
        "name": "Toothless",
        "species": "Night Fury",
        "classe": "Strike",
        "attack": "High",
        "speed": "Maximum",
        "armor": "Medium",
        "firepower": "Medium",
        "shotLimit": "High",
        "venom": "N/A",
        "jawStrength": "Low",
        "stealth": "Very High",
        "description": "Loyal and empathic with boundless, puppy-like energy",
        "image": "https://ibb.co/z6xDD4L",
        "classImage": "https://ibb.co/3CM22XP"
    },
    {
        "id": 2,
        "name": "Stormfly",
        "species": "Deadly Nadder",
        "classe": "Tracker",
        "attack": "Low",
        "speed": "Low",
        "armor": "Medium",
        "firepower": "High",
        "shotLimit": "High",
        "venom": "Maximum",
        "jawStrength": "Low",
        "stealth": "Medium",
        "description": "Precise and cunning in battle, yet warm and affectionate with friends old and new",
        "image": "https://ibb.co/JnGcvd9",
        "classImage": "https://ibb.co/JKNmX66"
    },
    {
        "id": 3,
        "name": "Barf & Belch",
        "species": "Hideous Zippleback",
        "classe": "Mystery",
        "attack": "Low",
        "speed": "Medium",
        "armor": "Low",
        "firepower": "High",
        "shotLimit": "High",
        "venom": "N/A",
        "jawStrength": "Low",
        "stealth": "Maximum",
        "description": "Truly a split personality! Barf & Belch are each fiercely independent, yet inextricably linked",
        "image": "https://ibb.co/W60vcYX",
        "classImage": "https://ibb.co/cCfDP5P"
    },
    {
        "id": 4,
        "name": "Grump",
        "species": "Hotburple",
        "classe": "Boulder",
        "attack": "Low",
        "speed": "Low",
        "armor": "High",
        "firepower": "Medium",
        "shotLimit": "High",
        "venom": "N/A",
        "jawStrength": "Low",
        "stealth": "Low",
        "description": "A loyal, lava-launching helper -- when he isn't napping",
        "image": "https://ibb.co/ZG03SZP",
        "classImage": "https://ibb.co/VphFy0p"
    },
    {
        "id": 5,
        "name": "Hookfang",
        "species": "Monstrous Nightmare",
        "classe": "Stocker",
        "attack": "High",
        "speed": "High",
        "armor": "Medium",
        "firepower": "High",
        "shotLimit": "Maximum",
        "venom": "N/A",
        "jawStrength": "Low",
        "stealth": "Low",
        "description": "Incendiary in temperament and short on patience, Hookfang would rather ignite 1st and think 2nd",
        "image": "https://ibb.co/VYSxLGX",
        "classImage": "https://ibb.co/8bNCsRY"
    },
    {
        "id": 6,
        "name": "",
        "species": "Light Fury",
        "classe": "Strike",
        "attack": "High",
        "speed": "Maximum",
        "armor": "Medium",
        "firepower": "Medium",
        "shotLimit": "High",
        "venom": "N/A",
        "jawStrength": "Low",
        "stealth": "Very High",
        "description": "The feline-like Light Fury is gentle and playful by nature, like Toothless, but fiercely protective when danger is present",
        "image": "https://ibb.co/CnYt8rS",
        "classImage": "https://ibb.co/3CM22XP"
    },
    {
        "id": 7,
        "name": "Meatlug",
        "species": "Gronckle",
        "classe": "Boulder",
        "attack": "Low",
        "speed": "Low",
        "armor": "High",
        "firepower": "Medium",
        "shotLimit": "High",
        "venom": "N/A",
        "jawStrength": "Low",
        "stealth": "Low",
        "description": "Exceedingly demonstrative and sweet, yet quite self-conscious despite her thick hide",
        "image": "https://ibb.co/4SPQJsJ",
        "classImage": "https://ibb.co/VphFy0p"
    },
    {
        "id": 8,
        "name": "Cloud Jumper",
        "species": "Stormutter",
        "classe": "Sharp",
        "attack": "Low",
        "speed": "Low",
        "armor": "Very Low",
        "firepower": "N/A",
        "shotLimit": "Very High",
        "venom": "N/A",
        "jawStrength": "N/A",
        "stealth": "N/A",
        "description": "Proud and confident",
        "image": "https://ibb.co/0JznPFj",
        "classImage": "https://ibb.co/PFjPKk6"
    },
    {
        "id": 9,
        "name": "Skull Crusher",
        "species": "Rumblehorn",
        "classe": "Tracker",
        "attack": "Low",
        "speed": "Low",
        "armor": "Low",
        "firepower": "Low",
        "shotLimit": "Low",
        "venom": "N/A",
        "jawStrength": "Low",
        "stealth": "N/A",
        "description": "Doggedly determined when he's caught a scent",
        "image": "https://ibb.co/B6rZb4X",
        "classImage": "https://ibb.co/JKNmX66"
    },
    {
        "id": 10,
        "name": "",
        "species": "Armor Wing",
        "classe": "Mystery",
        "attack": "Low",
        "speed": "Low",
        "armor": "Maximum",
        "firepower": "Low",
        "shotLimit": "Low",
        "venom": "N/A",
        "jawStrength": "Low",
        "stealth": "Very Low",
        "description": "Metal-Plated Plunderer",
        "image": "https://ibb.co/Np6X5W9",
        "classImage": "https://ibb.co/cCfDP5P"
    },
    {
        "id": 11,
        "name": "",
        "species": "Eruptodon",
        "classe": "Boulder",
        "attack": "Low",
        "speed": "Low",
        "armor": "Very High",
        "firepower": "Low",
        "shotLimit": "Low",
        "venom": "N/A",
        "jawStrength": "Low",
        "stealth": "Very Low",
        "description": "Volcanic & valiant",
        "image": "https://ibb.co/MZdm4mk",
        "classImage": "https://ibb.co/VphFy0p"
    },
    {
        "id": 12,
        "name": "",
        "species": "Night Terror",
        "classe": "Stocker",
        "attack": "Very Low",
        "speed": "Low",
        "armor": "Very Low",
        "firepower": "Low",
        "shotLimit": "Low",
        "venom": "N/A",
        "jawStrength": "Very Low",
        "stealth": "Low",
        "description": "Shy at first, but great as allies once trust is built",
        "image": "https://ibb.co/8P0gHDZ",
        "classImage": "https://ibb.co/8bNCsRY"
    },
    {
        "id": 13,
        "name": "",
        "species": "Seashocker",
        "classe": "Tidal",
        "attack": "Low",
        "speed": "Medium",
        "armor": "Low",
        "firepower": "Very Low",
        "shotLimit": "Low",
        "venom": "High",
        "jawStrength": "Very Low",
        "stealth": "Very Low",
        "description": "Masters of the sneak attack",
        "image": "https://ibb.co/brRD9gT",
        "classImage": "https://ibb.co/9pPgDmm"
    },
    {
        "id": 14,
        "name": "",
        "species": "Skrill",
        "classe": "Strike",
        "attack": "Low",
        "speed": "High",
        "armor": "Low",
        "firepower": "Low",
        "shotLimit": "Very Low",
        "venom": "N/A",
        "jawStrength": "Very Low",
        "stealth": "Low",
        "description": "Belligerent and as unpredictable as lightning strikes",
        "image": "https://ibb.co/DVSLb7d",
        "classImage": "https://ibb.co/3CM22XP"
    },
    {
        "id": 15,
        "name": "",
        "species": "Snaptrapper",
        "classe": "Mystery",
        "attack": "Low",
        "speed": "Very Low",
        "armor": "Very Low",
        "firepower": "Very Low",
        "shotLimit": "Very Low",
        "venom": "Very High",
        "jawStrength": "High",
        "stealth": "Maximum",
        "description": "Temptation and terror to the fourth power",
        "image": "https://ibb.co/ZcNzyfj",
        "classImage": "https://ibb.co/cCfDP5P"
    },
    {
        "id": 16,
        "name": "",
        "species": "Terrible Terror",
        "classe": "Stocker",
        "attack": "Low",
        "speed": "Low",
        "armor": "Low",
        "firepower": "Low",
        "shotLimit": "Low",
        "venom": "High",
        "jawStrength": "Very Low",
        "stealth": "Low",
        "description": "Inquisitive and curious animals, their only downfall is their territorial in-fighting",
        "image": "https://ibb.co/ZXLvNJq",
        "classImage": "https://ibb.co/8bNCsRY"
    },
    {
        "id": 17,
        "name": "",
        "species": "Thunderdrum",
        "classe": "Tidal",
        "attack": "Low",
        "speed": "Medium",
        "armor": "Low",
        "firepower": "Low",
        "shotLimit": "Low",
        "venom": "N/A",
        "jawStrength": "Low",
        "stealth": "Low",
        "description": "Strident and assertive, the loud Thunderdrum always makes its feelings known",
        "image": "https://ibb.co/nbFY2tG",
        "classImage": "https://ibb.co/9pPgDmm"
    },
    {
        "id": 18,
        "name": "",
        "species": "Timberjack",
        "classe": "Sharp",
        "attack": "Low",
        "speed": "Medium",
        "armor": "Low",
        "firepower": "Low",
        "shotLimit": "Low",
        "venom": "N/A",
        "jawStrength": "Very Low",
        "stealth": "Low",
        "description": "Modest serenity balanced with fierce protection of their riders",
        "image": "https://ibb.co/QQycCHJ",
        "classImage": "https://ibb.co/PFjPKk6"
    },
    {
        "id": 19,
        "name": "",
        "species": "Whispering Death",
        "classe": "Boulder",
        "attack": "Low",
        "speed": "Low",
        "armor": "Low",
        "firepower": "Very Low",
        "shotLimit": "Very Low",
        "venom": "Very Low",
        "jawStrength": "Very Low",
        "stealth": "Low",
        "description": "Blindly aggressive and capable of holding a grudge like no other dragon",
        "image": "https://ibb.co/kHd6HgD",
        "classImage": "https://ibb.co/VphFy0p"
    },
    {
        "id": 20,
        "name": "Baby Gronckle",
        "species": "Gronckle",
        "classe": "Boulder",
        "attack": "Very Low",
        "speed": "Very Low",
        "armor": "Low",
        "firepower": "Low",
        "shotLimit": "Very Low",
        "venom": "N/A",
        "jawStrength": "Very Low",
        "stealth": "Very Low",
        "description": "Bouncing boulders of joy that need lots of sleep, food, and attention",
        "image": "https://ibb.co/2ZkW46D",
        "classImage": "https://ibb.co/VphFy0p"
    },
    {
        "id": 21,
        "name": "Baby Nadder",
        "species": "Deadly Nadder",
        "classe": "Tracker",
        "attack": "Very Low",
        "speed": "Low",
        "armor": "Very Low",
        "firepower": "Low",
        "shotLimit": "Low",
        "venom": "Low",
        "jawStrength": "Very Low",
        "stealth": "Very Low",
        "description": "Quick, Curious, and prone to temper-tantrums - Like the toddlers of the dragon world",
        "image": "https://ibb.co/tccLp46",
        "classImage": "https://ibb.co/JKNmX66"
    },
    {
        "id": 22,
        "name": "Baby Zippleback",
        "species": "Hideous Zippleback",
        "classe": "Mystery",
        "attack": "Low",
        "speed": "Low",
        "armor": "Very Low",
        "firepower": "Low",
        "shotLimit": "Very Low",
        "venom": "N/A",
        "jawStrength": "Very Low",
        "stealth": "Low",
        "description": "Double Trouble",
        "image": "https://ibb.co/2tY10wc",
        "classImage": "https://ibb.co/cCfDP5P"
    },
    {
        "id": 23,
        "name": "Drago's Bewilderbeast",
        "species": "Bewilderbeast",
        "classe": "Tidal",
        "attack": "Maximum",
        "speed": "Low",
        "armor": "Very High",
        "firepower": "Maximum",
        "shotLimit": "Low",
        "venom": "N/A",
        "jawStrength": "Very High",
        "stealth": "N/A",
        "description": "Scarred and bred for battle",
        "image": "https://ibb.co/B298NzZ",
        "classImage": "https://ibb.co/9pPgDmm"
    },
    {
        "id": 24,
        "name": "Valka's Bewilderbeast",
        "species": "Bewilderbeast",
        "classe": "Tidal",
        "attack": "Maximum",
        "speed": "Low",
        "armor": "Very High",
        "firepower": "Maximum",
        "shotLimit": "Low",
        "venom": "N/A",
        "jawStrength": "Very High",
        "stealth": "N/A",
        "description": "The benevolent and leonine king of all dragons",
        "image": "https://ibb.co/cC5fk3n",
        "classImage": "https://ibb.co/9pPgDmm"
    },
    {
        "id": 25,
        "name": "",
        "species": "Death Song",
        "classe": "Mystery",
        "attack": "Low",
        "speed": "High",
        "armor": "Low",
        "firepower": "Low",
        "shotLimit": "Low",
        "venom": "N/A",
        "jawStrength": "Low",
        "stealth": "N/A",
        "description": "Enticing and siren-like, this species of dragon is decidedly solitary",
        "image": "https://ibb.co/QKBRQBj",
        "classImage": "https://ibb.co/cCfDP5P"
    },
    {
        "id": 26,
        "name": "",
        "species": "Dramillion",
        "classe": "Mystery",
        "attack": "Low",
        "speed": "Medium",
        "armor": "Low",
        "firepower": "Low",
        "shotLimit": "Maximum",
        "venom": "N/A",
        "jawStrength": "Very Low",
        "stealth": "Very Low",
        "description": "Imitative",
        "image": "https://ibb.co/ysvb2c2",
        "classImage": "https://ibb.co/cCfDP5P"
    }
];

  vett:any;
  constructor(public dati:DatiServizioService){
  }

  ngOnInit(){
    
  }
  
  Dati(){
    
    return console.log(this.dati.getDati());
  }


}
