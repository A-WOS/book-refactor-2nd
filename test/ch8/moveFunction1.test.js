import {expect} from 'chai';
import {trackSummary} from "../../src/ch8/moveFunction1.js";

describe('두 지점이 주어졌을 때', () => {
    const newYork = {
        lat: 40.73061,
        lon: -73.935242
    };

    const seoul = {
        lat: 37.532600,
        lon: 127.024612
    };

    it('두 점 간의 거리', () => {
        expect(trackSummary([newYork, seoul])).to.eql({
            time: 60,
            distance: 6869.613576276683,
            pace: 0.0001455685955107242,
        });
    });
});
