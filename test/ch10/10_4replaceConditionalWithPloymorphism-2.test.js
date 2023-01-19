import {expect} from 'chai';
import {rating} from "../../src/ch10/10_4replaceConditionalWithPloymorphism-2.js";

describe('항해 정보가 제공됬을 때 ', () => {
    const voyage = {zone: "서인도", length: 10};
    const history = [
        {zone: "동인도", profit: 5},
        {zone: "서인도", profit: 15},
        {zone: "중국", profit: -2},
        {zone: "서아프리카", profit: 7},
    ];

    it('등급을 조회하면 정상적으로 반환된다.', () => {
        expect(rating(voyage, history)).equal("B");
    });
});
