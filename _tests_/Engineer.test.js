const Engineer = require('../lib/engineer')

describe('Engineer class', () => {
    it("should return an object containing an 'id' property when called with the 'new' keyword", () => {
        const employee = new Engineer();
        
        expect("id" in employee).toEqual(true);
    });
})

describe('.getGithub', () => {
    it('returns the github of the new employee', () => {
        const worker = new Engineer
        worker.github = 'bill.waters'

        expect(worker.getGithub()).toEqual('bill.waters')
    })
})

describe('.getRole', () => {
    it('it returns "Engineer"', () => {
        const worker = new Engineer
        expect(worker.getRole()).toEqual('Engineer')
    })
})