
## What is ES6?
Javascript spec of 2015



## let & const vars
var -> not suggested , does functional scoping, hoisted, can be redifined
let -> block scoping, can't be rededclared, can be reassigned, not hoisted
const -> block scoping, can't be rededclared, can't be reassigned, not hoisted
global -> rarely use this

## this
1) function invocation
    - EX: someFunc() - > this will be the window or global object
2) method invoation
    - EX : someObj.method -> this will be the thing to the left of the method
3) bind/call/apply 
    - EX : loook at index.js
4) constructor invocation
    - new Whatever -> this will be the new instance being created! and also what it's returning

## arrow functions



## template strings



## destructuring (Objects and Arrays)


## For of, for in



## default, rest, spread operator