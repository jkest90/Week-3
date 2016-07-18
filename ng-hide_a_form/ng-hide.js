  angular.module('Profile', [])

  angular.module('Profile')
    .controller('UserCtrl', UserCtrl)

  function UserCtrl() {
    var alpha = this
    alpha.input = []
    alpha.newInput = []
    alpha.toggleHide = true
    alpha.input[0]= 'Name'
    alpha.input[1] = 'Bio'
    alpha.input[2] = 'Favorite Books'
    alpha.input[3] = 'Favorite JS Library'

    alpha.submitInput = function () {
      alpha.toggleHide = !alpha.toggleHide;
      alpha.input = alpha.newInput;
    }

    alpha.loadForm = function() {
      alpha.toggleHide = !alpha.toggleHide;
  }
}
 a 
// angular.module("ProfileSubmission", [])
//
// angular.module("ProfileSubmission")
//   .controller("alphaController", alphaCtrl)
//
//   function alphaCtrl() {
//     var alpha = this
//     alpha.input = []
//     alpha.newInput = []
//     alpha.toggleHide = true
//     alpha.input[0] = "Name"
//     alpha.input[1] = "Biography"
//     alpha.input[2] = "Favorite Books"
//     alpha.input[3] = "Favorite JS Libraries"
//
//     alpha.submit = function() {
//       alpha.toggleHide = !alpha.toggleHide
//       alpha.input = alpha.newInput
//     }
//
//     alpha.loadForm = function() {
//       alpha.toggleHide = !alpha.toggleHide
//     }
//   }
