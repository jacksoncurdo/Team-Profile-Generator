const Manager = require('../lib/Manager');

test('can instantiate manager instance', () => {
    const x = new Manager(name);
    expect(typeof(x)).toBe('object');
});

test('can get role should return "Manager" via getRole()', () => {
    const testValue = "Manager"
    const x = new Manager('Nikola', 1, 'nikola@gmail.com');
    expect(x.getRole()).toBe(testValue);
});