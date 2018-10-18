app.config(function($routeProvider){
    $routeProvider.when('/home',{
        templateUrl: 'view/home.html',
        controller: 'userController'
    });
    $routeProvider.when('/add', {
        templateUrl: 'view/novoUser.html',
        controller: 'novoUserController'
    });
    $routeProvider.otherwise({redirectTo: '/home'});
});