// write tests to access properties in the Car object

const carDealership = require('./car_dealership.js')

let lamborghiniUrus;
let McLaren720S;
let myDealership;

beforeEach( () => {
    lamborghiniUrus = new carDealership.Car();
    McLaren720S = new carDealership.Car("McLaren", 315000, "Petrol");
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


