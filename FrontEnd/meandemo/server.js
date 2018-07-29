var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var employeeCtrl = require('./controllers/employee');

var mongoose = require('mongoose');
// connnect to Mongodb
mongoose.Promise = global.Promise;
var promise = mongoose.connect("mongodb://localhost:27017/mercury", {
    useMongoClient: true
});
promise.then(function() {
    console.log("Mongodb connected!");
});

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(expressValidator());

app.get("/employees", employeeCtrl.getEmployees);
app.get("/employees/:name", employeeCtrl.getEmployee);
app.post("/employees", employeeCtrl.postEmployees);
app.put("/employees", employeeCtrl.putEmployee);
app.delete("/employees/:name", employeeCtrl.deleteEmployee);

app.listen(3000);
console.log("server started");