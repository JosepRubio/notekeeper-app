import {expect,test} from "vitest";
import validateEnum from "../validateEnum";

test('validateEnum should retrn true if the value is included in the given enum',() => {
   const enumArray = [1,2,3]; 
   const value = 1;
    expect(validateEnum(value,enumArray)).toBe(true);
})

test('validateEnum should retrn false if the value is not included in the given enum',() => {
    const enumArray = [1,2,3]; 
    const value = 4;
     expect(validateEnum(value,enumArray)).toBe(false);
 })