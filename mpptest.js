console.log('hello from mpptest.js');
var Client = require("mpp-client");
var client = new Client("ws://www.multiplayerpiano.com");
client.setChannel("lobby");
client.start();
client.on("connect", function(){
	console.log('mpp connected');
	client.sendArray([{m:'userset', set:{name:'\ufffc'}}]);
});
client.on("disconnect", function(){
	console.log('mpp disconnected');
});
