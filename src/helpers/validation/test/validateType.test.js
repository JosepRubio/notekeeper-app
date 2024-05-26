import {expect,test} from "vitest";
import validateType from "../validateType";

test("validateType should return true if it's a valid type", () => {
const type = 'string'
const value = "hello"
expect(validateType(type,value)).toBe(true);
});


test("validateType should return false if isn't a valid type", () => {
    const type = 'string'
    const value = 123
    expect(validateType(type,value)).toBe(false);
    });
    
    