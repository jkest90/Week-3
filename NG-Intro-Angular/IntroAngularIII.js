angular.module('AngularIII', []);

angular.module('AngularIII').controller('alphaCtrl', [alphaCtrl]);

function alphaCtrl() {
    var alpha = this;
    alpha.showPopUp = false;
    
    alpha.showPopUpFunc = function () {
        alpha.showPopUp = !alpha.showPopUp;
    }
    
    alpha.closePopUpFunc = function() {
        alpha.showPopUp = false;
    }
}
    
// angular.module('myAppThree', []);

// angular.module('myAppThree', [])
// .controller('myControllerThree', ['$scope', function($scope) {
//   $scope.showPopUp = false;

//   $scope.showPopUpFunction = function() {
//     $scope.showPopUp = !$scope.showPopUp;
//   }

//   $scope.closePopUpFunction = function() {
//     $scope.showPopUp = false;
//   }
// }]);