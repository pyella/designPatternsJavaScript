/**
 * Created by PY028031 on 10/26/2016.
 */

var Task = function (name) {
    this.name = name;
    this.completed = false;
};

Task.prototype.complete = function () {
    console.log("completing task: " + this.name)
    this.completed = true;
};

Task.prototype.save = function() {
    console.log("save Task" + this.name);
};

module.exports = Task;


