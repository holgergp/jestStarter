export const objectProducer = (index) => ({
    booleanProperty: (index % 2) === 0,
    stringProperty: 'test' + index
});


export function arrayProducer() {
    return [objectProducer(1), objectProducer(2), objectProducer(3),objectProducer(4)];
}