(function () {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard')
        .controller('DashboardPieChartCtrl', DashboardPieChartCtrl);

    function DashboardPieChartCtrl($scope, $rootScope, $timeout, baConfig, baUtil) {

        var countRef = firebase.database().ref('crises');
        $scope.counters = {}
        countRef.on('value', function (snapshot) {
            let temp = {};
            temp.rescued = 0;
            temp.total = snapshot.val().count;
            temp.rescued = temp.total

            for (let i = 0; i < snapshot.val().open.length; i++) {
                temp.rescued -= snapshot.val().open[i].count;
            }
            console.log(temp);
            $scope.counters = temp;
            $scope.$digest();
            // $scope.available = snapshot.val().count;
            // $scope.busy = snapshot.val().count;
        });
        var pieColor = baUtil.hexToRGB(baConfig.colors.defaultText, 0.2);
        $scope.charts = [{
            color: pieColor,
            description: 'Emergency',
            stats: $scope.counters.total,
            icon: 'exclamation-circle'
        }, {
            color: pieColor,
            description: 'Rescued',
            stats: $scope.counters.rescued,
            icon: 'life-ring'
        }, {
            color: pieColor,
            description: 'Available',
            stats: '424',
            icon: 'truck'
        }, {
            color: pieColor,
            description: 'Busy',
            stats: '404',
            icon: 'refresh'
        }
        ];

        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }

        function loadPieCharts() {
            $('.chart').each(function () {
                var chart = $(this);
                chart.easyPieChart({
                    easing: 'easeOutBounce',
                    onStep: function (from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent));
                    },
                    barColor: chart.attr('rel'),
                    trackColor: 'rgba(0,0,0,0)',
                    size: 84,
                    scaleLength: 0,
                    animation: 2000,
                    lineWidth: 9,
                    lineCap: 'round',
                });
            });

            $('.refresh-data').on('click', function () {
                updatePieCharts();
            });
        }

        function updatePieCharts() {
            $('.pie-charts .chart').each(function (index, chart) {
                $(chart).data('easyPieChart').update(getRandomArbitrary(55, 90));
            });
        }

        $timeout(function () {
            loadPieCharts();
            updatePieCharts();
        }, 1000);
    }
})();