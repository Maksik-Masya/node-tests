const utils = require('./util');

it('should add two numbers', () => {
    const res = utils.add(33, 11);

    if (res !== 44) {
        throw new Error(`Expected 44, but was ${res}`);
    }
});

it('should count a square', () => {
    const res = utils.square(8);

    if (res !== 64) {
        throw new Error(`Expected 64, but was ${res}`);
    }
});