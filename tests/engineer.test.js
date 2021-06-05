const Engineer = require('../lib/Engineer');

test('can instantiate engineer instance', () => {
    const x = new Engineer(name);
    expect(typeof(x)).toBe('object');
});

test('can get role should return "Engineer" via getRole()', () => {
    const testValue = "Engineer"
    const x = new Engineer('Jamal', 2, 'jamal@fakemail.com', 'bluearrow27');
    expect(x.getRole()).toBe(testValue);
});