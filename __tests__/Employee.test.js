const Employee = require('../lib/Employee')


test('create an employee object', () => {
    const employee = new Employee('Taylor Hernandez', 2, 'test@test.com');

    expect(employee.name).to.equal(expect.any(String));
    expect(employee.id).to.equal(expect.any(Number));
    expect(employee.email).to.equal(expect.any(String));

});