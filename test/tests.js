const test = QUnit.test;

function add(x, y) {
    return x + y;
}

/*
    In: 4, 3
    Out: 7
*/

function subtract(x, y) {
    return x - y;
}

/*
    In: 7, 3
    Out: 4
*/

test('add function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 4;
    const y = 3;
    const expected = 7;

    //Act 
    // Call the function you're testing and set the result to a const
    const sum = add(x, y);

    //Assert
    // Make assertions about what is expected valid result
    // actual, expected
    assert.equal(sum, expected);
});

test('subtract function', function(assert) {
    // arrange
    const x = 7;
    const y = 3;
    const expected = 4;

    // act
    const difference = subtract(x, y);

    // assert
    assert.equal(difference, expected);
});

function getNumbers(upTo) {
    const numbers = [];
    for(let i = 1; i <= upTo; i++) {
        numbers.push(i);
    }
    return numbers;
}

test('getNumbers function', function(assert) {
    // arrange
    const upTo = 5;
    const expected = [1, 2, 3, 4, 5];

    // act
    const numbers = getNumbers(upTo);

    //assert
    assert.deepEqual(numbers, expected);
});
