
// Dependencies

var colors = require("colors");
var argv = require("optimist").argv;
var staticServer = require("node-static");
var http = require("http");

// Encapsulating our http-server in an invokable function

module.exports = function() {

  // set our options

  var port = argv.p || 8080;
  var address = argv.a || "localhost";
  var root = argv.r || "./public";
  var cache = argv.c || 3600;
  var silent = argv.s || false;
  var file = new(staticServer.Server)(root, {cache: parseInt(cache)});

  var helpMenu = [
    "",
    "usage: node bin/server [options]",
    "",
    "options:",
    " -p Port assignment [8080 by default]",
    " -a Address assignment [localhost by default]",
    " -r Root assignment [./public by default]",
    " -c Cache expiration assignment [3600 by default]",
    " -s Suppress logging from output",
    " -h Pull up the help menu in case you freak out"
  ].join('\n');

  // define our functions

  function log(message) {
    if (!silent) {
      console.log(message);
    }
  };

  function showHelpMenu() {
    if (argv.h) return log(helpMenu);
  }

  function createServer() {
    http.createServer(function(request, response) {
      request.addListener('end', function() {
        file.serve(request, response, function(err, data) {
          errorHandler(request, response, err);
          log('['.grey+'SERVED'.yellow+'] '.grey + request.url);
        })
      }).resume();
    }).listen(port, address);
  };

  function errorHandler(request, response, err) {
    if (err) {
      console.error("Error serving " + request.url + " - " + err.message);
      response.writeHead(err.status, err.headers);
      response.end();
    }
  };

  // use the above functions to set our program procedure (show help menu, log, create server, log, etc)
  function start() {
    showHelpMenu();
    log("Starting up http-server: ".yellow + root.cyan + " on port: ".yellow + port.toString().cyan);
    createServer();
    log('http-server successfully started: '.green + address.cyan + ':'.cyan + port.toString().cyan);
    log('Hit CTRL-C to stop the server');
  }

  // these are the only two functions that an external file will be able to interface with.
  
  return {
    start: start,
    log: log
  }
};