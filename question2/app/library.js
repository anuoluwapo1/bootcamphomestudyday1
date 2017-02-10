'use strict'


module.exports = {

	getPrimes : function(number){

		if(isNaN(number)){
			return 'invalid input';
		}
		else if(number <= 0){
			return 'invalid input';
		}
		else if(number === null || number === undefined){
			return 'invalid input';
		}
		else if(Number.isInteger(number) == false){
			return 'invalid input';
		}
		else{
			var primeNumbers = []; 
			var nextNumber = 2;
			while(nextNumber < number){
				if(this.isPrime(nextNumber)){
		 	 		primeNumbers.push(nextNumber);
				}
				nextNumber++;
	  		}
	  		return primeNumbers;
		}
		
	},
	isPrime : function(nextNumber){
		var start = 2;
	    while (start <= Math.sqrt(nextNumber)) {
	        if (nextNumber % start++ < 1) return false;
	    }
		return nextNumber > 1;
	}

}