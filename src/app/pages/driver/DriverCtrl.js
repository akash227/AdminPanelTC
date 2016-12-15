/**
 * Created by Appoyy on 15/12/16.
 */
angular.module('BlurAdmin.pages.driver')
    .controller('DriverCtrl', function ($scope, fileReader, $filter) {
        $scope.driver = {};
        $scope.types = ['Ambulance',
            'Fire Engine',
            'Rescue Vehicle'];

        $scope.driver.picture = $filter('appImage')('theme/no-photo.png');
        var fileInput;
        $scope.removePicture = function () {
            $scope.driver.picture = $filter('appImage')('theme/no-photo.png');
            $scope.noPicture = true;
        };

        $scope.uploadPicture = function () {
            fileInput = document.getElementById('uploadFile');
            fileInput.click();
        };
        $scope.getFile = function () {
            fileReader.readAsDataUrl(fileInput.files[0], $scope)
                .then(function (result) {
                    $scope.driver.picture = result;
                });
        };
    });