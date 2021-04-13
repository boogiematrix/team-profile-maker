const Employee = require('../lib/employee');

describe('.getName', () => {
    it('returns the name of the new employee', () => {
        const worker = new Employee(name = 'bill')

        expect(worker.getName()).toEqual('bill')
    })
})

describe('.getId', () => {
    it('returns the ID of the new employee', () => {
        const worker = new Employee(id = 10)

        expect(worker.getId()).toEqual(10)
    })
})

describe('.getEmail', () => {
    it('returns the email of the new employee', () => {
        const worker = new Employee(email = 'bob@gmail.com')

        expect(worker.getEmail()).toEqual('bob@gmail.com')
    })
})

describe('.getRole', () => {
    it('it returns "Employee"', () => {

        expect(new Employee.getRole()).toEqual('Employee')
    })
})