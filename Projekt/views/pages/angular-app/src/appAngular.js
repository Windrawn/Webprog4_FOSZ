var app = angular.module('TestShop', []);

app.controller('CartCtrl', ['$scope', 'ItemService', function ($scope, ItemService) {
    $scope.name = "Nev";

    //hozzaadas kosarhoz
    $scope.cart = [];
    $scope.addItem = function (item) {
        var found = false;

        $scope.cart.forEach(function (cartItem) {
            if (cartItem.id == item.id) {
                found = true;

                cartItem.amount += 1;
            }
        });

        if(!found) {
            var newItem = {
                id: item.id,
                price: item.price,
                name: item.name,
                amount: 1
            }

            $scope.cart.push(newItem);
        }
    };

    $scope.sumPrice = function () {
        var sum = 0;

        $scope.cart.forEach(function (item) {
            sum += item.price * item.amount;
        })

        return sum;
    };

    ItemService.getItems().then(
        function (response) {
            $scope.items = response.data;
        },
        function (err) {
            console.log(err);
        }
    );
}]);

app.service('ItemService', ['$http', function ($http) {
    this.getItems = function () {
        return $http({
            method: "GET",
            url: "https://kiralydavid.github.io/eloadas/db.json"
        });/*promise-el ter vissza*/
    };
}]);