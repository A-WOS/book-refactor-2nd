import {expect} from 'chai';
import {getOrganization} from "../../src/ch7/encapsulateRecord.js";

describe('조직 데이터를 별도로 조작하지 않았을 때', () => {
    it('이름이 "애크미 구스베리" 로 나온다', () => {
        const organization = getOrganization();

        expect(organization.name).to.equal('애크미 구스베리');
    });

    it('이름을 변경할 수 있다', () => {
        const organization = getOrganization();

        organization.name = "Bell Soft Network";

        expect(organization.name).to.equal('Bell Soft Network');
    });

    it('국가가 "GB" 로 나온다', () => {
        const organization = getOrganization();

        expect(organization.country).to.equal('GB');
    });

    it('국가가 "GB" 로 나온다', () => {
        const organization = getOrganization();

        organization.country = "Korea";

        expect(organization.country).to.equal('Korea');
    });
});
