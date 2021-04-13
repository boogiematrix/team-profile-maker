const Intern = require('../lib/intern')

describe('Intern class', () => {
    it("should return an object containing an 'id' property when called with the 'new' keyword", () => {
        const employee = new Intern();

        expect("id" in employee).toEqual(true);
    });
})

describe('.getSchool', () => {
    it('returns the school of the new employee', () => {
        const worker = new Intern(school = 'carleton')

        expect(worker.getSchool()).toEqual('carleton')
    })
})

describe('.getRole', () => {
    it('it returns "Intern"', () => {
        expect(new Intern.getRole()).toEqual('Intern')
    })
})