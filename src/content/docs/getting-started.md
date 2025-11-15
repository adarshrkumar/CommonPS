---
title: Getting Started
description: Learn the basics of Common Pseudocode and start writing your first programs
---

Welcome to Common Pseudocode! This guide will help you understand the fundamentals of the language.

## General Notes

Common Pseudocode works like JavaScript, where each new line is treated as a statement with an implicit "semicolon" at the end. There's no need for explicit statement terminators.

**Indentation** is done Python-style, but without the need for the `:` at the end of parent statements. Proper indentation is crucial for defining code blocks.

## Your First Program

Let's start with a simple "Hello World" program:

```pscode
output "Hello, World!"
```

That's it! The `output` statement displays text to the user.

## Comments

Comments help document your code and are ignored during execution.

**Single-line comments:**

```pscode
// This is a single-line comment
x = 5  // This is an inline comment
```

**Multi-line comments:**

```pscode
/*
    This is a multi-line comment
    that spans multiple lines
*/
x = 10
```

## Variables and Assignment

Declare a variable without an initial value:

```pscode
define variableName
```

Assign a value to a variable:

```pscode
newNumber = 7
currentNumber = newNumber
```

Example with `define`:

```pscode
define counter
define userName
define isValid

counter = 0
userName = "John"
isValid = true
```

## Data Types

Common Pseudocode supports several basic data types:

### Numbers

```pscode
age = 25
price = 19.99
```

### Strings

Strings can be enclosed in single quotes, double quotes, or backticks:

```pscode
name = "John"
greeting = 'Hello'
message = `Welcome!`
```

**Multi-line strings:**

```pscode
`
This is a multiline string
that spans multiple lines
`
```

Or using triple quotes:

```pscode
"""
This is also a multiline string
"""
```

### Booleans

```pscode
isActive = true
isComplete = false
```

Note: `true`, `True`, and `TRUE` are all valid (same for `false`).

### Type Conversion

Convert between types when needed:

```pscode
stringValue = "123"
numValue = convert stringValue to number  // or number(stringValue)
stringFromNum = convert age to string     // or string(age)
```

## Input and Output

**Reading user input:**

```pscode
input userInput
```

**Prompting for input:**

```pscode
output "Please enter your name: "
input userName
```

**Displaying output:**

```pscode
output "Hello, " userName "!"
```

## Constants

Define values that cannot be changed:

```pscode
constant PI = 3.14159
constant MAX_USERS = 100
```

## Basic Operators

### Arithmetic Operators

```pscode
sum = 1 + 1        // Addition
diff = 10 - 5      // Subtraction
product = 3 * 4    // Multiplication
quotient = 10 / 2  // Division
power = 2 ^ 3      // Exponentiation (also ** or "to the power of")
remainder = 10 % 3 // Modulus (also "modulus" or "remainder after")
```

### String Concatenation

```pscode
greeting = "Hello" " " "World"  // Results in "Hello World"
num = 10
message = "The number is {num}" // Results in "The number is 10"
```

### Compound Assignments

```pscode
num = 5
num++          // Same as num = num + 1
num *= 3       // Same as num = num * 3
num ^= 2       // Same as num = num ^ 2
```

## What's Next?

Now that you understand the basics, explore these topics:

- [Comments and Formatting](/basics/comments/) - Detailed comment syntax
- [Data Types](/basics/data-types/) - In-depth look at all data types
- [Operators](/basics/operators/) - Complete operator reference
- [Control Flow](/control-flow/conditionals/) - if/else statements and more
- [Loops](/control-flow/loops/) - Iteration and repetition
