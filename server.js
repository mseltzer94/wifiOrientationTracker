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
var t0,t1, yaw;
if (mpu.initialize()){
	setInterval(function(){
		data = mpu.getQuaternion();
		if (data && data.x){
			//console.log(data);
			//io.emit('quat', JSON.stringify(data));
			t0 = +2.0 * (data.w*data.x + data.y*data.z);
			t1 = +1.0 - 2.0 * (Math.pow(data.x,2) + Math.pow(data.y,2));
			yaw = -Math.atan2(t0,t1);
			//console.log("emit yaw: " + yaw);
			io.emit('yaw', yaw);
		} else {
			console.log("failed to update!");
		}
}, 20);
}



app.get('/', function (req, res) {
	res.send(new Date() + "\n" + data);
})

app.listen(9000, function () {
	console.log('Example app listening on port 3000!')
})

