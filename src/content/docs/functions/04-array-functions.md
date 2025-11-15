---
title: Array Functions
description: Array manipulation functions in Common Pseudocode
---

Common Pseudocode provides various functions and operations for working with arrays and lists.

## Array Properties

### length - Get Array Length

Returns the number of elements in an array.

**Syntax:**

```pscode
count = length of array
count = array.length
```

**Example:**

```pscode
numbers = [1, 2, 3, 4, 5]
count = length of numbers  // 5
count = numbers.length     // 5
```

---

## Adding Elements

### append/push - Add Element to End

Adds an element to the end of an array.

**Syntax:**

```pscode
append element to array
array.append(element)
array.push(element)
```

**Example:**

```pscode
numbers = [1, 2, 3]
append 4 to numbers  // [1, 2, 3, 4]

fruits = ["apple", "banana"]
fruits.push("orange")  // ["apple", "banana", "orange"]
```

---

### insert - Insert Element at Position

Inserts an element at a specific index in an array.

**Syntax:**

```pscode
insert element at index position in array
array.insert(position, element)
```

**Example:**

```pscode
fruits = ["apple", "orange"]
insert "banana" at index 1 in fruits  // ["apple", "banana", "orange"]

numbers = [1, 3, 4]
numbers.insert(1, 2)  // [1, 2, 3, 4]
```

---

## Removing Elements

### remove - Remove Element at Index

Removes an element from an array at a specified index.

**Syntax:**

```pscode
remove element at index position from array
array.remove(position)
```

**Example:**

```pscode
numbers = [1, 2, 3, 4, 5]
remove element at index 2 from numbers  // [1, 2, 4, 5]

fruits = ["apple", "banana", "orange"]
fruits.remove(1)  // ["apple", "orange"]
```

---

## Searching

### is in - Check if Element Exists

Checks whether an element exists in an array.

**Syntax:**

```pscode
if element is in array
```

**Example:**

```pscode
fruits = ["apple", "banana", "orange"]

if "apple" is in fruits
    output "We have apples!"

if "grape" is in fruits
    output "We have grapes!"
else
    output "No grapes available"
```

---

## Sorting

### sort - Sort Array

Sorts an array in ascending or descending order.

**Syntax:**

```pscode
sort array in ascending order
sort array in descending order
array.sort()
array.sort(descending)
```

**Example:**

```pscode
numbers = [5, 2, 8, 1, 9]
sort numbers in ascending order  // [1, 2, 5, 8, 9]

numbers = [5, 2, 8, 1, 9]
sort numbers in descending order  // [9, 8, 5, 2, 1]

fruits = ["orange", "apple", "banana"]
fruits.sort()  // ["apple", "banana", "orange"]
```

---

## Array Access

### Index Access

Access elements using zero-based indexing.

**Syntax:**

```pscode
element = array[index]
```

**Example:**

```pscode
fruits = ["apple", "banana", "orange"]
firstFruit = fruits[0]   // "apple"
secondFruit = fruits[1]  // "banana"
thirdFruit = fruits[2]   // "orange"
```

---

### Modify Element

Change the value of an element at a specific index.

**Syntax:**

```pscode
array[index] = newValue
```

**Example:**

```pscode
fruits = ["apple", "banana", "orange"]
fruits[1] = "grape"  // ["apple", "grape", "orange"]
```

---

## Iteration

### for each - Loop Through Array

Iterate over each element in an array.

**Syntax:**

```pscode
for each element in array
    // code block
```

**Example:**

```pscode
fruits = ["apple", "banana", "orange"]
for each fruit in fruits
    output fruit
```

---

### Index-based Loop

Loop through array using indices.

**Syntax:**

```pscode
for i from 0 to length of array - 1
    // use array[i]
```

**Example:**

```pscode
numbers = [10, 20, 30, 40]
for i from 0 to length of numbers - 1
    output "Index {i}: {numbers[i]}"
```

---

## Multi-dimensional Arrays

### Create 2D Array

**Example:**

```pscode
grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

---

### Access 2D Array Element

**Syntax:**

```pscode
value = array[row][column]
```

**Example:**

```pscode
grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
value = grid[1][2]  // 6 (row 1, column 2)
value = grid[0][0]  // 1 (row 0, column 0)
```

---

### Loop Through 2D Array

**Example:**

```pscode
grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

for each row in grid {
    for each value in row {
        output value
    }
}
```

---

## Common Array Operations Example

```pscode
// Create an empty shopping list
shoppingList = []

// Add items
append "milk" to shoppingList
append "bread" to shoppingList
append "eggs" to shoppingList

// Display list
output "Shopping List:"
for each item in shoppingList {
    output "- {item}"
}

// Check if we need to buy milk
if "milk" is in shoppingList
    output "Don't forget the milk!"

// Remove an item
remove element at index 1 from shoppingList  // removes "bread"

// Sort alphabetically
sort shoppingList in ascending order

// Display final list
output "Final list ({length of shoppingList} items):"
for i from 0 to length of shoppingList - 1 {
    output "{i + 1}. {shoppingList[i]}"
}
```
