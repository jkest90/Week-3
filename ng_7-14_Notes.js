angular.module('CakeApp', [])

angular.module('CakeApp').factory('CheeseakeFactory', CheesecakeFactory)
angular.module('CakeApp').controller('MenuController', MenuController) 
angular.module('CakeApp').controller('MenuOrderController', ['CheesecakeFactory',MenuOrderController]) //injecting CheesecakeFactory factory into MenuOrderController.

angular.module('CakeApp')
	.factory('CheesecakeFactory', CheesecakeFactory)

function CheesecakeFactory() {
    console.log('MenuOrderController:CheesecakeFactory', CheesecakeFactory)

    var menuItems = [{
        name: 'Egg Roll',
        calories: 6000,
        deliciousness: 3,
        flavor: 'Southwestern',
        price: 50
    },{
        name: 'Strawberry Cheesecake',
        calories: 1500,
        deliciousness: 9,
        flavor: 'Vanilla',
        price: 9.95
    },{
        name: 'Turtle Cheesecake',
        calories: 1800,
        deliciousness: 10,
        flavor: 'Chocolate Tutrle',
        price: 13
    }]
    
    
    return menuItems: menuItems
    title: M//in order to get data from factory, we MUST return it within the function to share it with your controllers. can return anything.  
}
function MenuController() {
    console.info('MenuController loaded')
}

function MenuOrderController() {
    console.info('MenuOrderController loaded')
}