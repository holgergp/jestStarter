import {add} from './add';

describe('add', () => {
    beforeEach(() => {});
    afterEach(() => {});
    beforeAll(() => {});
    afterAll(() => {});

    it('should compute the sum', () => {
        expect(add(1, 2)).toBe(3);
    });
});

test('should compute the sum', () => {
    expect(add(1, 2)).toBe(3);
});
