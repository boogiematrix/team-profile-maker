const Employee = require('../lib/employee');

describe('.getName', () => {
    it('returns the name of the new employee', () => {
        let worker = new Employee;
        worker.name = 'bill';

        expect(worker.getName()).toEqual('bill')
    })
})

describe('.getId', () => {
    it('returns the ID of the new employee', () => {
        let worker2 = new Employee;
        worker2.id = '10';
        expect(worker2.getId()).toEqual('10')
    })
})

describe('.getEmail', () => {
    it('returns the email of the new employee', () => {
        let worker3 = new Employee;
        worker3.email = 'bob@gmail.com';
        expect(worker3.getEmail()).toEqual('bob@gmail.com')
    })
})

describe('.getRole', () => {
    it('it returns "Employee"', () => {
        let worker = new Employee;

        expect(worker.getRole()).toEqual('Employee')
    })
})