angular
    .module('app')
    .controller('ReviewController', function ($scope, $mdDialog) {
        var vm = this;

        vm.step2Ready = true;
        vm.step3Ready = true;
        vm.rating = -1;

        vm.submitStep1 = function () {
            vm.selectedIndex = 1;
        };
        vm.submitStep2 = function () {
            vm.selectedIndex = 2;
        };

        vm.submitStep3 = function () {
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('Review Submitted')
                    .textContent('You can specify some description text in here.')
                    .ariaLabel('Review Submitted')
                    .ok('Got it!')
            );
        };

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
            vm.selectedNetworks = [];
            for (var i = 0; i < vm.socialNetworks.length; i++) {
                if (vm.socialNetworks[i].status == true) {
                    vm.selectedNetworks.push(angular.copy(vm.socialNetworks[i]));
                }
            }

        }, true);
    });


