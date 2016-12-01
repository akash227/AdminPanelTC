/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.theme.components')
        .controller('MsgCenterCtrl', MsgCenterCtrl);

    /** @ngInject */
    function MsgCenterCtrl($scope, $sce) {
        $scope.users = {
            0: {
                name: 'Akhil',
            },
            1: {
                name: 'Akash',
            },
            2: {
                name: 'Loki',
            }

        };

        $scope.notifications = [
            {
                image: 'assets/img/app/profile/Andrey.png',
                userId: 0,
                template: '&name needs a rescue vehicle.',
                time: '1 min ago'
            },
            {
                image: 'assets/img/app/profile/Alexander.png',
                userId: 1,
                template: '&name needs an ambulance.',
                time: '2 hrs ago'
            },


            {
                image: 'assets/img/app/profile/Vlad.png',
                userId: 2,
                template: '&name is stuck in a firezone',
                time: '2 days ago'
            }

        ];

        $scope.messages = [
            {
                userId: 3,
                text: 'After you get up and running, you can place Font Awesome icons just about...',
                time: '1 min ago'
            },
            {
                userId: 0,
                text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
                time: '2 hrs ago'
            },
            {
                userId: 1,
                text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
                time: '10 hrs ago'
            },
            {
                userId: 2,
                text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
                time: '1 day ago'
            },
            {
                userId: 3,
                text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
                time: '1 day ago'
            },
            {
                userId: 1,
                text: 'Need some support to reach your goals? Apply for scholarships across a variety of...',
                time: '2 days ago'
            },
            {
                userId: 0,
                text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
                time: '1 week ago'
            }
        ];

        $scope.getMessage = function (msg) {
            var text = msg.template;
            if (msg.userId || msg.userId === 0) {
                text = text.replace('&name', '<strong>' + $scope.users[msg.userId].name + '</strong>');
            }
            return $sce.trustAsHtml(text);
        };
    }
})();