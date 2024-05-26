import {expect,test} from 'vitest'
import validateNonEmpty from "../validateNonEmpty"

test('validateNonEmpty should return true if given value is not empty',()=>{
    expect(validateNonEmpty('hello')).toBe(true);
})


test('validateNonEmpty should return false if given value is empty',()=>{
    expect(validateNonEmpty('')).toBe(false);
})