describe('createCustomer should', () => {
    it('produce a valid customer', () => {
        const customer = {name: 'Peter', premium: true};
        expect(customer).toBeDefined();
        expect(customer.name).toEqual('Peter');
        expect(customer.name).toEqual(expect.stringContaining('ete'));
        expect(customer).toEqual(expect.objectContaining({premium: true}));
    });
});

describe('createCustomers should', () => {
    it('work with many customer', () => {
        const customers = [
            {name: 'Peter', premium: true},
            {name: 'Max', premium: false},
            {name: 'Tine', premium: true}
        ];
        expect(customers).toContainEqual({name: 'Tine', premium: true});

    });
});

expect.extend({
    toHaveAtLeastTimesPremium(received, argument) {
        const pass = received.filter(r => r.premium).length >= argument;
        if (pass) {
            return {
                message: () => `expected ${received} to have less premium customers`,
                pass: true,
            };
        } else {
            return {
                message: () => `expected ${received} to have more premium customers`,
                pass: false,
            };
        }
    },
});

describe('createCustomers should', () => {
    it('be testable with custom matcher', () => {
        const customers = [
            {name: 'Holger', premium: true},
            {name: 'Max', premium: false},
            {name: 'Tine', premium: true}
        ];
        expect(customers).toHaveAtLeastTimesPremium(2);
    });
});