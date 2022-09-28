const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Taylor Hernandez', 1, 'test@test.com', 'TayHern');

    expect(engineer.getName()).toBe('Taylor Hernandez');
    expect(engineer.getId()).toEqual((expect.any(Number)));
    expect(engineer.getEmail()).toBe('test@test.com');
    expect(engineer.getGithub()).toBe('TayHern');
    expect(engineer.getRole()).toBe('Engineer');
});