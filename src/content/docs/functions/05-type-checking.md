---
title: Type Checking
description: Type checking functions in Common Pseudocode
---

Common Pseudocode provides functions to check the type of a value at runtime. This is useful for validating input and handling different data types appropriately.

## Type Checking Functions

### is number - Check if Value is a Number

Checks whether a value is a number.

**Syntax:**

```pscode
result = is number(value)
result = run is number with value
```

**Example:**

```pscode
value1 = 42
value2 = "hello"

if is number(value1)
    output "value1 is a number"  // This will execute

if is number(value2)
    output "value2 is a number"
else
    output "value2 is not a number"  // This will execute
```

---

### is string - Check if Value is a String

Checks whether a value is a string.

**Syntax:**

```pscode
result = is string(value)
result = run is string with value
```

**Example:**

```pscode
name = "Alice"
age = 30

if is string(name)
    output "name is a string"  // This will execute

if is string(age)
    output "age is a string"
else
    output "age is not a string"  // This will execute
```

---

### is boolean - Check if Value is a Boolean

Checks whether a value is a boolean (true or false).

**Syntax:**

```pscode
result = is boolean(value)
result = run is boolean with value
```

**Example:**

```pscode
isActive = true
count = 5

if is boolean(isActive)
    output "isActive is a boolean"  // This will execute

if is boolean(count)
    output "count is a boolean"
else
    output "count is not a boolean"  // This will execute
```

---

### is array - Check if Value is an Array

Checks whether a value is an array.

**Syntax:**

```pscode
result = is array(value)
result = run is array with value
```

**Example:**

```pscode
numbers = [1, 2, 3, 4, 5]
singleNumber = 42

if is array(numbers)
    output "numbers is an array"  // This will execute

if is array(singleNumber)
    output "singleNumber is an array"
else
    output "singleNumber is not an array"  // This will execute
```

---

## Practical Examples

### Input Validation

Type checking is particularly useful for validating user input:

```pscode
output "Enter your age: "
input userInput

// Check if input can be converted to a number
if is number(userInput) {
    age = userInput
    if age >= 18
        output "You are an adult"
    else
        output "You are a minor"
} else {
    output "Invalid input. Please enter a number."
}
```

---

### Function Parameter Validation

Ensure function parameters are of the correct type:

```pscode
function calculateArea takes in width and height {
    if NOT is number(width) OR NOT is number(height) {
        output "Error: width and height must be numbers"
        return -1
    }

    return width * height
}

// Test the function
area1 = calculateArea(5, 10)     // Returns 50
area2 = calculateArea("5", 10)   // Returns -1 with error message
```

---

### Type-Safe Array Processing

Check array types before processing:

```pscode
function sumNumbers takes in data {
    if NOT is array(data) {
        output "Error: input must be an array"
        return 0
    }

    sum = 0
    for each value in data {
        if is number(value)
            sum = sum + value
        else
            output "Warning: skipping non-numeric value {value}"
    }

    return sum
}

numbers = [1, 2, 3, 4, 5]
result = sumNumbers(numbers)  // Returns 15

mixed = [1, "two", 3, "four", 5]
result = sumNumbers(mixed)     // Returns 9, with warnings
```

---

### Dynamic Type Handling

Handle different types appropriately:

```pscode
function processValue takes in value {
    if is number(value)
        output "Number: {value * 2}"
    else if is string(value)
        output "String: {value to uppercase}"
    else if is boolean(value) {
        if value
            output "Boolean: TRUE"
        else
            output "Boolean: FALSE"
    }
    else if is array(value)
        output "Array with {length of value} elements"
    else
        output "Unknown type"
}

processValue(42)           // "Number: 84"
processValue("hello")      // "String: HELLO"
processValue(true)         // "Boolean: TRUE"
processValue([1, 2, 3])    // "Array with 3 elements"
```

---

### Combining Type Checks

Use logical operators to check multiple conditions:

```pscode
function validateUser takes in name and age {
    nameValid = is string(name) AND length of name > 0
    ageValid = is number(age) AND age >= 0 AND age <= 150

    if nameValid AND ageValid {
        output "User validation successful"
        return true
    } else {
        if NOT nameValid
            output "Error: name must be a non-empty string"
        if NOT ageValid
            output "Error: age must be a number between 0 and 150"
        return false
    }
}

// Test validation
validateUser("Alice", 30)     // Success
validateUser("", 30)          // Error: invalid name
validateUser("Bob", -5)       // Error: invalid age
validateUser("Charlie", "30") // Error: age not a number
```

---

## Best Practices

1. **Always validate user input** - Users may provide unexpected input types
2. **Check before type conversion** - Verify the type before attempting conversion
3. **Provide meaningful error messages** - Tell users what went wrong and what's expected
4. **Use type checks in function parameters** - Prevent runtime errors by validating early
5. **Handle edge cases** - Consider empty strings, zero, negative numbers, empty arrays, etc.
