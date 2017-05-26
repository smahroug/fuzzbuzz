angular.module('fuzzbuzzHomeService', [])

.factory('homeService', function($http,$log){
	
		
		var calculateFuzzBuzz = function(fuzzBuzzNumber){
			// Angular $http() and then() both return promises themselves 
	        return $http({method:"GET", url:"api/calculate/"+fuzzBuzzNumber}).then(function(result){

	            // What we return here is the data that will be accessible 
	            // to us after the promise resolves
	            return result.data;
	        });
			
		};
	
	return { calculateFuzzBuzz: calculateFuzzBuzz };
	
	//'api/calculate/'+fuzzBuzzNumber
	
});


