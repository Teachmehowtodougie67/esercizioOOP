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



// DOM ( document object model)

console.log(document);

const h1Title = document.getElementById('main-title')

console.log(h1Title);

h1Title.innerText = "Enoteca Bartoletti S.P.A"



const barbera = new premiunWine ("Barbera D'asti", "consorzio Barbera", 2020, 75, 12.5, "Barbera", "Piemonte", "D.O.C", 18);


const nameSpan = document.getElementById ('card-name');
nameSpan.innerText = barbera.name ;


const producerSpan = document.getElementById ('card-producer');
producerSpan.innerText = barbera.producer ;


// const yobSpan = document.getElementById ('card-yob');
// yobSpan.innerText = barbera.yob;


// const quantitySpan = document.getElementById ('card-quantity');
// quantitySpan.innerText = barbera.quantity ;


// const alcoholSpan = document.getElementById ('card-alcohol');
// alcoholSpan.innerText = barbera.alcohol ;


// const bottleNumberSpan = document.getElementById ('card-bottleNumber');
// bottleNumberSpan.innerText = barbera.bottleNumbers;

// const priceSpan = document.getElementById ('card-price');
// priceSpan.innerText = barbera.price;

// const viteSpan = document.getElementById ('card-vite');
// viteSpan.innerText = barbera.vite;

// const locationSpan = document.getElementById ('card-location');
// locationSpan.innerText = barbera.location;

// const certificationSpan = document.getElementById ('card-certification');
// certificationSpan.innerText = barbera.certification;

document.getElementById ('card-yob').innerText = barbera.yob;
document.getElementById ('card-quantity').innerText = barbera.quantity;
document.getElementById ('card-alcohol').innerText = barbera.alcohol;
document.getElementById ('card-bottleNumber').innerText = barbera.bottleNumber;
document.getElementById ('card-price').innerText = barbera.price;
document.getElementById ('card-vite').innerText = barbera.vite;
document.getElementById ('card-location').innerText = barbera.location;
document.getElementById ('card-certification').innerText = barbera.certfication;

champagne = new premiunWine ("Champagne brut", "Charles Vercy", 2020, 75 , 12, "chardonnay", "france", "D.O.C", 19.20);

const newCard = document.createElement ('div');
newCard.className = 'card';

const main = document.getElementById('main-content');
main.appendChild(newCard);

const cardImage = document.createElement ('img');
cardImage.src = './assets/freakywine.png';
cardImage.width = '100' ;

newCard.appendChild(cardImage);

////////////////////////////////////////////////////// NAME

const nameContainer = document.createElement ('div');
newCard.appendChild(nameContainer);

const nameKey = document.createElement('strong');
nameKey.innerText = 'nome: ';
nameContainer.appendChild(nameKey);

const nameValue = document.createElement('span')
nameValue.innerText = champagne.name;
nameContainer.appendChild(nameValue);

///////////////////////////////////////////////////////// PRODUCER

const producerContainer = document.createElement ('div');
newCard.appendChild(producerContainer);

const producerKey = document.createElement('strong');
producerKey.innerText = 'producer: ';
producerContainer.appendChild(producerKey);

const producerValue = document.createElement('span')
producerValue.innerText = champagne.producer;
producerContainer.appendChild(producerValue);

///////////////////////////////////////////////////////// YOB

const yobContainer = document.createElement ('div');
newCard.appendChild(yobContainer);

const yobKey = document.createElement('strong');
yobKey.innerText = 'annat: ';
yobContainer.appendChild(yobKey);

const yobValue = document.createElement('span')
yobValue.innerText = champagne.yob;
yobContainer.appendChild(yobValue);

//////////////////////////////////////////////////////// CL

const quantityContainer = document.createElement ('div');
newCard.appendChild(quantityContainer);

const quantityKey = document.createElement('strong');
quantityKey.innerText = 'cl: ';
quantityContainer.appendChild(quantityKey);

const quantityValue = document.createElement('span')
quantityValue.innerText = champagne.quantity
quantityContainer.appendChild(quantityValue);

/////////////////////////////////////////////////////// GRADES

const alcoholContainer = document.createElement ('div');
newCard.appendChild(alcoholContainer);

const alcoholKey = document.createElement('strong');
alcoholKey.innerText = 'grades: ';
alcoholContainer.appendChild(alcoholKey);

const alcoholValue = document.createElement('span')
alcoholValue.innerText = champagne.alcohol;
alcoholContainer.appendChild(alcoholValue);

/////////////////////////////////////////////////////// VITE

const viteContainer = document.createElement ('div');
newCard.appendChild(viteContainer);

const viteKey = document.createElement('strong');
viteKey.innerText = 'vite: ';
viteContainer.appendChild(viteKey);

const viteValue = document.createElement('span')
viteValue.innerText = champagne.vite;
viteContainer.appendChild(viteValue);

//////////////////////////////////////////////////////// LOCATION

const locationContainer = document.createElement ('div');
newCard.appendChild(locationContainer);

const locationKey = document.createElement('strong');
locationKey.innerText = 'location: ';
locationContainer.appendChild(locationKey);

const locationValue = document.createElement('span')
locationValue.innerText = champagne.location;
locationContainer.appendChild(locationValue);

///////////////////////////////////////////////////////// CERTIFICATION

const certificationContainer = document.createElement ('div');
newCard.appendChild(certificationContainer);

const certificationKey = document.createElement('strong');
certificationKey.innerText = 'certification: ';
certificationContainer.appendChild(certificationKey);

const certificationValue = document.createElement('span')
certificationValue.innerText = champagne.certification;
certificationContainer.appendChild(certificationValue);

/////////////////////////////////////////////////////////// PRICE




const priceContainer = document.createElement ('div');
newCard.appendChild(priceContainer);

const priceKey = document.createElement('strong');
priceKey.innerText = 'price: ';
priceContainer.appendChild(priceKey);

const priceValue = document.createElement('span')
priceValue.innerText = champagne.price;
priceContainer.appendChild(priceValue);