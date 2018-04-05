import {
    objectCaller,
    objectCallerAndReturner
} from './mockable';

describe('ObjectCaller should', () => {
    it('call colaborator', () => {
        const collaborator = {
            fire: jest.fn()
        };
        objectCaller(collaborator);
        expect(collaborator.fire).toHaveBeenCalled();
        expect(collaborator.fire).toHaveBeenCalledTimes(3);
        expect(collaborator.fire).lastCalledWith('3');
        expect(collaborator.fire).toHaveBeenCalledWith('2');
        expect(collaborator.fire.mock.calls[1][0]).toBe('2');
    });

    it('return data from colaborator', () => {
        const collaborator = {
            trigger: jest.fn().mockReturnValue('22')
        };
        objectCallerAndReturner(collaborator);
        expect(collaborator.trigger()).toBe('22');
    });
});
