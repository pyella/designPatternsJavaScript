/**
 * Created by PY028031 on 10/26/2016.
 */

var repo = function() {
    var db = {};

    var get = function(id) {
        console.log("Getting taks " +id);
        return {
            name: "new task from db"
        }
    };

    var save = function(task) {
        console.log("saving " + task.name + " to the db");
    };

    return {
        get: get,
        save: save()
    }
};

module.exports = repo();
