var mongoose = require('mongoose');
var Employee = require('./models/Employee');
var employeeCtrl = require('./controllers/employee');

// connnect to Mongodb
mongoose.Promise = global.Promise;
var promise = mongoose.connect("mongodb://localhost:27017/mercury", {
    useMongoClient: true
});
promise.then(function() {
    console.log("Mongodb connected!");

    // Insert one employee
    var employeeToInsert = new Employee({
        name: "Bob",
        age: 28,
        address: {
            city: "Princeton",
            state: "NJ"
        }
    });
    // employeeCtrl.postEmployees(employeeToInsert);

    // Get one employee
    employeeCtrl.getEmployee("599ef7c4f5c9622698db7996");

    // Get all employees
    // employeeCtrl.getEmployees();

    // Update employee
    var employeeToUpdate = {
        name: "Bob",
        age: 30,
        address: {
            city: "Newark",
            state: "NJ"
        }
    };
    // employeeCtrl.putEmployee(employeeToUpdate);

    // Delete employee
    employeeCtrl.deleteEmployee("Bob");

}, function(err) {
    console.log(err);
    console.log("Mongodb connection err.");
    process.exit();
});