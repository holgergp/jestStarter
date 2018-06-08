const customer = {
    placeOrder: () => true,
    checkQty: () => 1
};

describe('Customer', () => {
    beforeEach(() => {});

    describe('placeOrder should', () => {
        beforeEach(() => {});
        it('be valid', () => {
            expect(customer.placeOrder()).toBe(true);
        });
    });

    describe('checkQty should', () => {
        beforeEach(() => {});
        it('be valid', () => {
            expect(customer.checkQty()).toBe(1);
        });
    });
});