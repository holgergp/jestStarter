expect.extend({
    toBeValidForOrder(received) {
        const pass = received.valid;
        if (pass) {
            return {
                message: () =>
                    `expected ${received} not valid for order`,
                pass: true,
            };
        } else {
            return {
                message: () => `expected ${received} to be valid for order`,
                pass: false,
            };
        }
    },
});

describe('Item should', () => {
    it('report if valid for order', function () {
        const validItem = {
            item: 'GameBoy',
            valid: true
        };
        expect(validItem).toBeValidForOrder();
    });
    it('report if invalid for order', function () {
        const validItem = {
            item: 'Mega Drive',
            valid: false
        };
        expect(validItem).not.toBeValidForOrder();
    });
});