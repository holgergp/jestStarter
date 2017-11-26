import { stringProducer } from "./foo";

describe('stringProducer', () => {
    it('should prepend the given string', () => {
        const myString = stringProducer('Reactjs');
        expect(myString).toMatchSnapshot();
    });
});