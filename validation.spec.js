const validationMessage = (fieldname) => {
    return `Das Feld '${fieldname}' ist ein Pflichtfeld.`
}

describe('validationMesssage should', () => {
    it('should produce a valid message', () => {
        expect(validationMessage('Vorname')).toMatchSnapshot();
    });
});