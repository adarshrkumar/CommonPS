---
title: Operators
description: Arithmetic, comparison, and logical operators in Common Pseudocode
---

Common Pseudocode provides a variety of operators for performing calculations and comparisons.

## Arithmetic Operators

### Basic Operations

```pscode
sum = 1 + 1           // Addition: 2
difference = 10 - 5   // Subtraction: 5
product = 3 * 4       // Multiplication: 12
quotient = 10 / 2     // Division: 5
```

### Advanced Operations

**Exponentiation** (to the power of):

```pscode
result = 2 ^ 3                  // 8
result = 2 ** 3                 // 8
result = 2 to the power of 3    // 8
```

**Modulus** (remainder):

```pscode
remainder = 10 % 3              // 1
remainder = 10 modulus 3        // 1
remainder = remainder after 10 / 3  // 1
```

### Compound Assignment

Shorthand for updating variables:

```pscode
num = 5
num++           // Same as num = num + 1 (now 6)
num--           // Same as num = num - 1 (now 5)

num += 3        // Same as num = num + 3 (now 8)
num -= 2        // Same as num = num - 2 (now 6)
num *= 4        // Same as num = num * 4 (now 24)
num /= 3        // Same as num = num / 3 (now 8)
num %= 5        // Same as num = num % 5 (now 3)
num ^= 2        // Same as num = num ^ 2 (now 9)
```

### Example

```pscode
num = 8
ans = num / 3    // ans = 2.666...
num %= 3         // num = 2
```

## Trigonometric Functions

Common Pseudocode includes built-in trigonometric functions:

```pscode
// Basic trig functions
result = sin of 30
result = cos of 60
result = tan of 20
result = csc of 50
result = sec of 70
result = cot of 40

// Inverse trig functions
result = sin^-1 of 0.5
result = cos^-1 of 0.5
result = tan^-1 of 1
result = csc^-1 of 2
result = sec^-1 of 2
result = cot^-1 of 1
```

Note: For inverse functions, use `^-1` or `**-1` (not `to the power of -1`).

## Comparison Operators

Compare values and return boolean results:

### Natural Language Style

```pscode
if x equals y
if x is equal to y
if x does not equal y
if x is not equal to y
if x is greater than y
if x is less than y
if x is greater than or equal to y
if x is less than or equal to y
```

### Symbolic Style

```pscode
if x == y           // Equal to
if x != y           // Not equal to
if x > y            // Greater than
if x < y            // Less than
if x >= y           // Greater than or equal to
if x <= y           // Less than or equal to
```

### Example

```pscode
age = 20
if age >= 18
    output "You are an adult"
else
    output "You are a minor"
```

## Logical Operators

Combine boolean conditions:

### AND Operator

All conditions must be true:

```pscode
if age >= 18 AND age < 65
if age >= 18 and age < 65
if age >= 18 && age < 65
```

### OR Operator

At least one condition must be true:

```pscode
if day equals "Saturday" OR day equals "Sunday"
if day equals "Saturday" or day equals "Sunday"
if day equals "Saturday" || day equals "Sunday"
```

### NOT Operator

Inverts a boolean value:

```pscode
if NOT isLoggedIn
if not isLoggedIn
if !isLoggedIn
```

### Complex Expressions

Combine multiple logical operators:

```pscode
if (age >= 18 AND age < 65) OR isStudent
    output "Eligible for discount"

if NOT (temperature < 0 OR temperature > 100)
    output "Temperature is in normal range"
```

## Operator Precedence

Operators are evaluated in this order (highest to lowest):

1. Parentheses `()`
2. Exponentiation `^`, `**`
3. Multiplication `*`, Division `/`, Modulus `%`
4. Addition `+`, Subtraction `-`
5. Comparison operators `>`, `<`, `>=`, `<=`, `==`, `!=`
6. NOT `!`, `not`, `NOT`
7. AND `&&`, `and`, `AND`
8. OR `||`, `or`, `OR`

**Tip:** Use parentheses to make your expressions clearer:

```pscode
// Less clear
result = a + b * c

// More clear
result = a + (b * c)
```
