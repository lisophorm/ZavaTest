angular
    .module('app')
    .controller('ReviewController', ['$scope', function ($scope) {
        var vm = this;

        vm.step2Ready = true;
        vm.step3Ready = true;
        vm.rating = -1;

        vm.submitStep1 = function () {
            vm.step2Ready = true;
        }
        vm.submitStep2 = function () {
            vm.step3Ready = true;
        }

        /* social networks checkboxes */
        vm.selectedNetworks = [];
        vm.socialNetworks = [{
            id: 1,
            class: 'facebook',
            title: 'Facebok',
            status: false
        }, {
            id: 2,
            class: 'twitter',
            title: 'Twitter',
            status: false
        }, {
            id: 3,
            class: 'linkedin',
            title: 'Linkedin',
            status: false
        }];

        $scope.$watch('vm.socialNetworks', function (firstTeamArray) {
            console.log("change to the first team! ", JSON.stringify(firstTeamArray));
            vm.selectedNetworks = [];
            for (var i = 0; i < vm.socialNetworks.length; i++) {
                if (vm.socialNetworks[i].status == true) {
                    console.log('TROVATOOO');
                    vm.selectedNetworks.push(angular.copy(vm.socialNetworks[i]));
                }
            }

            console.log("selecto");
            console.log(vm.selectedNetworks);
        }, true);


    }]);


