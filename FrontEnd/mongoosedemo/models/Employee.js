var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
    name: {type: String, unique: true, require: true},
    age: Number,
    address: {
        city: String,
        state: String
    }
}, {collection: 'employees'});

var Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;