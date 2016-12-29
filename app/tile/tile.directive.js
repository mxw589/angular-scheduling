/**
 * Created by Mark on 29/12/2016.
 */
angular
    .module("tile")
    .directive("tile", function() {
        return {
            controller : function($scope, TaskService){
                $scope.task = TaskService.getTaskById($scope.taskId);
                console.log($scope);
            },
            scope : {
              taskId : '='
            },
            restrict : 'E',
            templateUrl : 'tile/tile.template.html'
        };
    });