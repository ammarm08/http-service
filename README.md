# Reproducing IndexZero's Command Line HTTP Server for NodeJS #

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

This branch is pretty straight-forward. Now that we know we can serve a basic html file in our ./public folder, we want users to be able to quickly set server configuration on the fly, from the Command Line.

What are some basic options they should be able to have?

- Port assignment (ex. "3000")
- Address/Host assignment (ex. "localhost")
- Root assignment (ex. "./public" or "./dist")
- Cache assignment (ex. "3600", as in, "I want all served files to be cached for 3600 seconds")

These should be good enough options for now. Things will begin to get interesting as we start testing out static file serving beyond just a single html file.

Check out bin/server for the code + comments.
