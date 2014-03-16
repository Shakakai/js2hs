# Introduction

I’ll be using the blog at [http://js2hs.tumblr.com/](http://js2hs.tumblr.com/) to help javascript developers learn the basics of the Haskell programming language. Not too long ago, I was making the rough transition from more imperative programming languages (javascript, python, Java) to Haskell and found the existing books and guides to be overly academic. The blog posts to follow will be small easy to follow examples showing the process of converting a series of Javascript libraries into their Haskell equivalents. The earlier posts will be purposefully simple and straightforward conversions with a progression into more complex topics underlying the fundamental differences between Javascript and Haskell.

I plan to submit each post to /r/javascript and /r/haskell on reddit for feedback, links will be appended to the bottom of the post. Additionally, you can reach out to me on Twitter @Shakakai.

# Requirements

You'll need the following packages setup on your computer:
* [nodejs](http://nodejs.org/)
* [npm](https://www.npmjs.org/)
* [mocha](http://visionmedia.github.io/mocha/): npm install -g mocha
* [haskell platform](http://www.haskell.org/platform/) - bundles together ghci, cabal, cabal-install

# Project Installation

Run the following commands to get setup with the project:
* git clone git@github.com:Shakakai/js2hs.git
* cd js2hs
* npm install
* cabal install

# Running the tests

## Javascript

During the installation, you installed mocha, a unit test framework. You can run the mocha test suite for a post like so:
mocha [post folder]/[javascript test file]
mocha post1/string.js

## Haskell

For Haskell testing, we'll be using HUnit, the Haskell equivalent of JUnit.










