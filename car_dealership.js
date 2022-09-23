// create a Car class with properties:
    // manufacturer
    // price
    // engine type

const Car = function (manufacturer, price, engineType) {
    let _manufacturer = manufacturer;
    let _price = price;
    let _engineType = engineType;

    this.getManufacturer = () => _manufacturer;
    this.setManufacturer = (manufacturer) => _manufacturer = manufacturer;
    this.getPrice = () => _price;
    this.setPrice = (price) => _price = price;
    this.getEngineType = () => _engineType;
    this.setEngineType = (engineType) => _engineType = engineType;
}

// create a Dealership class with properties:
    // title
    // max number of cars
    // cars in stock

const Dealership = function (title) {
    let _title = title;
    const _maxNumberOfCars = 3;
    let _stock = [];

    this.getTitle = () => _title;
    this.setTitle = (title) => _title = title;
    this.getMaxNumberOfCars = () => _maxNumberOfCars;
    this.getStock = () => _stock;
    // this.addStock = (car) => _stock.push(car);
    this.removeStock = (car) => _stock.splice(_stock.indexOf(car), 1);
}

// method to count the number of cars in stock
Dealership.prototype.countStock = function () {
    return this.getStock().length;
}

let myDealership = new Dealership("Migle's Dealership");
console.log(myDealership.countStock());

// method to add a car to stock
Dealership.prototype.addStock = function (Car) {
    if (this.countStock() === this.getMaxNumberOfCars()) {
        console.log("Exceeded maximum stock capacity!");
    } else if (this.countStock() < this.getMaxNumberOfCars()) {
        this.getStock().push(Car);
    }
}

const McLaren720S = new Car("McLaren", 315000, "Petrol");
const lamborghiniUrus = new Car("Lamborghini", 222000, "Petrol");
const lamborghiniAventador = new Car("Lamborghini", 390000, "Petrol");

myDealership.addStock(McLaren720S);
myDealership.addStock(lamborghiniUrus);
myDealership.addStock(lamborghiniAventador);
console.log(myDealership.countStock());

myDealership.addStock(new Car("", 0, ""));
console.log(myDealership.countStock());

// method to return an array containing each car's manufacturer
Dealership.prototype.allManufacturers = function () {
    let manufacturers = [];
    for (i = 0; i < this.countStock(); i++) {
        manufacturers.push(this.getStock()[i].getManufacturer());
    }
    return manufacturers;
} 

console.log(myDealership.allManufacturers());

// method to find all cars from a given manufacturer
Dealership.prototype.carsByManufacturer = function (manufacturer) {
    this.manufacturer = manufacturer;
    let allCars = [];
    // let car = [];
    for (i = 0; i < this.countStock(); i++) {
        if (manufacturer === this.getStock()[i].getManufacturer()) {
            allCars.push(this.getStock()[i]);        
            // car.push(this.getStock()[i].getManufacturer());
            // car.push(this.getStock()[i].getPrice()); 
            // car.push(this.getStock()[i].getEngineType());
        }
    }
    // return car;
    return allCars;
}

// method to find all cars by a specified feature
Dealership.prototype.carsByFeature = function (carFeature) {
    this.carFeature = carFeature;
    let allCars = [];
    // let car = [];
    for (i = 0; i < this.countStock(); i++) {
        if (carFeature === this.getStock()[i].getManufacturer()) {
            allCars.push(this.getStock()[i]);        
            // car.push(this.getStock()[i].getManufacturer());
            // car.push(this.getStock()[i].getPrice()); 
            // car.push(this.getStock()[i].getEngineType());
        } 
        if (carFeature == this.getStock()[i].getPrice()) {
            allCars.push(this.getStock()[i]);        
            // car.push(this.getStock()[i].getManufacturer());
            // car.push(this.getStock()[i].getPrice()); 
            // car.push(this.getStock()[i].getEngineType());
        }
        if (carFeature === this.getStock()[i].getEngineType()) {
            allCars.push(this.getStock()[i]);        
            // car.push(this.getStock()[i].getManufacturer());
            // car.push(this.getStock()[i].getPrice()); 
            // car.push(this.getStock()[i].getEngineType());
        }
    }
    // return car;
    return allCars;
}

// console.log(myDealership.getStock()[0].getManufacturer(), myDealership.getStock()[0].getPrice(), myDealership.getStock()[0].getEngineType());
// console.log(myDealership.carsByFeature("Lamborghini"));
console.log(myDealership.carsByFeature(222000));

// method to find the total value of all the cars in stock
Dealership.prototype.totalValue = function () {
    let value = 0;
    for (i = 0; i < this.countStock(); i++) {
        value += this.getStock()[i].getPrice();
    }
    return value;
}

console.log(myDealership.totalValue());

module.exports = {Car, Dealership}; 

