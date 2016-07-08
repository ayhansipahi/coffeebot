'use strict';

angular.module('smstoreApp.auth', [
  'smstoreApp.constants',
  'smstoreApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
