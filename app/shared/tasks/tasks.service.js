/**
 * Created by Mark on 26/12/2016.
 */
angular.module("shared.tasks")
    .service("TaskService", [

        function() {
            var currentHighestId = 0;
            generateId = function() {
                currentHighestId++;
                return currentHighestId;
            };
            var users = [
                new User("Mark"),
                new User("Kathy")
            ];

            var tasks = [
                new Task(users[0], "Important Meeting - Mark", generateId()),
                new Task(users[0], "Lesser Meeting", generateId()),
                new Task(users[1], "Important Meeting - Kathy", generateId())
            ];


        this.getAliveTasks = function () {
            var aliveTasks = [];
            for(var i = 0; i < tasks.length; i++){
                if(!tasks[i].deleted){
                    aliveTasks.push(tasks[i]);
                }
            }
            return aliveTasks;
        };

        this.addTask = function(owner, title){
            var id = generateId();
            tasks.push(new Task(id, owner, title));
        };

        this.deleteTask = function(id){
            for(var i = 0; i < tasks.length; i++){
                if(tasks[i].id === id){
                    tasks[i].deleted = true;
                }
            }
        };

        this.getTaskById = function(id){
            for(var i = 0; i < tasks.length; i++){
                if(tasks[i].id === id){
                    return tasks[i];
                }
            }
        }

    }]);