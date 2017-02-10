'use strict'


module.exports = {

	dataTypes : function(arg){
		if(typeof(arg) === 'string'){
			return arg.length;
		}
		else if(typeof(arg) === 'boolean'){
			return arg;
		}
		else if(arg === null || arg === undefined){
			return 'no value';
		}
		else if(typeof(arg) === 'number'){
			if( arg < 100){
				return 'less than 100';
			}
			else if(arg === 100){
				return 'equal to 100';
			}
			else{
				return 'more than 100';
			}
		}
		else if(typeof(arg) === 'object' && arg.constructor === Array){
			if( 2 in arg){
				return arg[2];
			}
			else{
				return undefined;
			}
		}
		else if(typeof(arg) === 'function'){
			return arg(true);
		}
		else{
			return 0;
		}

	}
}