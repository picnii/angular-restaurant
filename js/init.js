//uncomment to do initial and set $rootScope
app.run(function($rootScope) {
	$rootScope.menus = [];
	$rootScope.menus['home'] = {name:"Home", url:"#/", class:"active"};
	$rootScope.menus['foods'] = {name:"Foods", url:"#/foods", class:""};
	$rootScope.menus['drinks'] = {name:"Drinks", url:"#/drinks", class:""};
	$rootScope.menus['order'] = {name:"Order", url:"#/order", class:""};

	$rootScope.changeMenu = function(menu)
	{
		$rootScope._unActiveMenu();
		$rootScope.menus[menu].class="active"
	}

	$rootScope._unActiveMenu = function()
	{
		for(var i in $rootScope.menus)
		{
			$rootScope.menus[i].class = "";
		}
	}

});
