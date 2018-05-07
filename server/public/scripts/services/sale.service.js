app.service('SaleService', ['$http', function ($http) {
    console.log('SaleService is loaded');
    var self = this;
    self.list = {};

    self.getSale = function () {

        $http({
            method: 'GET',
            url: '/lists'
        })
            .then(function (response) {
                self.list.data = response.data;
            })
            .catch(function (error) {
                console.log('Not working', error);
            })
    };

    self.deleteListing = function (listing) {
        $http({
            method: 'DELETE',
            url: '/lists',
            params: listing
        })
            .then(function (response) {
                self.getSale();
            })
            .catch(function (error) {
                console.log('Nope Not Working', error);
            })
    }

}]);