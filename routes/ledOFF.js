
var express = require("express");
var router = express.Router();


var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LED = new Gpio(17, 'out'); //use GPIO pin 4, and specify that it is output

router.get("/",function(req,res,next){
    
    if(LED.readSync()===1){
        LED.writeSync(0);
    }
    
    res.send("Led Turned Off");

    // res.send("Beginning BlinkLED");
})

module.exports=router;