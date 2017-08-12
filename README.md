# Lowbar

This project involves reimplementing a range of functions from the Underscore library, using Test-Driven-Development to test the functionality of each of the functions.

The following functions have been implemented. Descriptions and examples of how each works can be found in the [underscore library](http://underscorejs.org/).

* [identity](http://underscorejs.org/#identity)
* [first](http://underscorejs.org/#first)
* [last](http://underscorejs.org/#last)
* [each](http://underscorejs.org/#each)
* [indexOf](http://underscorejs.org/#indexOf) (implementing a binary search)
* [filter](http://underscorejs.org/#filter)
* [reject](http://underscorejs.org/#reject)
* [uniq](http://underscorejs.org/#uniq)
* [map](http://underscorejs.org/#map)
* [contains](http://underscorejs.org/#contains)

* [pluck](http://underscorejs.org/#pluck)
* [reduce](http://underscorejs.org/#reduce)
* [every](http://underscorejs.org/#every)
* [some](http://underscorejs.org/#some)
* [extends](http://underscorejs.org/#extends)
* [defaults](http://underscorejs.org/#defaults)

* [once](http://underscorejs.org/#once)
* [memoize](http://underscorejs.org/#memoize)
* [shuffle](http://underscorejs.org/#shuffle)
* [invoke](http://underscorejs.org/#invoke)
* [sortBy](http://underscorejs.org/#sortBy)
* [zip](http://underscorejs.org/#zip)
* [sortedIndex](http://underscorejs.org/#sortedIndex)
* [flatten](http://underscorejs.org/#flatten)
* [intersection](http://underscorejs.org/#intersection)
* [difference](http://underscorejs.org/#difference)

A seperate binarySearch file, which is imported into the main document, is contained in the lib file and tested seperately.

___

## Getting Started

To run the test suite for this project, the following steps should be taken.

___

## Prerequisites

This project requires nodejs and npm to be installed. 

If nodejs is not installed on your machine, refer to the [node documentation](https://nodejs.org/en/download/package-manager/) for instructions. 


To confirm you have npm installed on your machine, run the following code:

```
npm -v
```

If you don't have npm installed on your machine, instructions for installing npm can be found at [https://www.npmjs.com/get-npm].

___

## Running the tests

Each function is tested with a series of tests, which use the Mocha test framework alongside the Chai assertion library. Istanbul NYC is used to provide code coverage tests. Sinon spy is used in some tests. To run the tests, please follow the following instructions.

1. Download dependencies

Ensure the dependencies are installed locally, by running npm install

```
npm install
```

2. Run the test suite

```
npm test
```

___

## Dependencies
All dependencies are development dependencies, used in the test suite.

* [Mocha](https://mochajs.org/)
* [Chai](http://chaijs.com/)
* [Sinon Spy](http://sinonjs.org/)

___

## Authors

Sally Newell [salvn](https://github.com/SalVN "Link to Sally's github account")

___

## Acknowledgments

Inspired by [Underscore js](http://underscorejs.org/) and completed as part of a project at [Northcoders](https://northcoders.com/)
