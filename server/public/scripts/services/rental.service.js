app.service('RentalService', ['$http', function ($http) {
    console.log('RentalService is loaded');
    var self = this;
    self.list= {data: ''};

    self.getSale =function() {

        $http({
            method: 'GET',
            url: '/rents'
        })
        .then(function (response) {
            self.list.data = response.data;
        })
        .catch(function (error) {
            console.log('Not working', error);
        })
    };

    self.deleteListing = function(listing) {
        $http({
            method: 'DELETE',
            url: '/lists',
            params: listing
        })
        .then( function (response) {
            self.getSale();
        })
        .catch(function (error) {
            console.log('Nope Not Working', error);
        })
    }

}]);