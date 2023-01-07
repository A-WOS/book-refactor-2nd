import {expect} from 'chai';
import {priceOrder} from "../../src/ch6/splitPhase.js";

describe('기본적인 주문 정보가 있을 때', () => {
    const product = {basePrice: 10, discountThreshold: 2, discountRate: 0.1};
    const quantity = 3;
    const shippingMethod = {discountThreshold: 1, discountedFee: 1, feePerCase: 1};

    it('주문 가격을 조회하면 정상적으로 반환된다.', () => {
        const price = priceOrder(product, quantity, shippingMethod);

        expect(price).to.equal(32);
    });
});
