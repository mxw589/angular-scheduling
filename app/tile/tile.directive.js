/**
 * Created by Mark on 29/12/2016.
 */
angular
    .module("tile")
    .directive("tile", function() {
        return {
            controller : function($attrs, $scope, TaskService){
                $scope.taskId = $attrs.task;
                console.log($scope.taskId);
                $scope.task = TaskService.getTaskById($scope.taskId);
            },
            restrict : 'E',
            templateUrl : 'tile/tile.template.html'
        };
    });