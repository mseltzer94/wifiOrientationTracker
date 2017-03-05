var express = require('express');
var mpu = require('mpu6050-dmp');
var app = express();

var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function(client){
  client.on('event', function(data){});
  client.on('disconnect', function(){});
  client.on('connect', function(){
		io.emit('connect', 'welcome!');
	});
});
server.listen(3000);

var data;
if (mpu.initialize()){
	setInterval(function(){
		data = mpu.getRotation();
		console.log(data);
		io.emit('yaw', data.yaw);
	}, 5);
}



//app.get('/', function (req, res) {
//	res.send(data);
//})
//
//app.listen(3000, function () {
//	console.log('Example app listening on port 3000!')
//})

