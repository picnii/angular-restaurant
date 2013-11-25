var app = angular.module('restaurant',[]);

//Routing
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/', {templateUrl: 'pages/home.html',   controller: HomeCtrl}).
        when('/foods', {templateUrl: 'pages/foods.html',   controller: FoodCtrl}).
        when('/drinks', {templateUrl: 'pages/foods.html',   controller: DrinkCtrl}).
        when('/foods/:food_name', {templateUrl: 'pages/food-unit.html',   controller: FoodUnitCtrl}).
        when('/drinks/:food_name', {templateUrl: 'pages/food-unit.html',   controller: FoodUnitCtrl}).
        when('/order', {templateUrl: 'pages/order.html',   controller: OrderCtrl}).
		otherwise({redirectTo: '/'});
}]);


//Filter
/*app.filter('greeting', function(){
	return function(input){
		return "Hello " + input;
	}
})
*/