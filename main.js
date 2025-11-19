console.log("esercizio OOP");

//creare una classe Beverage con le seguenti proprietà:
//name, producer, yob, quantity, alcohol

//creare una classe Beer che estende beverage con le seguenti proprietà:
//type, color


const moretti = {name:"moretti ipa", producer:"moretti", yob:"2024", quantity:"66", alcohol:"4", color:"yellow" }


//const moretti = new Beer('moretti ipa', 'moretti s.p.a.', 2024, [66, 4] , 'ipa', 'blonde');


//creare una classe Wine che estende beverage con le seguenti proprietà:
//vite, location

const dolcetto = {name:"dolcetto bella vita", producer:"cantine bella vita", yob:"2020", quantity:"75", alcohol:"11", vite:"dolcetto", location:"alba"}

//const dolcetto = new Wine('dolcetto bella vita', 'cantine bella vita', 2020, [75, 11] , 'dolcetto', 'alba');


//creare una classe PremiumWine che estende wine con le seguenti proprietà:
//certification

const barolo = {name:"brunate barolo", producer:"francesco Borgogno", yob:"2021", quantity:"75", alcohol:"14", vite:"nebbiolo da barolo", location:"piemonte", certification:"D.O.C.G"}


//const barolo = new PremiumWine('brunate barolo', 'Francesco Borgogno', 2021,[ 75, 14, ] , 'nebbiolo da barolo', 'piemonte', 'D.O.C.G');


//creare i toString di tutte le classi

console.log(moretti.toString());
console.log(dolcetto.toString());
console.log(barolo.toString());