const Employee = require('../lib/Employee');

test('can instantiate employee instance', () => {
    const x = new Employee(name);
    expect(typeof(x)).toBe('object');
});

test('can set name via constructor argument', () => {
    const name = 'Jamal'
    const x = new Employee(name);
    expect(x.name).toBe(name);
});

test('can set id via constructor argument', () => {
    const id = 123
    const x = new Employee('Jamal', id);
    expect(x.id).toBe(id);
});

test('can set email via constructor argument', () => {
    const email = 'fakemail.com'
    const x = new Employee('Jamal', 1, email);
    expect(x.email).toBe(email);
});

test('can get name via getName()', () => {
    const testValue = 'Jamal'
    const x = new Employee(testValue);
    expect(x.getName()).toBe(testValue);
});

test('can get id via getId()', () => {
    const testValue = 2
    const x = new Employee('Jamal', testValue);
    expect(x.getId()).toBe(testValue);
});

test('can get email via getEmail()', () => {
    const testValue = 'test@gmail.com'
    const x = new Employee('Jamal', 2, testValue);
    expect(x.getEmail()).toBe(testValue);
});

test('can get role should return "Employee" via getRole()', () => {
    const testValue = "Employee"
    const x = new Employee('Jamal', 2, 'jamal@fakemail.com');
    expect(x.getRole()).toBe(testValue);
});