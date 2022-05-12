const Reader = require("./../lib/utils/Reader")

describe("Unit Test for Reader", () => {
    test("1. prueba de reader", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        expect(explorers).not.toBeUndefined();
        console.log("OK");
    })
});