var express = require('express');
var mpu = require('mpu6050-dmp');
var app = express();

var data;
if (mpu.initialize()){
	setInterval(function(){
		data = mpu.getRotation();
		console.log(data)
	}, 5);
}



app.get('/', function (req, res) {
	res.send(data);
})

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})

