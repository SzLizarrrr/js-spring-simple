// JS Promise

function task1() {
	console.log("Executing taskl");
}

function task2() {
	console.log("Executing task2");
}

function task3() {
	console.log("Executing task3");
}

function t1() {
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			task1();
			resolve("Task1 is finsihed.");
		}, 500);
	});
}

function t2() {
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			task2();
			resolve("Task2 is finsihed.");
		}, 700);
	});
}

function t3() {
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			task3();
			resolve("Task3 is finsihed.");
		}, 1000);
	});
}

// status: pending, resolved(fulfilled), rejected
var promise = t1();
promise.then(function(resp) { // successful callback
	console.log(resp); // task 1 is finished.
	return t2();
}, function(error) { // error callback

}).then(function(resp) { // t2()
	console.log(resp);
	return t3();
}).then(function(resp) {
	console.log(resp);
}, function(error) { // error callback
	console.log("error ", error);
});