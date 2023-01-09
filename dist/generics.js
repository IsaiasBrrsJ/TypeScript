"use strict";
const returnValue = (values) => values; // Tipos genericos
const message = returnValue('Hello World');
const count = returnValue(5);
function getFirstValueFromArray(array) {
    return array[0];
}
const firstValueFromStringArray = getFirstValueFromArray(['1', '2']);
const firstValueFromNumberArray = getFirstValueFromArray([10, 20]);
//promises
const returnPromise = async () => {
    return 5;
};
//classes
class GenericNumber {
    zeroValue;
    sum;
    constructor(zeroValue, sum) {
        this.zeroValue = zeroValue,
            this.sum = sum;
    }
}
const myGenericNumber = new GenericNumber(0, (x, y) => {
    return x + 1;
});
