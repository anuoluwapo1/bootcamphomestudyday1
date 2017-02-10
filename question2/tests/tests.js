
var myApp = require('../app/library.js');

describe("Prime number test ", function() {
  describe("Case for invalid input", function() {

    it("should return 'invalid input' for '10'", function() {
      expect(myApp.getPrimes('10')).toEqual('invalid input');
    });

    it("should return 'invalid input' for -10", function() {
      expect(myApp.getPrimes(-10)).toEqual('invalid input');
    });

    it("should return 'invalid input' for 0", function(){
      expect(myApp.getPrimes(0)).toEqual('invalid input');
    });

    it("should return 'invalid input' for null", function(){
      expect(myApp.getPrimes(null)).toEqual('invalid input');
    });

    it("should return 'invalid' for undefined", function(){
      expect(myApp.getPrimes(undefined)).toEqual('invalid input');
    });

    it("should return 'invalid' for 23.5", function(){
      expect(myApp.getPrimes(23.5)).toEqual('invalid input');
    });

  });

  describe("Case for valid input", function(){

    it("should return [2, 3, 5, 7] for 10", function(){
      expect(myApp.getPrimes(10)).toEqual([2,3,5,7]);
    });

    it("should return [2,3,5,7,11,13,17,19] for 20", function(){
      expect(myApp.getPrimes(20)).toEqual([2,3,5,7,11,13,17,19]);
    });

  });

 
});