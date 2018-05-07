app.service('AddService', ['$http', function ($http) {
    console.log('AddService is loaded');
    var self = this;

    self.addListing = function (newListing) {
        $http({
            method: 'POST',
            url: '/lists',
            data: newListing
        })
            .then(function (response) {
                console.log(response);
            })
    }
}]);