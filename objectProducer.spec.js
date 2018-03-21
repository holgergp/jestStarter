import {objectProducer, arrayProducer} from './objectProducer';

describe('object producer should', () => {
    it('produce an object', () => {
        const object = objectProducer(1);
        expect(object).toBeDefined();
        expect(object.booleanProperty).toBe(false);
        expect(object.stringProperty).toEqual('test1');
        expect(object.stringProperty).toEqual(expect.stringContaining('est'));
        expect(object).toEqual(expect.objectContaining({booleanProperty: false}));
    });
});

describe('array producer should', () => {
    it('produce an array', () => {
        const array = arrayProducer();
        expect(array).toContainEqual({stringProperty: 'test2', booleanProperty: true});
    });
});

expect.extend({
    arrayLengthDivisibleBy(received, argument) {
        const pass = received.length % argument == 0;
        if (pass) {
            return {
                message: () =>
                    `expected ${received} not to be divisible by ${argument}`,
                pass: true,
            };
        } else {
            return {
                message: () => `expected ${received} to be divisible by ${argument}`,
                pass: false,
            };
        }
    },
});

describe('array producer should', () => {
    it('produce an array with even number', () => {
        const array = arrayProducer();
        expect(array).arrayLengthDivisibleBy(2);
    });
});