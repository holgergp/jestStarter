describe('Our array should', function () {
    it('contain someProperties', function () {
        const someArray = [{property: '1'}, {property: '2', test: true}];
        expect(someArray).toMatchObject([{property: '1'}, {property: '2'}]);
    });
});