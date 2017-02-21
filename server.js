var express = require('express')
var i2c = require('i2c-bus');
var MPU6050 = require('i2c-mpu6050')
var app = express()

var address = 0x68;
var i2c1 = i2c.openSync(1);
var sensor = new MPU6050(i2c1,address);

var yaw = 0;

var data;
setInterval(function(){
	data = sensor.readSync();
	console.log(data)
}, 5);


app.get('/', function (req, res) {
  res.send(data.rotation.x.toString());
})

app.listen(3000, function () {
  	console.log('Example app listening on port 3000!')
})

