---
title: Conditional Statements
description: Control program flow with if, else if, else, and switch statements
---

Conditional statements allow your program to make decisions and execute different code based on conditions.

## If Statement

Execute code only when a condition is true:

```pscode
if age >= 18
    output "You are an adult"
```

### Natural Language Comparisons

Common Pseudocode supports both symbolic and natural language comparisons:

```pscode
if currentNumber equals 5
    output "The number is 5"

if currentNumber is equal to 5
    output "The number is 5"

if currentNumber == 5
    output "The number is 5"
```

All three forms are equivalent!

## If-Else Statement

Execute one block if the condition is true, another if false:

```pscode
if age >= 18
    output "You are an adult"
else
    output "You are a minor"
```

## Else If Statement

Check multiple conditions in sequence:

```pscode
if score >= 90
    output "Grade: A"
else if score >= 80
    output "Grade: B"
else if score >= 70
    output "Grade: C"
else if score >= 60
    output "Grade: D"
else
    output "Grade: F"
```

Note: You can also use `elif` or `elseif` instead of `else if`.

## Comparison Operators

### Greater Than and Less Than

```pscode
if temperature is greater than 30
    output "It's hot!"

if temperature > 30
    output "It's hot!"

if price is less than or equal to 50
    output "Affordable!"

if price <= 50
    output "Affordable!"
```

### Not Equal

```pscode
if status does not equal "complete"
    output "Still in progress"

if status is not equal to "complete"
    output "Still in progress"

if status != "complete"
    output "Still in progress"
```

## Logical Operators

### AND - All conditions must be true

```pscode
if age >= 18 AND age < 65
    output "Working age adult"

if age >= 18 and age < 65
    output "Working age adult"

if age >= 18 && age < 65
    output "Working age adult"
```

### OR - At least one condition must be true

```pscode
if day equals "Saturday" OR day equals "Sunday"
    output "It's the weekend!"

if day equals "Saturday" or day equals "Sunday"
    output "It's the weekend!"

if day equals "Saturday" || day equals "Sunday"
    output "It's the weekend!"
```

### NOT - Invert a boolean

```pscode
if NOT isLoggedIn
    output "Please log in"

if not isLoggedIn
    output "Please log in"

if !isLoggedIn
    output "Please log in"
```

## Switch Statement

Test a value against multiple cases:

```pscode
output "Enter an option (1-6 or 9): "
input userOption

switch userOption
    case 1
        output "Booking a ticket"
        jump
    case 2
        output "Canceling a ticket"
        jump
    case 3
        output "Viewing a ticket"
        jump
    case 4
        output "Viewing all tickets"
        jump
    case 5
        output "Tracking train"
        jump
    case 6
        output "Tracking all trains"
        jump
    case 9
        output "Exiting..."
        exit
    default
        output "Invalid option"
```

### Switch Statement Notes

- Use `jump` or `break` to exit the switch after a case
- Use `exit`, `stop`, or `return` to terminate the program
- The `default` case runs if no other case matches
- Unlike some languages, cases don't "fall through" by default

## Nested Conditionals

You can nest if statements inside each other:

```pscode
if hasAccount
    if isVerified
        output "Welcome back!"
    else
        output "Please verify your email"
else
    output "Please create an account"
```

## Complex Conditions

Combine multiple logical operators:

```pscode
if (age >= 18 AND age < 65) OR isStudent
    output "Eligible for standard rate"

if temperature < 0 OR temperature > 100
    output "Extreme temperature warning!"

if NOT (status equals "pending" OR status equals "processing")
    output "Order is complete or cancelled"
```

**Tip:** Use parentheses to make complex conditions clearer!
