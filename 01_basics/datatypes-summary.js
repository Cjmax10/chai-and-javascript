// Datatypes are characterised based on how data is stored and accessed from the memory.
// 1. Primitive Datatypes
//      - String
//      - Number
//      - Boolean
//      - null
//      - undefined
//      - Symbol
//      - BigInt
// 2. Non Primitive / Reference Datatypes
//      - Array
//      - Objects
//      - Functions

// JS is statically typed language, because we dont have to mention the datatype while declaring variables.

// When we try to check the datatype using typeof function we get following results
// number -> number
// String -> string
// Boolean -> boolean
// null -> Object
// undefined -> unefines
// Symbol -> Symbol
// BigInt -> BigInt

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Memories in JS
// Stack (Primitive), Heap (Non-Primitive)


// Stack
// All primitive datas are stored in Stack memory

// Heap
// When we create a non-primitive data, its data is stored in heap memory. And the reference to that data is stored in stack memory.