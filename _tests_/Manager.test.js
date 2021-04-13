const Manager = require('../lib/manager')

describe('Manager class', () => {
    it("should return an object containing an 'id' property when called with the 'new' keyword", () => {
        const employee = new Manager();

        expect("id" in employee).toEqual(true);
    });
})

describe('.getRole', () => {
    it('it returns "Manager"', () => {
        const worker = new Manager;
        expect(worker.getRole()).toEqual('Manager')
    })
})