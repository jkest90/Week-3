angular.module('PokeApp',[]);                   //modules can only take other modules

angular.module('PokeApp')                       //controllers can take other kinds of components
    .controller('PallettTown',[pallettCtrl]);    //services e.g, $http...'PallettTown' = name of controller. 
                                                //[pallettCtrl] = reference to function defined below. 
        
                                                //this exposes the module to the view. it is an arbitrary object. 
                                                //every object/function has a value of 'this'. implicitly defined.
                                                //an object that the function is attatched to, or you can manually set it.
                                                //in controller functions, 'this' starts off as an empty object, so we can start 
                                                //assigning values to it. 'this' is very similar to $scope in terms of 
                                                //exposing JS items to the view. 
                                                
    
function pallettCtrl () {                       //next define function and add ng-app directive to <html>.
    var pCtrl = this;
    pCtrl.welcomeMessage = "Gotta Catch 'em All!"; //creating a property welcomeMessage that lives on pCtrl object. 
    pCtrl.pokemon =[
        'Charmander',
        'Bulbasaur',
        'Squirtle',
        'Vegetable',
        '2Scoops',
        'Jigglypuff',
        ];
    
    pCtrl.jigglyPuff = {
        squishiness: 7,
        rage: 'irate',
        rockstar: true,
        name: 'jigglypugg'
    };
}