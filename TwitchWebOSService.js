var Service = require('webos-service');
var service = new Service("com.serialloser.app.twitchunoffical.service");

var fs = require('fs');

// Register the "write" service call which writes a text string to "message.txt"
service.register("hello", function(message) {

    message.respond({
        response: "Hello " + message.payload.name + " written to message.txt.",
        returnValue: true
    });    
});

service.register("loadSettings", function(message) {

    console.log("loadSettings");

});

service.register("saveSettings", function(message) {

    console.log("saveSettings");

});