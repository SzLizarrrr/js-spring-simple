var people = {
    records: [
        {name: "Alice", city: "Princeton", country: "USA"},
        {name: "Steven", city: "Berlin", country: "Germany"},
        {name: "Bob", city: "Tokyo", country: "Japan"},
        {name: "Linda", city: "Beijing", country: "China"},
        {name: "Alex", city: "Paris", country: "France"},
        {name: "Frank", city: "London", country: "UK"},
        {name: "Tommy", city: "Shanghai", country: "China"}
    ]
};

exports.getPersons = function(req, res) {
	res.json(people.records); // res.send
};

exports.getPerson = function(req, res) {
	var index = req.params.index;
	res.json(people.records[index]);
};

exports.postPersons = function(req, res) {
	var person = req.body;
	people.records.push(person);
	res.json(people.records);
};