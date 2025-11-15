---
title: Built-in Functions Overview
description: Overview of built-in functions in Common Pseudocode
---

Common Pseudocode provides a rich set of built-in functions to perform common operations. These functions are organized into several categories:

## Function Categories

### Math Functions

Functions for mathematical operations including rounding, absolute values, square roots, and random number generation.

See the [Math Functions](/functions/math-functions) page for details.

### String Functions

Functions for manipulating and analyzing text strings, including case conversion, substring operations, and splitting.

See the [String Functions](/functions/string-functions) page for details.

### Array Functions

Functions for working with arrays, including adding, removing, and searching for elements.

See the [Array Functions](/functions/array-functions) page for details.

### Type Checking

Functions to check the type of a value at runtime.

See the [Type Checking](/functions/type-checking) page for details.

## Function Calling Syntax

Common Pseudocode supports multiple syntax styles for calling functions:

### Standard Syntax

```pscode
result = functionName(arg1, arg2)
```

### Natural Language Syntax

```pscode
result = run functionName with arg1 and arg2
```

### Operator-style Syntax

For some functions, you can use natural language operators:

```pscode
squareRoot = sqrt of 16
absolute = abs of -5
textLength = length of "hello"
```

## Function Composition

You can combine functions to perform complex operations:

```pscode
// Nested function calls
result = round(sqrt of 16)      // 4

// Using results in expressions
text = "  hello  "
trimmed = trim(text to uppercase)  // "HELLO"

// Chaining with variables
numbers = [3.7, 2.1, 8.9, 4.2]
sum = 0
for each num in numbers
    sum = sum + round(num)
output "Sum of rounded numbers: {sum}"  // 19
```

## Common Patterns

### Input Validation

```pscode
output "Enter your age: "
input ageInput

if is number(convert ageInput to number)
    age = convert ageInput to number
    if age >= 0 AND age <= 120
        output "Valid age: {age}"
    else
        output "Age out of range"
else
    output "Not a valid number"
```

### Array Processing

```pscode
scores = [85, 92, 78, 95, 88]

// Calculate average
sum = 0
for each score in scores
    sum = sum + score
average = sum / length of scores
output "Average: {average}"

// Find highest score
highest = scores[0]
for each score in scores
    highest = max(highest, score)
output "Highest score: {highest}"
```

### String Formatting

```pscode
firstName = "john"
lastName = "doe"

// Convert to title case
firstName = substring of (firstName to uppercase) from 0 to 1
    concat substring of firstName from 1 to length of firstName

lastName = substring of (lastName to uppercase) from 0 to 1
    concat substring of lastName from 1 to length of lastName

fullName = join [firstName, lastName] with " "
output fullName  // "John Doe"
```

### Random Selection

```pscode
options = ["Rock", "Paper", "Scissors"]
randomIndex = random integer from 0 to length of options - 1
choice = options[randomIndex]
output "Computer chose: {choice}"
```

## Combining Built-in and User-Defined Functions

Built-in functions work seamlessly with your custom functions:

```pscode
function calculateCircleArea takes in radius
    constant PI = 3.14159
    return PI * (radius ^ 2)

function formatArea takes in area
    rounded = round(area)
    return "Area: " convert rounded to string " sq units"

// Using both together
radius = 5.7
area = calculateCircleArea(radius)
output formatArea(area)  // "Area: 102 sq units"
```

## Function Return Values

Most built-in functions return values that can be:

### Stored in Variables

```pscode
result = sqrt of 16
output result
```

### Used Directly in Expressions

```pscode
if length of name > 0
    output "Valid name"
```

### Passed to Other Functions

```pscode
rounded = round(sqrt of 20)  // round(4.472...) = 4
```

### Used in Conditions

```pscode
if is number(userInput)
    // Process numeric input
```

## Error Handling with Functions

Some functions may fail or return special values:

```pscode
try
    // Division might fail
    result = 10 / denominator
    output round(result)
catch error
    output "Cannot calculate result"

// Checking for null returns
index = find "xyz" in text
if index equals -1
    output "Not found"
else
    output "Found at position {index}"
```

## Best Practices

### 1. Use Descriptive Variable Names

```pscode
// Good
userAge = convert ageInput to number
validEmail = email contains "@"

// Avoid
x = convert y to number
flag = email contains "@"
```

### 2. Combine Related Operations

```pscode
// Instead of multiple conversions
cleanedInput = trim(userInput to lowercase)

// Break into steps for complex operations
rawInput = userInput
trimmed = trim(rawInput)
cleaned = trimmed to lowercase
```

### 3. Check Types Before Operations

```pscode
if is array(data) AND length of data > 0
    firstElement = data[0]
    output firstElement
```

### 4. Handle Edge Cases

```pscode
function safeDivide takes in numerator and denominator
    if denominator equals 0
        return 0
    return round(numerator / denominator)
```

## User-Defined Functions

You can create your own functions using the `function` keyword:

```pscode
function add takes in num1 and num2
    return num1 + num2

result = add(5, 3)  // 8
result = run add with 5 and 3  // 8
```

See the [Creating Functions](/functions/creating-functions) page for a comprehensive guide on creating your own functions, including examples, best practices, and advanced techniques.
