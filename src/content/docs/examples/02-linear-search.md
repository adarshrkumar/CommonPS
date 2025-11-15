---
title: Linear Search
description: Sequential search algorithm implementation in Common Pseudocode
---

Linear search is a simple search algorithm that checks each element in an array sequentially until it finds the target value or reaches the end of the array.

## Algorithm

The linear search algorithm:

1. Start at the first element (index 0)
2. Compare each element with the target value
3. If a match is found, return the index
4. If no match is found after checking all elements, return -1

## Implementation

```pscode
function linearSearch takes in array and target {
    for i from 0 to length of array - 1 {
        if array[i] equals target
            return i
    }
    return -1  // not found
}
```

## How It Works

The function iterates through each element of the array:

- **Best case:** Target is the first element - O(1) time
- **Worst case:** Target is the last element or not present - O(n) time
- **Average case:** Target is somewhere in the middle - O(n) time

Where n is the number of elements in the array.

## Usage Examples

### Example 1: Finding a Number

```pscode
numbers = [10, 23, 45, 67, 89, 12, 34]
target = 67

index = linearSearch(numbers, target)

if index != -1
    output "Found {target} at index {index}"
else
    output "{target} not found in array"

// Output: Found 67 at index 3
```

### Example 2: Finding a String

```pscode
fruits = ["apple", "banana", "orange", "grape", "mango"]
searchFruit = "orange"

position = linearSearch(fruits, searchFruit)

if position != -1
    output "{searchFruit} is at position {position + 1}"
else
    output "{searchFruit} is not in the list"

// Output: orange is at position 3
```

### Example 3: Search with User Input

```pscode
// Create array of student names
students = ["Alice", "Bob", "Charlie", "David", "Eve"]

output "Enter student name to search: "
input searchName

index = linearSearch(students, searchName)

if index != -1
    output "Student {searchName} found at position {index + 1}"
else
    output "Student {searchName} not found in the class"
```

## Variations

### Linear Search with Count

Find how many times a value appears in an array:

```pscode
function linearSearchCount takes in array and target {
    count = 0
    for i from 0 to length of array - 1 {
        if array[i] equals target
            count++
    }
    return count
}

numbers = [5, 2, 8, 2, 9, 2, 3]
occurrences = linearSearchCount(numbers, 2)
output "Found {occurrences} occurrences"  // Found 3 occurrences
```

### Linear Search - Find All Positions

Return all indices where the target appears:

```pscode
function linearSearchAll takes in array and target {
    positions = []
    for i from 0 to length of array - 1 {
        if array[i] equals target
            append i to positions
    }
    return positions
}

numbers = [5, 2, 8, 2, 9, 2, 3]
indices = linearSearchAll(numbers, 2)
output "Found at indices: "
for each index in indices
    output index  // Output: 1, 3, 5
```

### Linear Search with Custom Comparison

Search using a custom condition:

```pscode
function linearSearchGreaterThan takes in array and threshold {
    for i from 0 to length of array - 1 {
        if array[i] > threshold
            return i
    }
    return -1
}

numbers = [3, 7, 2, 9, 4, 1, 8]
index = linearSearchGreaterThan(numbers, 5)
output "First number > 5 is at index {index}"  // index 1 (value 7)
```

## When to Use Linear Search

**Advantages:**

- Simple to implement and understand
- Works on unsorted arrays
- Works on any data type that can be compared
- Efficient for small arrays
- No preprocessing required

**Disadvantages:**

- Slow for large arrays (O(n) time complexity)
- Not efficient compared to binary search on sorted data

**Use linear search when:**

- The array is small (< 100 elements)
- The array is unsorted
- You only need to search once or twice
- Simplicity is more important than performance

**Use binary search instead when:**

- The array is sorted
- The array is large (> 1000 elements)
- You need to perform many searches

## Complete Example Program

```pscode
// Complete linear search program
function linearSearch takes in array and target {
    for i from 0 to length of array - 1 {
        if array[i] equals target
            return i
    }
    return -1
}

// Main program
inventory = ["laptop", "mouse", "keyboard", "monitor", "webcam"]

output "Inventory System"
output "Available items:"
for i from 0 to length of inventory - 1
    output "{i + 1}. {inventory[i]}"

output ""
output "Enter item to search: "
input searchItem

result = linearSearch(inventory, searchItem)

if result != -1 {
    output "Success! {searchItem} found at position {result + 1}"
    output "Location in warehouse: Aisle {result + 1}"
}
else {
    output "Item {searchItem} not found in inventory"
    output "Would you like to add it? (yes/no)"
    input response
    if response equals "yes" {
        append searchItem to inventory
        output "Item added successfully!"
    }
}
```
