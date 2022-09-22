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

// const lamborghiniUrus = new Car('Lamborghini', 222000, 'Petrol');
// console.log(lamborghiniUrus.getManufacturer(), lamborghiniUrus.getPrice(), lamborghiniUrus.getEngineType());

module.exports = {Car}; 

