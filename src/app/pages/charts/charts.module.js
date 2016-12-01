(function () {
    'use strict';

    angular.module('BlurAdmin.pages.charts', [
        'BlurAdmin.pages.charts.amCharts'
    ])
        .config(routeConfig);

    function routeConfig($stateProvider) {
        $stateProvider
            .state('charts', {
                url: '/stats',
                templateUrl: 'app/pages/charts/amCharts/charts.html',
                title: 'Statistics',
                sidebarMeta: {
                    icon: 'ion-stats-bars',
                    order: 0
                },
            });
    }

})();
