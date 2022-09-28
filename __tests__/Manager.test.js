const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Marie Sommers', 1, 'gravity@test.com', '07');

    expect(manager.getName()).toBe('Marie Sommers');
    expect(manager.getId()).toEqual(1);
    expect(manager.getEmail()).toBe('gravity@test.com');
    expect(manager.getOfficeNum()).toBe('07');
    expect(manager.getRole()).toBe('Manager');
});