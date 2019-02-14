const expect = require('expect');
const utils = require('./util');

describe('Utils', () => {
    it('should add two numbers', () => {
        const res = utils.add(33, 11);

        expect(res).toBe(44).toBeA('number');
    });

    it('should async add two numbers', (done) => {
        utils.asyncAdd(3, 4, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        })
    });

    it('should square a number', () => {
        const res = utils.square(8);

        expect(res).toBe(64).toBeA('number');
    });

    it('should async square a number', (done) => {
        utils.asyncSquare(3, (square) => {
            expect(square).toBe(9).toBeA('number');
            done();
        })
    });
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