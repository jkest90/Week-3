angular.module('Profile', [])

angular.module('Profile').controller('ctrlFunction', [ctrlFunction])

function ctrlFunction () {
    var alpha  = this;
    alpha.hideWork = false;
    alpha.hideBirthday = false;
    alpha.hideLocation = false;
    
    
    alpha.triggerWorkInput = function() {
        alpha.hideWork = !alpha.hideWork;
    }
    
    alpha.triggerBirthdayInput = function() {
        alpha.hideBirthday = !alpha.hideBirthday;
    }
    
    alpha.triggerLocationInput = function() {
        alpha.hideLocation = !alpha.hideLocation;
    }
    alpha.work = "What is your occupation?";
    alpha.birthday = "What is your birthday?";
    alpha.locations = "Where do you live?";
        
}

/*<p ng-click: "c.toggleTextBox" ng-show = "c.showP" > 
</p>
<textarea ng-click = same ng-hide = same ng-model = >*/
//ng blur can trigger an event if you lose focus from an object.e.g. clicking out of a text box. 


//   $scope.triggerNameInput = function() {
//       $scope.hideNameText = !$scope.hideNameText;
//     }