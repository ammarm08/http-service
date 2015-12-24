# Reproducing IndexZero's Command Line HTTP Server for NodeJS #

There's no better time to become a self-taught programmer. The amount of free and high-quality resources available is astounding. However, as I've tried to delve deeper into concepts that are otherwise covered at CS departments around the world, I've found it strangely difficult (and boring).

For starters, while I love Coursera, many of its courses water down content and hold your hand a tad too much. On the flip side, working through Stanford/CMU/MIT/Berkeley coursework leads to a lot of broken links, cryptic lecture notes, and lab/project work that requires a valid student login. When the amount of reading exceeds the amount of coding, I get bored + frustrated.

Then it hit me that a lot of what I need/want to learn is staring me right in the face! There are so many incredible open-source projects up on GitHub, all with their full commit histories. So starting with IndexZero's HTTP-Server module, I'll be recreating/rebuilding popular projects from commit 0 to commit 2,000 (or whatever).

I've tried to make the code as well commented as possible, but if you see any glaring errors or confusing wording, please let me know. Follow along by walking through each subsequent branch.

The important part here is to stop and look up things you don't understand as you come across them. This keeps the focus on building things, while bringing up new concepts in small chunks.

Example: What is a process, and why does it need to emit a SIGINT? => read "Operating Systems: Three Easy Pieces". 

Original: https://github.com/indexzero/http-server/

### 1_Basic_CLI_Service ###

What we're doing in this branch is setting up necessary files and firing up a really basic Node server from the CLI.
It will primarily use http, node-static, and optimist's argument parser to get a basic web service up and running.

The main things we're concerned with here are:
1. Parsing and responding to user input
2. Setting up a static file server
3. Starting and exiting from our program

We will scaffold up from there as we move on (and as I learn more lol).

A list of possible rabbit holes you may encounter (by all means go down them!):
- What is a process?
- What does SIGINT mean? What is an interrupt handler?
- What is an executable and why do we need it? Why do I always see usr/local/bin everywhere?
- How is user input parsed by Optimist?
- How is node-static any different from Node's "http" module?
- What are ports?
- What is HTTP and why is it important when dealing with serving files?

##### Getting Started #####:

```
mkdir http-service
cd http-service

git init

npm init // just go through with all the default options for now. you need npm installed on your machine to do this.
npm install --save colors optimist node-static // install our dependencies



mkdir bin
touch bin/server // server will be our executable that we'll run from the command line

mkdir public
touch public/index.html // build out a really stupid, basic html file that we can test out serving with

touch .gitignore // go into this file and add node_modules & npm-debug.log
```

And let's make one small change to our package.json:

```
...
},
"bin": {
  "server": "./bin/server"
},
...
```

This is npm's way of installing our "server" executable file into PATH, which makes our
module available globally. This will come in handy later.

Check out bin/server on this branch and read the code and the comments.

Finally, to run the server from the command line (from the root of the directory):

```
node bin/server -h // this will pull up our help menu
node bin/server -p 8000 // runs our server on port 8000 with the root set as bin's parent directory
```

This does not serve files yet.