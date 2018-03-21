import {stringProducer} from './stringProducer';

describe("stringProducer", () => {
  it("should prepend the given string", () => {
    const myString = stringProducer("Reactjs");
    expect(myString).toMatchSnapshot();
  });
});


