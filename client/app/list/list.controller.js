'use strict';


(function(){

var http

class ListComponent {
  getData(value) {
    console.log("searched value: " + value)
    http.get("https://jsonplaceholder.typicode.com/posts?userId=" + value).then(response => {
          this.postList = response.data
    });
  };

  constructor($http) {
  		http = $http
     	this.hello = "Hello";
     	this.whatever = "whatever";
     	this.postList = [];
      this.getData("1")
	}

}

angular.module('postslistApp')
  .component('list', {
    templateUrl: 'app/list/list.html',
    controller: ListComponent,
    controllerAs: 'listCtrl'
  });

})();
