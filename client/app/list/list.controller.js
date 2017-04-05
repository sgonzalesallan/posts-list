'use strict';

var self = this;

(function(){


class ListComponent {
  constructor() {
    // this.message = 'Hello';
   	this.hello = "Hello"
  }
}

angular.module('postslistApp')
  .component('list', {
    templateUrl: 'app/list/list.html',
    controller: ListComponent,
    controllerAs: 'listCtrl'
  });

})();
