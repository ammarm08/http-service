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
### 3_Refactoring_Server_Code ###

In this branch, we'll be taking a look at our bin/server file and refactoring it. Because right now it's a bit redundant with its try-catch procedure. This round of refactoring definitely has room for improvement (especially in terms of error handling), but our primary goal right now is to make it easier to read.
