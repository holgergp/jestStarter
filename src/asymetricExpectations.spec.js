describe('Our object should', function () {
    it('contain someProperty', function () {
        const someObject = {
            someProperty: 'property',
            valid: true,
            complex: {}
        };
        expect(someObject).toEqual(expect.objectContaining({someProperty: 'property'}));
    });
});