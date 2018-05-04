app.service('SaleService', ['$http', function ($http) {
    console.log('SaleService is loaded');
    var self = this;
    self.list= {data: ''};

    self.getSale =function() {

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

}]);