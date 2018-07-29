var Employee = require('../models/Employee');

exports.postEmployees = function(employee) {
    employee.save(function(err) {
        if(err) {
            console.log(err);
        } else{
            console.log('insert success');
        }
    });
}

exports.getEmployees = function() {
    Employee.find(function(err, docs) {
        console.log(docs);
    });
}

exports.getEmployee = function(id) {
    Employee.findOne({_id: id}, function(err, doc) {
        console.log(doc);
    });
}

exports.putEmployee = function(employee) {
    Employee.findOneAndUpdate({name: employee.name}, employee, function(err) {
        if(err) {
            console.log(err.message);
        } else{
            console.log('update success');
        }
    });
}

exports.deleteEmployee = function(name) {
    Employee.remove({name: name}, function(err, doc) {
        if(err) {
            console.log(err.message);
        } else {
            console.log('delete success');
        }
    });
}