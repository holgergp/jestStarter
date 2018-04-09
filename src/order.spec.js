export function bulkOrder(product) {
    product.order(1);
    product.order(2);
    product.order(3);
}

describe('bulkOrder should', () => {
    it('order products', () => {
        const product = {
            order: jest.fn()
        };
        bulkOrder(product);
        expect(product.order).toHaveBeenCalled();
        expect(product.order).toHaveBeenCalledTimes(3);
        expect(product.order).lastCalledWith(3);
        expect(product.order).toHaveBeenCalledWith(2);
        expect(product.order.mock.calls[1][0]).toBe(2);
    });
});

export function checkAvailability(product) {
    doSomething();
    return product.isAvailable();
}

const doSomething = () => {
    //important stuff
}

it('bulkCheck for availability', () => {
    const product = {
        isAvailable: jest.fn().mockReturnValue(true)
     };
    checkAvailability(product);
    expect(product.isAvailable()).toBe(true);
});
