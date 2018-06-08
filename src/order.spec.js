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

describe('showProductStatus should', () =>
    it('return an appropriate answer if product is available', () => {
        const product = {
            isAvailable: jest.fn().mockReturnValue(true)
        };
        const productStatus = showProductStatus(product);
        expect(productStatus).toBe('Das Produkt ist verfügbar :)');
    })
);

export function showProductStatus(product) {
    const messagePrefix = 'Das Produkt';
    return product.isAvailable()
        ? `${messagePrefix} ist verfügbar :)`
        : `${messagePrefix} ist nicht verfügbar :(`;
}

export function placeOrder(product, qty, seasonId) {
    if (product.isAvailable(seasonId)) {
        product.order(qty);
    }
}

describe('placeOrder should', () =>
    it('order an available product', () => {
        const product = {
            isAvailable: jest.fn().mockReturnValue(true),
            order: jest.fn()
        };
        placeOrder(product, 2, 'SOMMER');
        expect(product.order).toHaveBeenCalled();
        expect(product.order).toHaveBeenCalledTimes(1);
        expect(product.order).lastCalledWith(2);
        expect(product.order).toHaveBeenCalledWith(2);
    })
);