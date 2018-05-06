app.controller('SaleController', ['SaleService', function (SaleService) {
    console.log('SaleController loaded');

    var self = this;

    self.lists = SaleService.list;
    self.getSale = SaleService.getSale;
    self.getSale();
    self.deleteListing = SaleService.deleteListing;
}])