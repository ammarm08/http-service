# Reproducing IndexZero's Command Line HTTP Server for NodeJS #

* If you want to just get this thing up and running *

```
git clone https://github.com/ammarm08/http-service
mkdir http-service
npm install

// to use from anywhere, just set up an alias in your terminal
alias "my-server" = "node ../<path>/<to>/http-service/bin/server"

/* usage (from root of the directory you're working on) */

// help
my-server -h

// defaults --> port 8080, root = ./public
my-server

// configure as you like --> port 8000, root = ./
my-server -p 8000 -r ./ 

// open up to localhost:8000 and your files should be served up.
// as of now, this server looks for an index.html, so if your main
// html filed is named anything else, it won't serve.

// exit
ctrl-c
```

-----

There's no better time to become a self-taught programmer. The amount of free and high-quality resources available is astounding. However, as I've tried to delve deeper into concepts that are otherwise covered at CS departments around the world, I've found it strangely difficult (and boring).

For starters, while I love Coursera, many of its courses water down content and hold your hand a tad too much. On the flip side, working through Stanford/CMU/MIT/Berkeley coursework leads to a lot of broken links, cryptic lecture notes, and lab/project work that requires a valid student login. When the amount of reading exceeds the amount of coding, I get bored + frustrated.

Then it hit me that a lot of what I need/want to learn is staring me right in the face! There are so many incredible open-source projects up on GitHub, all with their full commit histories. So starting with IndexZero's HTTP-Server module, I'll be recreating/rebuilding popular projects from commit 0 to commit 2,000 (or whatever).

I've tried to make the code as well commented as possible, but if you see any glaring errors or confusing wording, please let me know. Follow along by walking through each subsequent branch.

The important part here is to stop and look up things you don't understand as you come across them. This keeps the focus on building things, while bringing up new concepts in small chunks.

Example: What is a process, and why does it need to emit a SIGINT? => read "Operating Systems: Three Easy Pieces". 

Original: https://github.com/indexzero/http-server/

(Branch list:)

### 1_Basic_CLI_Service ###
### 2_Server_Configuration_Options ###
### 3_Refactoring_Server_Code ###

In this branch, we'll be taking a look at our bin/server file and refactoring it. Because right now it's a bit redundant with its try-catch procedure. This round of refactoring definitely has room for improvement (especially in terms of error handling), but our primary goal right now is to make it easier to read.

Check out the commits on this branch to see the different iterations this refactor took. Ultimately, this is the idea behind the refactor:

1. lib/http-server.js will house all the internal server logic
2. bin/server will simply be the interface for running the server

Steps:

```
mkdir lib
touch lib/http-server.js
```

First we start with sketching out #2 (bin/server as the interface for getting the server running).
It could look something like this.

```
// 1 - import http server module (that we will write later)
// 2 - create a new instance of this http server
// 3 - start the server
// 4 - handle process interrupts (aka exiting)
```

We then move on to sketching out #1 (lib/http-server.js as where all the server logic gets set up).
It could look like this.

```
// 1 - import colors, optimist's argument parser, node's http module, and node-static. we need these.
// 2 - set up our options as we did before (port, address, root, cache, file, etc)
// 3 - write our handler functions (log, createServer, errorHandler, etc)
// 4 - use these handlers to execute one main "Start" function
```

So if you look at the code in both bin/server and lib/http-server, it should look pretty clear:

1. Import http-server.js and invoke it.

2. Run "Start".

3. Handle process interupts.


The key to linking bin/server and lib/http-server is Node's built-in module system, which imports/exports dependencies
using the "Require" + "Module.exports" pattern.

You'll see in lib/http-server how this works out. We encapsulated our variables and functions in module.exports, but we only have this module return the "start" and "log" functions. This ends up defining the interface/API that files importing http-server from elsewhere in the project directory can use.

```
// lib/http-server.js

module.exports = function() {
  ...

  // the "API"
  return {
    start: start,
    log: log
  }
  ...
}

// bin/server

var HTTPServer = require("../lib/http-server.js")(); // import and invoke
HTTPServer.start() // bam.
process.on("SIGINT", function() {
  HTTPServer.log(...) // bam.
  ...
})
...

```

There are many other ways to go about this, and I'm sure many of them are much better than what I've done above. But hey, this is pretty cool.
