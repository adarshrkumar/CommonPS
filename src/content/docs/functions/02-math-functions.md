---
title: Math Functions
description: Mathematical functions in Common Pseudocode
---

Common Pseudocode provides a variety of built-in mathematical functions for common operations.

## Basic Math Functions

### abs - Absolute Value

Returns the absolute value of a number.

**Syntax:**

```pscode
result = abs of number
result = abs(number)
```

**Example:**

```pscode
absolute = abs of -5  // 5
positive = abs(-10)   // 10
```

---

### round - Round to Nearest Integer

Rounds a number to the nearest integer.

**Syntax:**

```pscode
result = round number
result = round(number)
```

**Example:**

```pscode
rounded = round 3.7   // 4
rounded = round(3.2)  // 3
```

---

### floor - Round Down

Rounds a number down to the nearest integer.

**Syntax:**

```pscode
result = floor number
result = floor(number)
```

**Example:**

```pscode
roundedDown = floor 3.7   // 3
roundedDown = floor(3.9)  // 3
```

---

### ceil - Round Up

Rounds a number up to the nearest integer.

**Syntax:**

```pscode
result = ceil number
result = ceil(number)
```

**Example:**

```pscode
roundedUp = ceil 3.2   // 4
roundedUp = ceil(3.1)  // 4
```

---

### sqrt - Square Root

Returns the square root of a number.

**Syntax:**

```pscode
result = sqrt of number
result = sqrt(number)
```

**Example:**

```pscode
squareRoot = sqrt of 16  // 4
squareRoot = sqrt(25)    // 5
```

---

## Min/Max Functions

### max - Maximum Value

Returns the largest value from the given numbers.

**Syntax:**

```pscode
result = max(num1, num2, ...)
result = run max with num1 and num2 and num3
```

**Example:**

```pscode
maximum = max(5, 10, 3)  // 10
largest = run max with 5 and 10 and 3  // 10
```

---

### min - Minimum Value

Returns the smallest value from the given numbers.

**Syntax:**

```pscode
result = min(num1, num2, ...)
result = run min with num1 and num2 and num3
```

**Example:**

```pscode
minimum = min(5, 10, 3)  // 3
smallest = run min with 5 and 10 and 3  // 3
```

---

## Random Number Functions

### random - Random Float

Generates a random floating-point number between 0 and 1.

**Syntax:**

```pscode
result = random()
result = run random
```

**Example:**

```pscode
randomNum = random()  // e.g., 0.4827
randomNum = run random  // e.g., 0.7213
```

---

### random integer - Random Integer in Range

Generates a random integer within a specified range (inclusive).

**Syntax:**

```pscode
result = random integer from min to max
```

**Example:**

```pscode
randomInt = random integer from 1 to 10  // e.g., 7
diceRoll = random integer from 1 to 6    // e.g., 4
```

---

## Trigonometric Functions

### Basic Trig Functions

Common Pseudocode supports the six standard trigonometric functions:

**Syntax:**

```pscode
result = sin of angle
result = cos of angle
result = tan of angle
result = csc of angle
result = sec of angle
result = cot of angle
```

**Example:**

```pscode
sine = sin of 30
cosine = cos of 60
tangent = tan of 45
```

---

### Inverse Trig Functions

Inverse trigonometric functions are also available:

**Syntax:**

```pscode
result = sin^-1 of value
result = cos^-1 of value
result = tan^-1 of value
result = csc^-1 of value
result = sec^-1 of value
result = cot^-1 of value
```

**Example:**

```pscode
arcSine = sin^-1 of 0.5
arcCosine = cos^-1 of 0.5
arcTangent = tan^-1 of 1
```

**Note:** For inverse trig functions, use `^` or `**` (the `to the power of` syntax doesn't work here).

---

## Power and Modulus

### Exponentiation

Raise a number to a power:

**Syntax:**

```pscode
result = base ^ exponent
result = base ** exponent
result = base to the power of exponent
```

**Example:**

```pscode
power = 2 ^ 3              // 8
power = 2 ** 3             // 8
power = 2 to the power of 3  // 8
```

---

### Modulus

Get the remainder after division:

**Syntax:**

```pscode
result = number % divisor
result = number modulus divisor
result = remainder after number / divisor
```

**Example:**

```pscode
remainder = 10 % 3                  // 1
remainder = 10 modulus 3            // 1
remainder = remainder after 10 / 3  // 1
```
