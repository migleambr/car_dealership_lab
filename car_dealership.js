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
    const _maxNumberOfCars = 120;
    let _stock = [];

    this.getTitle = () => _title;
    this.setTitle = (title) => _title = title;
    this.getMaxNumberOfCars = () => _maxNumberOfCars;
    this.getStock = () => _stock;
    this.addStock = (car) => _stock.push(car);
    this.removeStock = (car) => _stock.splice(_stock.indexOf(car), 1);
}

module.exports = {Car, Dealership}; 

