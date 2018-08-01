# node_lessons

Pluralsite Node.js practice

## Setup

1. Install __node.js__
1. Install __eslint__ using ```eslint --init``` from the Powershell in the repo directory

## Node

* REPL - read, evaluate, print, loop
* .help - node command to show other node commands
* Object node makes available
  * console
  * process
    * use in REPL ```process.``` to see all available methods on the process object
    * attributes
      * __process.argv__ - array of command line arguments
* require("resource") - allows splitting of source code across multiple files
  * everything is hidden by default. Require is not like an __include__ statement
  * use __exports__ JS object
* NPM - node package module
  * see <npmjs.org>
  * nice modules
    1. nodeunit - test runner

## JS Basics

### Keywords

* var - specify a value to be a variable for declarations
* function - indicate that a varaible is a function

### Variables

* declaring variables - use __var__ keyword on the first use
* typically variable declarations are grouped at the top
* a single __var__ can declare multiple variables
* dynamically-typed variables


### Operators

* and - &&
* of - ||
* Booleans - >, <, ==, ===, <=, >=, !=

### Types

* boolean
* number
  * ```parseInt(value)``` - attempts to convert a value into a number
* string
* object

### Commands

* typeof - return the type of some value

### Looping

* while (condition) { `code` }
* for (iterator initialization, continue condition, iterator change) { `code` }
* do { `code` } while (condition)
  * executes at least once

### Collections

* Arrays - can store anything
  * `things[2]` is read as "things sub 2"
  * zero-indexed

## Objects

* Useful organization tool for data
* objects have __members__, that are accessed through the __dot operator__
* easiest way to create an object is using the __object literal__
  * `var die = {}`
* parts of an object
  * __this__ - implicit variable used to reference the object in which the member using __this__ exists
  * __property__  - a variable member

## Techniques

* using multiple source code files to manage complexity
  * __encapsulation__ - hide complexity, so hide things by default
* organization
  * /tests - automated tests
  * /lib - code libraries for source code

## Useful Functions

* Math.random()

## Automated Testing

* install __nodeunit__
  * `npm install -g nodeunit`
* `nodeunit tests` - run tests in the "tests" directory
* Hint: * write the tests first as a mental exercise
* assertions
  * `test.equal()`
  * `test.notEqual()`
  * `test.ok()`
