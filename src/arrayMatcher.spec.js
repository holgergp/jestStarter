export const arrayProducer = (a) => {
    return [{first: a, second: '1'}, {first: a, second: '2'}, {first: a, second: '2'}];
};

describe('arrayProducer', () => {
    it('should contain first property', () => {
        const myArray = arrayProducer('1');
        myArray.forEach(m => {
            expect.objectContaining({first: '1'});
        });
        expect(myArray).toContainEqual(
            expect.objectContaining({first: '1'})
        );
        expect(myArray).not.toContainEqual(
            expect.objectContaining({first: expect.stringMatching('2')})
        );
        expect(myArray).toContainEqual(
            expect.objectContaining({first: expect.anything()})
        );
        /** expect(myArray).toContainEqual(
         expect.objectContaining({first: expect.not.stringContaining('2')})
         );**/
    });
});