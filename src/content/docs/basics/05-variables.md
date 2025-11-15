---
title: Variables and Assignment
description: Declaring, initializing, and working with variables in Common Pseudocode
---

Variables are named storage locations that hold values in your program. They're fundamental to any programming task.

## Variable Declaration

### Implicit Declaration

Simply assign a value to create a variable:

```pscode
name = "Alice"
age = 30
price = 19.99
isActive = true
```

### Explicit Type Declaration

Optionally specify the variable type:

```pscode
number age = 30
string name = "Alice"
boolean isActive = true
array numbers = [1, 2, 3]
```

Explicit types make your code more readable and help prevent type-related errors.

## The `define` Statement

Declare a variable without initializing it:

```pscode
define counter
define userName
define isValid

counter = 0
userName = "John"
isValid = true
```

This is useful when you need to declare a variable before you know its value.

### When to Use `define`

```pscode
// Good use case: variable will be set conditionally
define message

if score >= 90
    message = "Excellent!"
else if score >= 70
    message = "Good job!"
else
    message = "Keep trying!"

output message
```

## Variable Assignment

### Simple Assignment

```pscode
x = 5
name = "Bob"
isComplete = false
```

### Copy Assignment

Variables can be assigned the value of other variables:

```pscode
original = 42
copy = original  // copy now equals 42

original = 100   // changing original doesn't affect copy
output copy      // still 42
```

### Multiple Assignments

```pscode
a = 10
b = 20
c = 30

// Swap values using a temporary variable
temp = a
a = b
b = temp
// Now a = 20 and b = 10
```

## Variable Naming Rules

### Valid Variable Names

```pscode
age = 25
firstName = "John"
user_name = "alice123"
totalPrice = 99.99
isValid = true
count2 = 5
```

### Naming Conventions

**Camel Case** (recommended):

```pscode
firstName = "Alice"
totalPrice = 99.99
isLoggedIn = true
studentCount = 30
```

**Snake Case**:

```pscode
first_name = "Alice"
total_price = 99.99
is_logged_in = true
student_count = 30
```

**Best Practices**:

- Use descriptive names: `studentCount` instead of `sc`
- Start with a lowercase letter
- Use camelCase or snake_case consistently
- Avoid single-letter names except for loop counters

### Invalid Names

Variables must follow specific naming rules. Here are common mistakes to avoid:

**Starting with numbers:**

```pscode
2ndPlace = "Alice"     // Invalid - starts with number
1stStudent = "Bob"     // Invalid - starts with number
99problems = "Jay-Z"   // Invalid - starts with number
```

**Using kebab-case (hyphens):**

```pscode
user-name = "Bob"      // Invalid - hyphens not allowed
first-name = "Alice"   // Invalid - hyphens not allowed
total-price = 99.99    // Invalid - hyphens not allowed
is-valid = true        // Invalid - hyphens not allowed
```

**Using dots or other special characters:**

```pscode
first.name = "Charlie" // Invalid - dots not allowed
user@name = "Dave"     // Invalid - @ not allowed
total$ = 100           // Invalid - $ not allowed
price% = 0.15          // Invalid - % not allowed
user#id = 123          // Invalid - # not allowed
```

**Spaces in names:**

```pscode
first name = "Alice"   // Invalid - spaces not allowed
total price = 99.99    // Invalid - spaces not allowed
user count = 10        // Invalid - spaces not allowed
```

**Starting with special characters:**

```pscode
_private = "secret"    // Valid, but discouraged
$value = 100           // Invalid - $ not allowed
#count = 5             // Invalid - # not allowed
@user = "alice"        // Invalid - @ not allowed
```

**Reserved keywords:**

```pscode
if = 5                 // Invalid - 'if' is a keyword
while = 10             // Invalid - 'while' is a keyword
for = 3                // Invalid - 'for' is a keyword
function = "test"      // Invalid - 'function' is a keyword
return = true          // Invalid - 'return' is a keyword
```

**Remember:** Use camelCase or snake_case, start with a letter, and avoid special characters (except underscore).

## Variable Scope

### Local Variables

Variables defined inside functions or blocks:

```pscode
function calculateTotal takes in price and quantity {
    subtotal = price * quantity  // Local to this function
    tax = subtotal * 0.1         // Local to this function
    total = subtotal + tax       // Local to this function
    return total
}

// subtotal, tax, and total don't exist outside the function
```

### Using Variables

```pscode
// Counter variable
count = 0
count = count + 1
count++  // Same as above

// Accumulator variable
sum = 0
for i from 1 to 10
    sum = sum + i

// Flag variable
found = false
for each item in items
    if item equals target
        found = true
        jump
```

## Variable Reassignment

Variables can be reassigned to new values:

```pscode
score = 0
output "Score: {score}"  // 0

score = 10
output "Score: {score}"  // 10

score = score + 5
output "Score: {score}"  // 15

score++
output "Score: {score}"  // 16
```

## Type Changes

Variables can hold different types at different times:

```pscode
value = 42        // number
output value      // 42

value = "hello"   // now a string
output value      // "hello"

value = true      // now a boolean
output value      // true
```

**Note:** While this is allowed, it's generally better to keep variables with consistent types for clarity.

## Compound Assignment Operators

Shorthand for updating variables:

```pscode
counter = 10

counter += 5    // counter = counter + 5  (15)
counter -= 3    // counter = counter - 3  (12)
counter *= 2    // counter = counter * 2  (24)
counter /= 4    // counter = counter / 4  (6)
counter %= 4    // counter = counter % 4  (2)
counter ^= 3    // counter = counter ^ 3  (8)
```

## Increment and Decrement

```pscode
count = 5

count++   // count = count + 1  (6)
count--   // count = count - 1  (5)

// Useful in loops
for i from 0 to 10
    sum += i
    count++
```

## Variable Initialization

### Always Initialize

```pscode
// Good: initialized
sum = 0
count = 0
message = ""
isReady = false

// Risky: uninitialized
define total
total = total + 10  // Error if total has no initial value
```

### Default Values

```pscode
// Numbers: start at 0
count = 0
sum = 0

// Strings: start as empty
message = ""
name = ""

// Booleans: start with explicit value
isActive = false
isComplete = false

// Arrays: start empty
items = []
numbers = []
```

## Common Variable Patterns

### Swap Variables

```pscode
a = 10
b = 20

temp = a
a = b
b = temp

output "a = {a}, b = {b}"  // a = 20, b = 10
```

### Running Total

```pscode
total = 0
prices = [19.99, 29.99, 9.99, 39.99]

for each price in prices
    total += price

output "Total: ${total}"
```

### Counter

```pscode
positiveCount = 0
numbers = [5, -3, 8, -1, 12, -7]

for each num in numbers
    if num > 0
        positiveCount++

output "Positive numbers: {positiveCount}"
```

### Flag Variable

```pscode
hasErrors = false
values = [5, 10, -3, 20]

for each value in values
    if value < 0
        hasErrors = true
        jump

if hasErrors
    output "Error: negative values found"
```

### Maximum/Minimum Tracking

```pscode
numbers = [23, 45, 12, 67, 34]

max = numbers[0]
min = numbers[0]

for each num in numbers
    if num > max
        max = num
    if num < min
        min = num

output "Max: {max}, Min: {min}"
```

## Variable Examples

### Temperature Converter

```pscode
output "Enter temperature in Fahrenheit: "
input fahrenheit
fahrenheit = convert fahrenheit to number

celsius = (fahrenheit - 32) * 5 / 9

output "{fahrenheit}°F = {celsius}°C"
```

### Grade Calculator

```pscode
output "Enter three test scores:"
input score1
input score2
input score3

score1 = convert score1 to number
score2 = convert score2 to number
score3 = convert score3 to number

total = score1 + score2 + score3
average = total / 3

output "Average: {average}"

if average >= 90
    output "Grade: A"
else if average >= 80
    output "Grade: B"
else if average >= 70
    output "Grade: C"
else
    output "Grade: F"
```

### Simple Interest Calculator

```pscode
output "Principal amount: "
input principal
principal = convert principal to number

output "Interest rate (as decimal, e.g., 0.05 for 5%): "
input rate
rate = convert rate to number

output "Time in years: "
input time
time = convert time to number

interest = principal * rate * time
total = principal + interest

output "Interest: ${interest}"
output "Total amount: ${total}"
```

## Best Practices

1. **Use meaningful names**

   ```pscode
   // Bad
   x = 30

   // Good
   studentAge = 30
   ```

2. **Initialize before use**

   ```pscode
   // Bad
   define total
   total = total + 10  // Error!

   // Good
   total = 0
   total = total + 10
   ```

3. **Keep scope minimal**

   ```pscode
   // Only declare variables where needed
   for i from 1 to 10
       temp = i * 2  // temp only exists in loop
       output temp
   ```

4. **Use constants for fixed values**

   ```pscode
   constant TAX_RATE = 0.08
   constant MAX_USERS = 100

   price = 50
   tax = price * TAX_RATE
   ```

5. **Be consistent with naming**

   ```pscode
   // Pick one style and stick with it
   firstName = "Alice"    // camelCase
   lastName = "Smith"     // camelCase
   totalPrice = 99.99     // camelCase
   ```
