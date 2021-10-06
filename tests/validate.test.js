const validate = require('../validate');

test('processRequest - Validate undefined input - Should Return Error Message ', () => {
    const result = validate.processRequest(undefined);
    expect(result).toBe('{\"errorMessage\":\"Invalid Input Request or Missing Mandatory Element \'inputs\'\"}');
});

test('processRequest - Validate valid Input - No messages', () => {
    const result = validate.processRequest([1,2,3,4,5]);
    expect(result).toBeUndefined();
});