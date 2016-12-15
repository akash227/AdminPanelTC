(function () {
    'use strict';

    angular.module('BlurAdmin.pages.driver', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('driver', {
                url: '/driver',
                templateUrl: 'app/pages/driver/driver.html',
                title: 'Add Driver',
                controller: 'DriverCtrl',
                sidebarMeta: {
                    order: 1,
                    icon: 'ion-plus-circled'
                },
            });
    }

})();
