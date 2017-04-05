'use strict';


angular.module('postslistApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('list', {
        url: '/list',
        template: '<list></list>'
      });
  });
