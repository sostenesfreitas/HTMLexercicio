
angular.module('cartApp', [])

	   .controller('CartController',['$scope', function ($scope){
		   
			   $scope.products = [{description: 'melao',
                                               price: 10,
                                               qnt:1}];
		   
		   
				  
		   $scope.getTotal = function(){
			    var total = 0;
				angular.forEach($scope.products, function(p){
					total+=(p.price*p.qnt);
				});
				return total;
		   };
		   
		   $scope.addProduct = function(){
			   $scope.products.push({description: $scope.prodName, 
									 price: $scope.prodPrice,
									 qnt: $scope.prodQtd
									 });
			   
			   $scope.prodName = '';
			   $scope.prodPrice = '';
			   $scope.prodQtd = '';
		   };
                  
 		$scope.maxValue = function(){
		var maior = 0;
		angular.forEach($scope.products, function(m){
                 if(maior < Math.max(m.price))
			maior = Math.max(m.price)
		});
			return maior;
   	};
	$scope.minValue = function(){
		var menor = 9999999999;
		angular.forEach($scope.products, function(m){
                 if(menor > Math.min(m.price))
			menor = Math.min(m.price)
		});
			return menor;
   	};

}]);

