class wine extends Beverage {

 constructor (vite, location, name, producer, yob, quantity, alcohol) {
            super();
            this.name = name;
            this.producer = producer;
            this.alcohol = alcohol;
            this.quantity = quantity;
            this.yob = yob;
            this.vite = vite;
            this.location = location;
 }

    toString(){
          return "name: " + this.name + "\n" +
                 "location: " + this.location + "\n" +
                 "year of birth: " + this.yob + "\n" +
                 "producer: " + this.producer + "\n" +
                 "quantity: " + this.quantity + "\n" +
                 "vite: " + this.vite + "\n" +
                 "alcohol: " + this.alcohol + "\n";
    }

    
}