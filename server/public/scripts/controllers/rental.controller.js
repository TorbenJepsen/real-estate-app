app.controller('RentalController', ['RentalService', function (RentalService) {
    console.log('RentalController loaded');

    var self = this;

    self.lists = RentalService.list;
    self.getSale = RentalService.getSale;
    self.getSale();
    self.deleteListing = RentalService.deleteListing;
}])