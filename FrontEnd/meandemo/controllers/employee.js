var Employee = require('../models/Employee');

exports.postEmployees = function(req, res) {
    req.assert('name', 'Name is required.').notEmpty();
    req.assert('age', 'Age is required.').notEmpty();
    req.assert('age', 'Age is not valid.').isInt().custom(function(value){
        return value >= 0 && value <= 150;
    });
    req.assert('address.city', 'City is required.').notEmpty();
    req.assert('address.state', 'State is required.').notEmpty();

    var errors = req.validationErrors(); //Deprecation

    if (errors) {
        return res.json({
            success: false,
            errors: errors
        });
    }

    var employee = new Employee(req.body);
    employee.save(function(err) {
        if(err) {
            res.json({
                success: false,
                message: err.message
            });
        } else{
            res.json({
                success: true
            });
        }
    });
}

// next points to next middleware, you can use next() to manually invoke
exports.getEmployees = function(req, res) {
    Employee.find(function(err, docs) {
        res.json(docs);
    });
}

exports.getEmployee = function(req, res) {
    var name = req.params.name;
    Employee.findOne({name: name}, function(err, doc) {
        res.json(doc);
    });
}

exports.putEmployee = function(req, res) {
    var employee = new Employee(req.body);
    Employee.findOneAndUpdate({name: employee.name}, employee, function(err) {
        if(err) {
            res.json({
                success: false,
                message: err.message
            });
        } else{
            res.json({
                success: true
            });
        }
    });
}

exports.deleteEmployee = function(req, res) {
    var name = req.params.name;
    Employee.remove({name: name}, function(err, doc) {
        if(err) {
            res.json({
                success: false,
                message: err.message
            });
        } else{
            res.json({
                success: true
            });
        }
    });
}