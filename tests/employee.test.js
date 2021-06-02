const Employee = require('../lib/Employee');

test('can instantiate employee instance', () => {
    const x = new Employee(name);
    expect(typeof(x)).toBe('object');
});

test('can set name via constructor argument', () => {
    const name = 'Giovany'
    const x = new Employee(name);
    expect(x.name).toBe(name);
});

test('can set id via constructor argument', () => {
    const id = 123
    const x = new Employee('Foo', id);
    expect(x.id).toBe(id);
});

test('can set email via constructor argument', () => {
    const email = 'test@gmail.com'
    const x = new Employee('Foo', 1, email);
    expect(x.email).toBe(email);
});

test('can get name via getName()', () => {
    const testValue = 'Keith'
    const x = new Employee(testValue);
    expect(x.getName()).toBe(testValue);
});

test('can get id via getId()', () => {
    const testValue = 1
    const x = new Employee('Keith', testValue);
    expect(x.getId()).toBe(testValue);
});

test('can get email via getEmail()', () => {
    const testValue = 'test@gmail.com'
    const x = new Employee('Keith', 1, testValue);
    expect(x.getEmail()).toBe(testValue);
});

test('can get role should return "Employee" via getRole()', () => {
    const testValue = "Employee"
    const x = new Employee('Keith', 1, 'test@gmail.com');
    expect(x.getRole()).toBe(testValue);
});