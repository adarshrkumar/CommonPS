---
title: Arrays
description: Working with lists and arrays in Common Pseudocode
---

Arrays (also called lists) store multiple values in a single variable. They're one of the most fundamental data structures in programming.

## Creating Arrays

### Empty Array

```pscode
numbers = []
names = array()
```

### Array with Initial Values

```pscode
numbers = [1, 2, 3, 4, 5]
fruits = ["apple", "banana", "orange"]
mixed = [1, "hello", true, 3.14]
```

## Accessing Array Elements

Arrays use zero-based indexing (the first element is at index 0):

```pscode
fruits = ["apple", "banana", "orange"]

firstFruit = fruits[0]   // "apple"
secondFruit = fruits[1]  // "banana"
thirdFruit = fruits[2]   // "orange"
```

## Modifying Array Elements

Change an element by assigning to its index:

```pscode
fruits = ["apple", "banana", "orange"]
fruits[1] = "grape"
// fruits is now ["apple", "grape", "orange"]
```

## Array Length

Get the number of elements in an array:

```pscode
numbers = [1, 2, 3, 4, 5]
count = length of numbers  // 5
// or
count = numbers.length     // 5
```

## Adding Elements

### Append to End

```pscode
numbers = [1, 2, 3]
append 4 to numbers
// or
numbers.append(4)
// or
numbers.push(4)
// numbers is now [1, 2, 3, 4]
```

### Insert at Specific Position

```pscode
fruits = ["apple", "orange"]
insert "banana" at index 1 in fruits
// or
fruits.insert(1, "banana")
// fruits is now ["apple", "banana", "orange"]
```

## Removing Elements

### Remove by Index

```pscode
numbers = [10, 20, 30, 40]
remove element at index 2 from numbers
// or
numbers.remove(2)
// numbers is now [10, 20, 40]
```

## Checking for Elements

```pscode
fruits = ["apple", "banana", "orange"]

if "apple" is in fruits
    output "We have apples!"

if "grape" is in fruits
    output "We have grapes!"
else
    output "No grapes available"
```

## Iterating Through Arrays

### For Each Loop

```pscode
fruits = ["apple", "banana", "orange"]

for each fruit in fruits
    output fruit
```

### Index-Based Loop

```pscode
numbers = [10, 20, 30, 40, 50]

for i from 0 to length of numbers - 1
    output "Element {i}: {numbers[i]}"
```

### While Loop

```pscode
colors = ["red", "green", "blue"]
i = 0

while i < length of colors {
    output colors[i]
    i++
}
```

## Sorting Arrays

### Ascending Order

```pscode
numbers = [5, 2, 8, 1, 9]
sort numbers in ascending order
// or
numbers.sort()
// numbers is now [1, 2, 5, 8, 9]
```

### Descending Order

```pscode
numbers = [5, 2, 8, 1, 9]
sort numbers in descending order
// or
numbers.sort(descending)
// numbers is now [9, 8, 5, 2, 1]
```

## Multi-Dimensional Arrays

Arrays can contain other arrays, creating multi-dimensional structures.

### 2D Array (Matrix)

```pscode
grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// Access elements
value = grid[1][2]  // Gets 6 (row 1, column 2)
```

### Creating a 2D Array

```pscode
// Tic-tac-toe board
board = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["O", "X", "X"]
]
```

### Iterating Through 2D Arrays

```pscode
grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

for each row in grid {
    for each value in row
        output value " "
    output ""  // New line after each row
}
```

Or with indices:

```pscode
for i from 0 to length of grid - 1 {
    for j from 0 to length of grid[i] - 1
        output grid[i][j] " "
    output ""
}
```

## Common Array Operations

### Sum of Array

```pscode
numbers = [1, 2, 3, 4, 5]
sum = 0

for each num in numbers
    sum += num

output "Sum: {sum}"  // Sum: 15
```

### Find Maximum

```pscode
numbers = [23, 45, 12, 67, 34]

max = numbers[0]
for each num in numbers
    if num > max
        max = num

output "Maximum: {max}"
```

### Find Minimum

```pscode
numbers = [23, 45, 12, 67, 34]

min = numbers[0]
for each num in numbers
    if num < min
        min = num

output "Minimum: {min}"
```

### Count Occurrences

```pscode
numbers = [1, 2, 3, 2, 1, 2, 4, 2]
target = 2
count = 0

for each num in numbers
    if num equals target
        count++

output "{target} appears {count} times"
```

### Reverse Array

```pscode
numbers = [1, 2, 3, 4, 5]
reversed = []

for i from length of numbers - 1 to 0
    append numbers[i] to reversed

// reversed is now [5, 4, 3, 2, 1]
```

## Array Tips

- Remember that arrays start at index 0
- Check array length before accessing elements to avoid errors
- Use descriptive array names (e.g., `studentNames` instead of `arr1`)
- Arrays can hold mixed types, but it's often clearer to keep them homogeneous
- When looping, be careful with the boundary: `length of array - 1` is the last valid index
