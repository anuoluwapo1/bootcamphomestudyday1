  
'use strict';


var myApp = require('../app/library.js');

describe("Employees class: determine the kind of employee", function() {

  it("The emp should be a type of `object`, and an instance of the `Employee` class", function() {
    var emp = new myApp.Employees();
    expect(typeof emp).toEqual(typeof {});
    expect(emp instanceof myApp.Employees).toBeTruthy();
  });

  it("The Employee with first name 'Ade' and last name 'Emmanuel' should return 'Ade Emmanuel'", function() {
      var emp = new myApp.Employees();
      emp.setName('Ade', 'Emmanuel');
      expect(emp.firstName + " " + emp.lastName).toEqual('Ade Emmanuel');
  });

  it("Trying to set name that is not a string should return 'invalid name'", function() {
      var emp = new myApp.Employees();
      expect(emp.setName(1,2)).toEqual('invalid name');
  });

  it("Trying to set age that is not an integer return 'invalid age'", function() {
      var emp = new myApp.Employees();
      expect(emp.setAge('twenty')).toEqual('invalid age');
  });

  it("Minimum Salary for Permanent staffs should return 10000.00", function() {
      var emp = new myApp.Employees();
      emp.setMinimumSalary("Permanent", 9);
      expect(emp.minSalary).toEqual(150000.00);
  });

  it("A Permanent staff with salary 150000.00 is a manager should return false", function() {
      var emp = new myApp.Employees();
      var isManager = emp.isManager("Permanent", 150000.00);
      expect(isManager).toEqual(false);
  });

  it("A Contract staff with salary 150000.00 is a manager should return true", function() {
      var emp = new myApp.Employees();
      var isManager = emp.isManager("Contract", 150000.00);
      expect(isManager).toEqual(true);
  });

});