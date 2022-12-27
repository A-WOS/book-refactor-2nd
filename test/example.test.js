import {createRequire} from "module";
import {expect} from 'chai';

const require = createRequire(import.meta.url);
const assert = require('assert');

describe('Node.js 기본 assertion 예제', () => {
    it('Bell 은 Bell 이다', () => {
        assert.equal('Bell', 'Bell');
    });

});

describe('Chai assertion 예제', () => {
    it('Bell 은 Bell 이다', () => {
        expect('Bell').to.equal('Bell');
    });
});
