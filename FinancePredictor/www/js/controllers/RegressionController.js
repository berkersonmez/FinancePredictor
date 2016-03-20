(function () {
    'use strict';

    angular
        .module('starter')
        .controller('RegressionController', RegressionController);

    function RegressionController($scope) {

        $scope.labels = ["10:12", "10:13", "10:14", "10:15", "10:16", "10:17", "10:18"];
        $scope.series = ['USD/TRY Prediction'];
        $scope.data = [
            [2.8644, 2.8655, 2.8690, 2.8721, 2.8665, 2.8601, 2.8588]
        ];
    }
})();