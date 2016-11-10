(function () {
    angular.module('app.core')
        .factory('localStorageService', localStorageService);


    localStorageService.$inject = ['$q', '$localForage'];

    function localStorageService($q, $localForage) {

        var service = {
            test: test,
            setItem: setItem,
            getItem: getItem

        };

        return service;

        function test() {} //test

        function setItem(key, value) {
            //            console.log('inside localStorageService->setItem() for key'+key);

            var deferred = $q.defer();

            $localForage.setItem(key, value).then(function () {
                //                console.log(key+' Stored in local storage');
                deferred.resolve(true);
            }); //$localForage.setItem

            return deferred.promise;

        } //setItem


        function getItem(key) {

            //            console.log('inside localStorageService->getItem() for key '+key);


            var deferred = $q.defer();

            $localForage.getItem(key).then(function (data) {

                deferred.resolve(data);
                //                  console.log('key :'+key +'<-> value :'+angular.toJson(data));
            }); //$localForage.getItem



            return deferred.promise;


        } //getItem




    } //localStorageService


})();
