const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Natalie Paquette', 1, 'nataliep@test.com', 'Olympus University');

    expect(intern.getName()).toBe('Natalie Paquette');
    expect(intern.getId()).toEqual((expect.any(Number)));
    expect(intern.getEmail()).toBe('nataliep@test.com');
    expect(intern.getSchool()).toBe('Olympus University');
    expect(intern.getRole()).toBe('Intern');
});