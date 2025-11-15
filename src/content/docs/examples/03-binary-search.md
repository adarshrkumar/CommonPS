---
title: Binary Search
description: Efficient search algorithm for sorted arrays in Common Pseudocode
---

Binary search is an efficient search algorithm that works on sorted arrays by repeatedly dividing the search interval in half. It's much faster than linear search for large arrays.

## Algorithm

The binary search algorithm:

1. Start with the entire sorted array
2. Find the middle element
3. If the middle element equals the target, return its index
4. If the target is less than the middle element, search the left half
5. If the target is greater than the middle element, search the right half
6. Repeat until the target is found or the search space is empty

## Implementation

```pscode
function binarySearch takes in array and target {
    left = 0
    right = length of array - 1

    while left <= right {
        mid = floor((left + right) / 2)

        if array[mid] equals target
            return mid
        else if array[mid] < target
            left = mid + 1
        else
            right = mid - 1
    }

    return -1  // not found
}
```

## How It Works

Binary search uses a divide-and-conquer approach:

**Time Complexity:**

- **Best case:** O(1) - Target is the middle element
- **Worst case:** O(log n) - Target is at the end or not present
- **Average case:** O(log n)

**Space Complexity:** O(1) - Only uses a few variables

Where n is the number of elements in the array.

**Important:** The array MUST be sorted for binary search to work correctly!

## Visual Example

Searching for 67 in `[12, 23, 34, 45, 67, 78, 89, 90]`:

```text
Step 1: [12, 23, 34, 45, |67|, 78, 89, 90]
        mid = 45, target > mid, search right half

Step 2: [67, 78, |89|, 90]
        mid = 89, target < mid, search left half

Step 3: [|67|, 78]
        mid = 67, target == mid, FOUND at index 4!
```

## Usage Examples

### Example 1: Basic Binary Search

```pscode
// Must be sorted!
numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]
target = 60

index = binarySearch(numbers, target)

if index != -1
    output "Found {target} at index {index}"
else
    output "{target} not found in array"

// Output: Found 60 at index 5
```

### Example 2: Search in Large Array

```pscode
// Generate sorted array of even numbers
evenNumbers = []
for i from 1 to 1000
    append i * 2 to evenNumbers

// Search for a specific even number
target = 1500
result = binarySearch(evenNumbers, target)

if result != -1
    output "Found {target} at position {result + 1}"
else
    output "{target} is not an even number in range"
```

### Example 3: Dictionary Lookup

```pscode
// Sorted list of words
dictionary = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"]

output "Enter a word to look up: "
input word

index = binarySearch(dictionary, word)

if index != -1
    output "'{word}' found in dictionary at position {index + 1}"
else
    output "'{word}' not found in dictionary"
```

## Variations

### Binary Search - First Occurrence

Find the first occurrence of a target in an array with duplicates:

```pscode
function binarySearchFirst takes in array and target {
    left = 0
    right = length of array - 1
    result = -1

    while left <= right {
        mid = floor((left + right) / 2)

        if array[mid] equals target {
            result = mid
            right = mid - 1  // Continue searching left
        }
        else if array[mid] < target
            left = mid + 1
        else
            right = mid - 1
    }

    return result
}

numbers = [1, 2, 2, 2, 3, 4, 5]
firstTwo = binarySearchFirst(numbers, 2)
output "First occurrence at index {firstTwo}"  // index 1
```

### Binary Search - Last Occurrence

Find the last occurrence of a target:

```pscode
function binarySearchLast takes in array and target {
    left = 0
    right = length of array - 1
    result = -1

    while left <= right {
        mid = floor((left + right) / 2)

        if array[mid] equals target {
            result = mid
            left = mid + 1  // Continue searching right
        }
        else if array[mid] < target
            left = mid + 1
        else
            right = mid - 1
    }

    return result
}

numbers = [1, 2, 2, 2, 3, 4, 5]
lastTwo = binarySearchLast(numbers, 2)
output "Last occurrence at index {lastTwo}"  // index 3
```

### Binary Search - Insertion Point

Find where to insert a value to maintain sorted order:

```pscode
function binarySearchInsertionPoint takes in array and target {
    left = 0
    right = length of array

    while left < right {
        mid = floor((left + right) / 2)

        if array[mid] < target
            left = mid + 1
        else
            right = mid
    }

    return left
}

sortedNumbers = [10, 20, 30, 50, 60, 70]
insertAt = binarySearchInsertionPoint(sortedNumbers, 45)
output "Insert 45 at index {insertAt}"  // index 3
```

## Performance Comparison

Binary search vs Linear search on 1,000,000 elements:

```pscode
/* Linear Search: Up to 1,000,000 comparisons
   Binary Search: Maximum 20 comparisons

   Why? log₂(1,000,000) ≈ 20 */
```

**Example:**

```pscode
// Create large sorted array
largeArray = []
for i from 1 to 1000000
    append i to largeArray

target = 750000

// Linear search would check up to 750,000 elements
// Binary search checks only about 20 elements!
index = binarySearch(largeArray, target)
```

## Complete Example Program

```pscode
// Binary search implementation and demonstration
function binarySearch takes in array and target {
    left = 0
    right = length of array - 1
    comparisons = 0

    while left <= right {
        comparisons++
        mid = floor((left + right) / 2)

        if array[mid] equals target {
            output "Found after {comparisons} comparisons"
            return mid
        }
        else if array[mid] < target
            left = mid + 1
        else
            right = mid - 1
    }

    output "Not found after {comparisons} comparisons"
    return -1
}

// Main program
output "Student Grade Lookup System"
output ""

// Sorted student IDs
studentIDs = [1001, 1005, 1010, 1015, 1020, 1025, 1030, 1035, 1040]
grades = [85, 92, 78, 88, 95, 72, 90, 81, 87]

output "Enter student ID: "
input searchID

// Convert input to number
searchID = convert searchID to number

index = binarySearch(studentIDs, searchID)

if index != -1 {
    output "Student ID: {studentIDs[index]}"
    output "Grade: {grades[index]}"
}
else {
    output "Student ID {searchID} not found"
    output "Valid IDs range from {studentIDs[0]} to {studentIDs[length of studentIDs - 1]}"
}
```

## When to Use Binary Search

**Requirements:**

- Array MUST be sorted
- Need random access to elements (arrays, not linked lists)

**Advantages:**

- Very fast - O(log n) time complexity
- Efficient for large datasets
- Predictable performance

**Disadvantages:**

- Requires sorted array
- More complex than linear search
- Doesn't work well with frequently changing data

**Use binary search when:**

- Array is sorted (or can be sorted once)
- Array is large (> 1000 elements)
- You need to perform many searches
- Search speed is critical

**Use linear search instead when:**

- Array is small (< 100 elements)
- Array is unsorted and sorting is expensive
- You only search once or twice
- Data changes frequently

## Common Pitfalls

1. **Forgetting to sort the array first**

   ```pscode
   // WRONG - unsorted array
   numbers = [50, 20, 80, 10, 90]
   binarySearch(numbers, 20)  // May not work!

   // CORRECT - sort first
   sort numbers in ascending order
   binarySearch(numbers, 20)  // Works correctly
   ```

2. **Integer overflow in midpoint calculation**

   ```pscode
   // Better way to calculate midpoint
   mid = left + floor((right - left) / 2)
   ```

3. **Infinite loops with incorrect boundaries**

   ```pscode
   // Make sure to update left and right correctly
   left = mid + 1  // NOT left = mid
   right = mid - 1 // NOT right = mid
   ```
