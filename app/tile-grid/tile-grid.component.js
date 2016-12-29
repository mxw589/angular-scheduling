/**
 * Created by Mark on 28/12/2016.
 */
angular
    .module("tileGrid")
    .component("tileGrid", {

    templateUrl : "tile-grid/tile-grid.template.html",

    controller : ["TaskService",
        function(TaskService) {

        var self = this;
        init();

        function init() {
            self.tasks = TaskService.getAliveTasks();
            console.log(self.tasks);
        }
    }]

});