angular.module('Zordon', []); - // defines and names module.

angular.module('Zordon')
    .controller('alpha', ['$scope', alphaCtrl] );  //accesses the module, and reates a controller method called
//alpha which takes in the controller's name 'alpha', and and it's injector (an arary) containing the 
//object $scope and the function alphaCtrl(defined below) as paramaters.
//refer to 'alpha' name in HTML and $scope in JS. (?)


function alphaCtrl($scope) { //function alphaCtrl takes in the $scope object as a parameter.

    console.log('Controller is working!')
    
    $scope.greeting = 'Welcome to the Command Center!';// creating a gretting property on the scope object using dot notation. 

    $scope.subGreeting = 'Power Rangers ONLY';

    $scope.fightPutty = function() {
        $scope.subGreeting = 'Punch Noises! The putty dissappeared...'; //fightPutty 'method' because it is a function
        // $scope.subGreeting = 'Punch Noises! The putty disappeared...' //when button is clicked, updates the value of subGreeting. 
    }
}

angular.module('Zordon')
    .controller('beta', ['$scope', betaCtrl]); //creating a new controller 'beta' that accesses the module 'Zordon'.

    function betaCtrl($scope) {
    
}

angular.module('Zordon')
    .controller('betaCtrl', betaCtrl); //same as above ^ except uses "controller as" syntax. preferred syntax. 

function betaCtrl() {
    //this.beans = 'Black beans'
    
    beta.myBeans = []
    
    var beta = this
    beta.myBeans = 'Black beans'
    window.beta= beta
    beta.addBeans = function() {                     //anything that you add to your controller is available in html.
        beta.myBeans.push(beta.myFavoriteBeans)
    }                      
}
