// var fs = require('fs');
// var colors = require('colors');

// var Logger = module.exports = require('tracer').console({
//     transport: function(data) {
//         fs.open('./Logs/' + data.title + '.log', 'a', 0666, function(e, id) {
//             fs.write(id, data.output + "\n", null, 'utf8', function() {
//                 fs.close(id, function() {});
//             });
//         });
//     }
// });
var express = require("express");
var fs = require('fs');
var colors = require("colors");
var log = require('tracer').console({
    transport: function(data) {
        console.log(data.output);
        fs.open('./Logs/' + data.title.toLowerCase() + '.txt', 'a', 0666, function(e, id) {
            fs.write(id, data.timestamp + " " + data.output + "\n", "null", 'utf8', function() {
                fs.close(id, function() {});
            });
        });
    },
    format: [
        " <{{title}}> ({{file}}:{{line}})  {{message}} ", //default format 
        {
            error: "{{timestamp}} <{{title}}> {{message}} (in {{file}}:{{line}})\nCall Stack:\n{{stack}}" // error format 
        }
    ],
    dateformat: "HH:MM:ss dd/mm/yy",
    preprocess: function(data) {
        data.title = data.title.toUpperCase();
    },
    filters: {
        log: colors.white,
        trace: colors.green,
        debug: colors.magenta,
        info: colors.cyan,
        warn: colors.yellow,
        error: [colors.red, colors.bold]
    }
});


express.Logger = log;
module.exports = express;
