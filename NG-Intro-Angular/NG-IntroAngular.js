// Part 1

angular.module('angularIntro',[]);

angular.module('angularIntro').controller('alpha', ['$scope', alphaCtrl] );

function alphaCtrl($scope) {
     $scope.greeting = 'No one tried to say a thing \
     when they took him out in jest.\
     Except, of course, the little neighbor boy, \
     who carried him to rest. \
     And he just walked along, alone, \
     With his guilt so well concealed.'

    $scope.buttonClick = function() {
        console.log("Frankie Lee & Judas Priest");
        $scope.subGreeting = "Nothing is revealed.";
    }
}

// Part 2
                                            
angular.module('angularIntro').controller('betaCtrl', [betaCtrl] ); // the function betaCtrl will
                                                                    // pass 'betaCtrl' as it's argument. 

function betaCtrl() {
    var beta = this;
   
    beta.pOne = "This is text in paragraph one.";
    
    beta.hover = function() {                           //declares a function named 'hover'
        beta.paragraphColor = { 'color': 'pink' };     //declares a property named paragraphColor with a value of an object -'color:pink'.
    };
    
    beta.exclaim = '!'
    
     beta.confirm = function() {
        var reply = confirm("Are you sure?");
        if (reply === false) {
            event.preventDefault();
            angular.element(event.target).remove();
        }
    }
// Part 3
    

}



