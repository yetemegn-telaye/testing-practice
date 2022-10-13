const capitalize= require('../Js/task4');

test("string is capitalized",()=>{
    expect(capitalize("abc")).toBe("Abc");
    expect(capitalize(2)).toBe("Not a string");
})