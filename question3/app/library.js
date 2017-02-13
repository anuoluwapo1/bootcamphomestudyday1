'use strict'


class Employees{

	constructor(){
		this.firstName = '';
		this.lastName = '';
		this.age = 0;
		this.minSalary = 0;
	}

	setName(firstName, lastName){
		if(typeof(firstName) !== 'string' || typeof(lastName) !== 'string'){
			return 'invalid name';
		}
		this.firstName = firstName;
		this.lastName = lastName;
	}

	setAge(empAge){
		if(!isNaN(empAge) || !Number.isInteger(empAge)){
			return 'invalid age';
		}
		this.age = empAge;
	}

	setMinimumSalary(empType, gradeLevel){
		if(empType === 'Permanent'){
			if(gradeLevel <= 7){
				this.minSalary = 100000.00;
			}
			else if(gradeLevel >= 8 && gradeLevel <= 10){
				this.minSalary = 150000.00;
			}
			else if(gradeLevel >= 11 && gradeLevel <=15){
				this.minSalary = 200000.00;
			}
			else{
				this.minSalary = 250000.00;
			}
			
		}
		else if(empType === 'Contract' && gradeLevel == 7){
			if(gradeLevel <= 7){
				this.minSalary = 50000.00;
			}
			else if(gradeLevel >= 8 && gradeLevel <= 10){
				this.minSalary = 100000.00;
			}
			else if(gradeLevel >= 11 && gradeLevel <=15){
				this.minSalary = 150000.00;
			}
			else{
				this.minSalary = 200000.00;
			}
		}
		else{
			return 0;
		}
	}

	isManager(empType, salary){
		if(empType === 'Permanent' && salary >= 175000.00){
			return true;
		}
		else if(empType === 'Contract' && salary >= 125000.00){
			return true;
		}
		else{
			return false;
		}
	}

} 

module.exports  = {
	Employees : Employees
}