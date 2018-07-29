<!doctype html>
<html>
<head>
	<link rel="stylesheet" href="lib/css/bootstrap.min.css" type="text/css">
    <script src="lib/js/angular.min.js"></script>
    <script src="lib/js/angular-resource.min.js"></script>
    <script src="lib/js/angular-route.min.js"></script>
    <script src="js/auth.service.js"></script>
    <script src="js/emp.service.js"></script>
    <script src="js/app.js"></script>
</head>
<body>
<body ng-app="mainApp">
<div ng-controller="mainCtrl" class="container">
    <h1>Angular + Java + Spring + Hibernate</h1>
    <hr>
    <nav>
        <a href="#home">Home</a>
        <a href="#login">Login</a>
    </nav>
    <div ng-view></div>
</div>
</body>
</body>
</html>
