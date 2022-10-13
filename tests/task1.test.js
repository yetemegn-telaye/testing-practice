const stringLength = require('../Js/task1')

test('counting charachters in a string',()=>{
    expect(stringLength("qqqqq")).toBe(5);
    expect(stringLength("")).toBe(undefined);
    expect(stringLength("sdfsdfsdfsdfsdfsdfsd")).toBe(undefined);
});