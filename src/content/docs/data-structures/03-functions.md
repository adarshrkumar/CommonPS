---
title: Functions and Procedures
description: Creating reusable code with functions and procedures in Common Pseudocode
---

Functions allow you to organize code into reusable blocks that can be called from different parts of your program. They're essential for writing clean, maintainable code.

:::tip[More on Functions]

- For a comprehensive guide on creating functions, see [Creating Functions](/functions/creating-functions)
- For built-in functions (math, string, array operations), see the [Functions section](/functions/overview/)

:::

## Basic Function

A function that returns a value:

```pscode
function hello takes in nothing
    return "world"
```

Or simply:

```pscode
function hello
    return "world"
```

## Functions with Parameters

### Single Parameter

```pscode
function square takes in number
    return number * number

result = square(5)  // Returns 25
```

### Multiple Parameters

```pscode
function add takes in num1 and num2
    return num1 + num2

sum = add(10, 20)  // Returns 30
```

### Three or More Parameters

```pscode
function calculateVolume takes in length and width and height
    volume = length * width * height
    return volume

volume = calculateVolume(5, 3, 2)  // Returns 30
```

## Calling Functions

### Standard Syntax

```pscode
result = functionName(arg1, arg2)
```

### Natural Language Syntax

```pscode
result = run functionName with arg1 and arg2
```

### Example

```pscode
function multiply takes in a and b
    return a * b

// Both ways work
result1 = multiply(5, 3)
result2 = run multiply with 5 and 3
```

## Procedures (No Return Value)

Functions that perform actions but don't return a value:

```pscode
function printGreeting takes in name {
    output "Hello, {name}!"
    output "Welcome to the program!"
}

// Call the procedure
printGreeting("Alice")
/* Output:
   Hello, Alice!
   Welcome to the program! */
```

## Return Statements

Functions can return values using the `return` keyword:

```pscode
function isAdult takes in age {
    if age >= 18
        return true
    return false
}

function getGrade takes in score
    if score >= 90
        return "A"
    else if score >= 80
        return "B"
    else if score >= 70
        return "C"
    else if score >= 60
        return "D"
    return "F"
```

## Simple Example

```pscode
function calculateArea takes in width and height
    return width * height

function calculatePerimeter takes in width and height
    return 2 * (width + height)

// Usage
w = 10
h = 5
output "Area: {calculateArea(w, h)}"
output "Perimeter: {calculatePerimeter(w, h)}"
```
