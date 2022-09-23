// write tests to access properties in the Car object

const carDealership = require('./car_dealership.js')

let lamborghiniUrus;
let McLaren720S;
let lamborghiniAventador;
let myDealership;

beforeEach( () => {
    lamborghiniUrus = new carDealership.Car();
    McLaren720S = new carDealership.Car("McLaren", 315000, "Petrol");
    lamborghiniAventador = new carDealership.Car("Lamborghini", 390000, "Petrol");
    myDealership = new carDealership.Dealership("Migle's Dealership");
})

describe('testing access to properties in Car object', () => {

    test('can set & get manufacturer', () => {
        actual = lamborghiniUrus.setManufacturer("Lamborghini");
        expected = lamborghiniUrus.getManufacturer();
        expect(actual).toBe(expected);
    })

    test('can set & get price', () => {
        actual = lamborghiniUrus.setPrice(222000);
        expected = lamborghiniUrus.getPrice();
        expect(actual).toBe(expected);
    })

    test('can set & get engine type', () => {
        actual = lamborghiniUrus.setEngineType("Petrol");
        expected = lamborghiniUrus.getEngineType();
        expect(actual).toBe(expected);
    })

}) 

// write tests for Dealership methods

describe('testing stock counting function', () => {
    
    test('can return 0 if stock is empty', () => {
        actual = myDealership.countStock();
        expected = 0;
        expect(actual).toBe(expected);
    })

    test('can count if stock present', () => {
        myDealership.getStock().push(lamborghiniUrus, McLaren720S);
        actual = myDealership.countStock();
        expected = 2;
        expect(actual).toBe(expected);
    })

})

describe('testing adding to stock function', () => {

    test('can add a car to stock', () => {
        myDealership.addStock(lamborghiniUrus);
        actual = myDealership.countStock();
        expected = 1;
        expect(actual).toBe(expected);
    })

    test('can add more than one car to stock', () => {
        myDealership.addStock(lamborghiniUrus);
        myDealership.addStock(McLaren720S);
        actual = myDealership.countStock();
        expected = 2;
        expect(actual).toBe(expected);
    })

})

describe('testing function to return all manufacturers', () => {

    test('can get array of manufacturers', () => {
        lamborghiniUrus.setManufacturer("Lamborghini");
        myDealership.addStock(lamborghiniUrus);
        myDealership.addStock(McLaren720S);
        myDealership.addStock(lamborghiniAventador);

        actual = myDealership.allManufacturers();
        expected = ["Lamborghini", "McLaren", "Lamborghini"];
        expect(actual).toEqual(expected);
    })

    test('can return undefined if no manufacturer is specified', () => {
        myDealership.addStock(lamborghiniUrus);
        myDealership.addStock(McLaren720S);
        myDealership.addStock(lamborghiniAventador);
        
        actual = myDealership.allManufacturers();
        expected = [undefined, "McLaren", "Lamborghini"];
        expect(actual).toEqual(expected);
    })

})

describe('testing function to return all cars of given manufacturer', () => {

    test('can return correct number of cars if 2 cars available', () => {
        lamborghiniUrus.setManufacturer("Lamborghini");
        myDealership.addStock(lamborghiniUrus);
        myDealership.addStock(McLaren720S);
        myDealership.addStock(lamborghiniAventador);

        lamborghiniCars = myDealership.carsByManufacturer("Lamborghini");
        actual = lamborghiniCars.length;
        expected = 2;
        expect(actual).toBe(expected);
    })

    test('can return 0 if no cars of specified manufacturer in stock', () => {
        actual = myDealership.carsByManufacturer("Ferrari").length;
        expected = 0;
        expect(actual).toBe(expected);
    })

})