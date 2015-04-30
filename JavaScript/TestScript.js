//Author-Autodesk Inc.
//Description-Simple script display a message.
/*globals adsk*/
(function () {

    "use strict";
    
    if (adsk.debug === true) {
        /*jslint debug: true*/
        debugger;
        /*jslint debug: false*/
    }
 
    var ui;
    try {
        var app = adsk.core.Application.get();
        ui = app.userInterface;
 
        ui.messageBox('Hello script');        
    } 
    catch (e) {
        if (ui) {
            ui.messageBox('Failed : ' + (e.description ? e.description : e));
        }
    }     

    adsk.terminate();
}());
