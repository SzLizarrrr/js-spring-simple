<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Hello Page</title>
<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css">
</head>
<body>
<div class="container">
    <h1>JSP Demo</h1>
    <hr>
    <div class="col-sm-6">
        <form role="form" class="form" action="HelloServlet" method="post">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" class="form-control"/>
            </div>
            <div class="form-group">
                <label for="age">Age</label>
                <input type="number" id="age" name="age" class="form-control"/>
            </div>
            <div>
                <button type="reset" class="btn btn-primary">Clear</button>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
</div>
</body>
</html>