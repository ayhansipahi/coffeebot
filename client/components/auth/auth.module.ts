'use strict';

angular.module('coffeebotApp.auth', [
  'coffeebotApp.constants',
  'coffeebotApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
