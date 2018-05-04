console.log('Client JS is locked and loaded');

var app = angular.module('ListApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: `views/home.html`,
        controller: "AddController as vm"
    })
    $routeProvider.when('/sale', {
        templateUrl: `views/sale.html`,
        controller: "SaleController as vm"
    })
    $routeProvider.when('/rental', {
        templateUrl: `views/rental.html`,
        controller: "RentalController as vm"
    })
        .otherwise({
            template: '<h1>404 NOT FOUND</h1>'
        })

});