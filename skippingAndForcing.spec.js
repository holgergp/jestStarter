describe.skip('surrounding describe should', () => {
        xdescribe('this describe should', () => {
            xit('not be executed', () => {
                expect(true).toBe(true);
            });
        });

        describe('this describe should', () => {
            fit('be executed', () => {
                expect(true).toBe(true);
            });
            it('not  be executed', () => {
                expect(true).toBe(true);
            });
        });

        describe.only('this describe should', () => {
            it.only('be executed', () => {
                expect(true).toBe(true);
            });
            it.skip('not  be executed', () => {
                expect(true).toBe(true);
            });
        });

        describe.skip('this describe should', () => {
            it('not  be executed', () => {
                expect(true).toBe(true);
            });
        });
    }
)
;
xtest('this test should not be executed', () => {});
test.only('this test should be executed', () => {});