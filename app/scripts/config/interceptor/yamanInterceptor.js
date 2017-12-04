angular
  .module("quitandaApp")
  .factory("yamanAppInterceptor", yamanAppInterceptor);

yamanAppInterceptor.$inject = ['$injector', '$q', 'configValue', '$rootScope'];
function yamanAppInterceptor($injector, $q, configValue, $rootScope) {
  		return {
         request: function (config) {
            function endsWith(str, suffix) {
                return str.indexOf(suffix, str.length - suffix.length) !== -1;
            }
            var baseUrlPath = "";
            if(config.url.startsWith("/"))
                config.url = config.url.substring(1);

            $injector.invoke(['configValue', function (configValue) {
                baseUrlPath = configValue.baseUrl;
            }]);


            if (!endsWith(config.url, '.html')) {        
                config.url = baseUrlPath + config.url;
                //config.url = configValue.baseUrl + '/' +config.url;
                config.headers = config.headers || {};
            }

            return config;
        },

         requestError: function (rejection) {

             return $q.reject(rejection);
         },
         response: function (response) {

             return response;
         },
         responseError: function (rejection) {

            if (rejection.status == 400) {
                return $q.reject(rejection);
            }

            else if (rejection.status == 401) {
                return $q.reject(rejection);
            }

            else if (rejection.status == 403) {
            }

            else if (rejection.status == 503) {
                return $q.reject(rejection);
            }

            else if (rejection.status <= 0) {
                return $q.reject(rejection);
            }
         }
     }
}