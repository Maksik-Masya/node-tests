const expect = require('expect');
const utils = require('./util');

it('should add two numbers', () => {
    const res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
});

it('should count a square', () => {
    const res = utils.square(8);

    expect(res).toBe(64).toBeA('number');
});

it('should set firstName and lastName to the user object', () => {
    const user = { age: 27, location: 'Ukraine' };
    const res = utils.setName(user, 'Max B');

    expect(res).toInclude({
       firstName: 'Max',
       lastName: 'B'
    }).toBeA('object');
});

// it('expect some value should be', () => {
//    // expect(12).toNotBe(11);
//    // expect({ name: "Max" }).toNotEqual({ name: "max" });
//    // expect([1, 2, 3]).toExclude(4);
//
//     expect({
//         name: 'Max',
//         age: 27,
//         location: 'Ukraine'
//     }).toInclude({
//         name: 'Max'
//     });
//
// });