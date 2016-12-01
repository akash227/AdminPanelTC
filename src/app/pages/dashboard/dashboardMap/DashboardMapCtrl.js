(function () {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard')
        .controller('DashboardMapCtrl', DashboardMapCtrl);

    function DashboardMapCtrl($timeout) {
        let lat, lng;

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            }
        }

        function showPosition(position) {
            lat = position.coords.latitude;
            lng = position.coords.longitude;
            var mapCanvas = document.getElementById('google-maps');
            var mapOptions = {
                center: new google.maps.LatLng(lat, lng),
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(mapCanvas, mapOptions);
        }

        $timeout(function () {
            getLocation();
        }, 100);
    }

})
();