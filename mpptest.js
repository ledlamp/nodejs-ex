var MPPclient = require("mpp-client");
var Client = new MPPclient("ws://www.multiplayerpiano.com");
Client.on("connect", function(){
	Client.sendArray([{m:'userset', set:{name:'\ufffc'}}]);
});
