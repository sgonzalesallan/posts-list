'use strict';


(function(){


class ListComponent {
  constructor($http) {
        this.$http = $http;
     	this.hello = "Hello";
     	this.whatever = "whatever";
     	this.postList = [];

     	this.$http.get("https://jsonplaceholder.typicode.com/posts").then(response => {
        	this.postList = response.data
        });
  }
}

angular.module('postslistApp')
  .component('list', {
    templateUrl: 'app/list/list.html',
    controller: ListComponent,
    controllerAs: 'listCtrl'
  });

})();
