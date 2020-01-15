import compareNumbers from '../compareNumbers.js';

const test = QUnit.test;

test('Testing if number is identical', function(assert) {
    const shouldBeIdenticalInput = 7;
    const shouldBeIdenticalExpected = 0;
    const shouldBeIdenticalResult = compareNumbers(shouldBeIdenticalInput, 7);
    assert.equal(shouldBeIdenticalResult, shouldBeIdenticalExpected);
});

test('Testing if number is too low', function(assert) {
    const shouldBeLowInput = 7;
    const shouldBeLowExpected = -1;
    const shouldBeLowResult = compareNumbers(shouldBeLowInput, 8);
    assert.equal(shouldBeLowResult, shouldBeLowExpected);
});

test('Testing if number is too high', function(assert) {
    const shouldBeHighInput = 7;
    const shouldBeHighExpected = 1;
    const shouldBeHighResult = compareNumbers(shouldBeHighInput, 6);
    assert.equal(shouldBeHighResult, shouldBeHighExpected);
});

test('Testing if user input is valid', function(assert) {
    assert.throws(compareNumbers, Error);
});