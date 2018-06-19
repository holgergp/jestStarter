import {processOrders} from './orderProcessor';

jest.mock('./3rdParty/orderRemoteService', () => {
    const getOrdersFromRemoteMock = () => {
        return {
            orders: [{id: 1, description: 'TestOrder1'}, {id: 2, description: 'TestOrder2'}]
        };
    };
    return {
        getOrdersFromRemote: getOrdersFromRemoteMock
    };
});

describe('orderProcessor should', () => {
    it('work with returned orders', () => {
        const data = processOrders();
        expect(data).toEqual([1, 2]);
    });
});
