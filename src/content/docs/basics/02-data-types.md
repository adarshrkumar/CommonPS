---
title: Data Types
description: Numbers, strings, booleans, and type conversion in Common Pseudocode
---

Common Pseudocode supports several fundamental data types that you'll use throughout your programs.

## Numbers

Numbers can be integers or decimals (floating-point):

```pscode
number age = 25
number price = 19.99
number count = 0
```

The `number` type declaration is optional in most cases:

```pscode
age = 25
price = 19.99
```

## Strings

Strings represent text and can be enclosed in single quotes, double quotes, or backticks:

```pscode
string name = "John"
string greeting = 'Hello'
string message = `Welcome!`
```

### Multi-Line Strings

Use backticks or triple quotes for strings spanning multiple lines:

```pscode
description = `
This is a multiline string
that spans multiple lines
`
```

Or with triple quotes:

```pscode
text = """
This is also a multiline string
with multiple lines
"""
```

### String Interpolation

Embed variables in strings using curly braces:

```pscode
name = "Alice"
age = 30
output "Hello, my name is {name} and I am {age} years old"
// Output: Hello, my name is Alice and I am 30 years old
```

### String Concatenation

Join strings together:

```pscode
greeting = "Hello" " " "World"  // Results in "Hello World"
fullName = firstName " " lastName
```

## Booleans

Booleans represent true or false values:

```pscode
boolean isActive = true
boolean isComplete = false
```

Boolean literals are case-insensitive for the whole word:

- Valid: `true`, `True`, `TRUE`, `false`, `False`, `FALSE`
- Invalid: `tRuE`, `fAlSe` (mixed case not supported)

```pscode
isValid = true
isReady = TRUE
isDone = False
```

## Type Conversion

Convert values between different types:

```pscode
// String to number
stringValue = "123"
numValue = convert stringValue to number  // or number(stringValue)

// Number to string
age = 25
stringFromNum = convert age to string  // or string(age)
```

### Type Checking

Check if a value is of a specific type:

```pscode
value = 42
if is number(value)
    output "It's a number!"

if is string(value)
    output "It's a string!"

if is boolean(value)
    output "It's a boolean!"
```

## Explicit Type Declarations

While optional, you can explicitly declare variable types:

```pscode
number age = 25
string name = "John"
number price = 19.99
boolean isActive = true
array numbers = [1, 2, 3]
```

This can make your code more readable and help prevent type-related errors.
