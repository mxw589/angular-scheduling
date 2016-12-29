/**
 * Created by Mark on 29/12/2016.
 */
angular
    .module("tile")
    .directive("tile", function() {
        return {
            controller : function($scope){
                console.log($scope);
            },
            scope : {
              task : '='
            },
            restrict : 'E',
            templateUrl : 'tile/tile.template.html'
        };
    });