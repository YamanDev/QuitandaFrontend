angular.module("quitandaApp").config(function ($httpProvider) {
	$httpProvider.interceptors.push("yamanAppInterceptor");
});