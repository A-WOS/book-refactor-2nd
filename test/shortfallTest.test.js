describe('province', function() {
    it('shortfall', function () {
        const asia = new Province(sampleProvinceData());    // 픽스처 설정
        assert.equal(asia.shortfall, 5);    // 검증
    });
});