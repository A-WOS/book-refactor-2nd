function findMiscreant() {
    // 생략 (중요하지 않은 코드)
    checkForMiscreants(people);

    // 생략

    function checkForMiscreants(people) {
        if (people.some(p => ["조커", "사루만"].includes(p))) sendAlert();
    }
}
