# Introduction

I’ll be using the blog at [http://js2hs.tumblr.com/](http://js2hs.tumblr.com/) to help javascript developers learn the basics of the Haskell programming language. Not too long ago, I was making the rough transition from more imperative programming languages (javascript, python, Java) to Haskell and found the existing books and guides to be overly academic. The blog posts to follow will be small easy to follow examples showing the process of converting a series of Javascript libraries into their Haskell equivalents. The earlier posts will be purposefully simple and straightforward conversions with a progression into more complex topics underlying the fundamental differences between Javascript and Haskell.

I plan to submit each post to /r/javascript and /r/haskell on reddit for feedback, links will be appended to the bottom of the post. Additionally, you can reach out to me on Twitter @Shakakai.

# Installation

Run the following commands to get setup with the project:
* git clone git@github.com:Shakakai/js2hs.git
* cd js2hs && npm install
* npm install -g mocha

# Running the tests

## Javascript

During the installation, you installed mocha, a unit test framework. You can run the mocha test suite for a post like so:
mocha [post folder]/[javascript test file]
mocha post1/string.js


