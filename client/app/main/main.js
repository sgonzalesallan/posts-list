'use strict';


angular.module('postslistApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
      	url: '/',
      	template: '<main></main>'
      });
  });
