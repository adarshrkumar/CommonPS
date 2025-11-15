---
title: Loops
description: Iterate and repeat code with for, while, do-while, repeat-until, and loop statements
---

Loops allow you to repeat code multiple times, which is essential for many programming tasks.

## Basic Loop

The simplest way to repeat code a specific number of times:

```pscode
loop from 1 to 10 using i {
    output i
    output ""
}
```

This prints numbers 1 through 10.

## Infinite Loop

Create a loop that runs forever until explicitly stopped with `jump` or `break`:

```pscode
loop {
    output "Enter a command (type 'quit' to exit): "
    input command

    if command equals "quit"
        jump

    output "You entered: {command}"
}
```

This creates an infinite loop that must be broken out of using loop control statements.

### Infinite Loop Example

```pscode
count = 0

loop {
    count++
    output "Count: {count}"

    if count >= 10
        jump  // Exit the loop
}

output "Done!"
```

## For Loop

Iterate through a range of values:

```pscode
for all the integers between 1 and 10 using i
    output "Number: {i}"
```

### For Loop with Arrays

Iterate through array elements:

```pscode
fruits = ["apple", "banana", "orange"]

for each fruit in fruits
    output fruit
```

## While Loop

Repeat while a condition is true:

```pscode
i = 1
while i is less than or equal to 10 {
    output i
    i++
}
```

The condition is checked **before** each iteration.

### While Loop Example

```pscode
count = 0
while count < 5 {
    output "Count: {count}"
    count = count + 1
}
```

## Do-While Loop

Execute code at least once, then repeat while a condition is true:

```pscode
do {
    output "Enter a positive number: "
    input num
} while num <= 0
```

The condition is checked **after** each iteration, so the code runs at least once.

### Do-While Example

```pscode
attempts = 0
do {
    output "Enter password: "
    input password
    attempts++
} while password != "secret" AND attempts < 3
```

## Repeat-Until Loop

Repeat until a condition becomes true:

```pscode
repeat {
    output "Enter 'quit' to exit: "
    input command
} until command == "quit"
```

This is the opposite of `while` - it continues until the condition is true.

### Repeat-Until Example

```pscode
sum = 0
count = 1

repeat {
    sum = sum + count
    count++
} until count > 100

output "Sum of 1 to 100: {sum}"
```

## Loop Control

### Break (Jump)

Exit a loop early:

```pscode
for i from 1 to 100 {
    if i == 50
        jump  // or break
    output i
}
```

This loop stops when `i` reaches 50.

### Continue (Skip)

Skip to the next iteration:

```pscode
for i from 1 to 10 {
    if i % 2 == 0
        skip  // or continue
    output i  // only outputs odd numbers
}
```

### Example: Finding a Value

```pscode
numbers = [3, 7, 12, 19, 24, 31]
target = 19
found = false

for each num in numbers {
    if num equals target {
        output "Found {target}!"
        found = true
        jump
    }
}

if NOT found
    output "{target} not found"
```

## Nested Loops

Loops inside loops:

```pscode
// Multiplication table
for i from 1 to 5 {
    for j from 1 to 5 {
        product = i * j
        output "{i} × {j} = {product}"
    }
    output ""  // Blank line after each row
}
```

### 2D Array Iteration

```pscode
grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

for each row in grid {
    for each value in row
        output value " "
    output ""  // New line after each row
}
```

## Loop Examples

### Countdown

```pscode
count = 10
while count > 0 {
    output count
    count--
}
output "Blast off!"
```

### Sum of Numbers

```pscode
sum = 0
for i from 1 to 100
    sum += i
output "Sum of 1 to 100: {sum}"
```

### Input Validation

```pscode
valid = false

while NOT valid {
    output "Enter a number between 1 and 10: "
    input num

    if num >= 1 AND num <= 10 {
        valid = true
        output "Thank you!"
    } else
        output "Invalid input. Try again."
}
```

### Search and Exit

```pscode
names = ["Alice", "Bob", "Charlie", "David"]
searchName = "Charlie"

for i from 0 to length of names - 1 {
    if names[i] equals searchName {
        output "Found {searchName} at position {i}"
        jump
    }
}
```

## Choosing the Right Loop

- **loop from/to**: When you know exactly how many iterations you need
- **loop**: For infinite loops that run until explicitly broken out of
- **for**: When iterating through a range or collection
- **while**: When you don't know how many iterations in advance
- **do-while**: When the code must run at least once
- **repeat-until**: When the exit condition is more natural to express as "until true" rather than "while false"
