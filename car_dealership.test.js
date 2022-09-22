// write tests to access properties in the Car object

const carDealership = require('./car_dealership.js')

const lamborghiniUrus = new carDealership.Car();

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