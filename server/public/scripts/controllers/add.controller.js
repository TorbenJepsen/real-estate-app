app.controller('AddController', ['AddService', function (AddService) {
    console.log('AddController loaded');

    var self = this;

    self.addListing = AddService.addListing;
   
}]);