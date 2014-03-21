'use strict';

  .controller('MainCtrl', function($scope, $http) {
    $scope.doSearch = function() {
      $http.post('http://localhost:7474/db/data/cypher/',
        '{"query" : "MATCH (a:Cat) WHERE a.id=~{id} return a", "params" : {"id" : ".*' + $scope.search + '.*"} }')
        .success(function(data) {
          $scope.cats = data.data;
          console.log(data.data[0][0].data.id);
        })
        .error(function() {
          console.log('Failed!');
        });
    };
  });
