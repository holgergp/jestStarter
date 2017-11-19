const add = (a, b) => {
    return a + b;
}

describe('add' ,() => {
    it('should compute the sum', () => {
        expect(add(1,2)).toBe(3);
    });
});