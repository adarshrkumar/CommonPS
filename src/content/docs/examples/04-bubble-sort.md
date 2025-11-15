---
title: Bubble Sort
description: Simple sorting algorithm implementation in Common Pseudocode
---

Bubble sort is a simple sorting algorithm that repeatedly steps through an array, compares adjacent elements, and swaps them if they're in the wrong order. The process repeats until the array is sorted.

## Algorithm

The bubble sort algorithm:

1. Compare each pair of adjacent elements
2. Swap them if they're in the wrong order
3. Repeat this process for each element
4. After each pass, the largest element "bubbles up" to its correct position
5. Continue until no more swaps are needed

## Implementation

```pscode
function bubbleSort takes in array
    n = length of array

    for i from 0 to n - 1
        for j from 0 to n - i - 2
            if array[j] > array[j + 1]
                // Swap elements
                temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp

    return array
```

## How It Works

**Visual Example:** Sorting `[5, 2, 8, 1, 9]`

```text
Pass 1:
[5, 2, 8, 1, 9]  → Compare 5 and 2, swap
[2, 5, 8, 1, 9]  → Compare 5 and 8, no swap
[2, 5, 8, 1, 9]  → Compare 8 and 1, swap
[2, 5, 1, 8, 9]  → Compare 8 and 9, no swap
[2, 5, 1, 8, 9]  → 9 is now in correct position

Pass 2:
[2, 5, 1, 8, 9]  → Compare 2 and 5, no swap
[2, 5, 1, 8, 9]  → Compare 5 and 1, swap
[2, 1, 5, 8, 9]  → Compare 5 and 8, no swap
[2, 1, 5, 8, 9]  → 8 is now in correct position

Pass 3:
[2, 1, 5, 8, 9]  → Compare 2 and 1, swap
[1, 2, 5, 8, 9]  → Compare 2 and 5, no swap
[1, 2, 5, 8, 9]  → 5 is now in correct position

Pass 4:
[1, 2, 5, 8, 9]  → Compare 1 and 2, no swap
[1, 2, 5, 8, 9]  → Array is sorted!
```

**Time Complexity:**

- **Best case:** O(n) with optimization - Already sorted
- **Worst case:** O(n²) - Reverse sorted
- **Average case:** O(n²)

**Space Complexity:** O(1) - Sorts in place

## Usage Examples

### Example 1: Sort Numbers

```pscode
numbers = [64, 34, 25, 12, 22, 11, 90]

output "Original array: "
for each num in numbers
    output num

sortedNumbers = bubbleSort(numbers)

output "Sorted array: "
for each num in sortedNumbers
    output num

// Output: 11, 12, 22, 25, 34, 64, 90
```

### Example 2: Sort User Input

```pscode
// Get numbers from user
numbers = []
count = 5

output "Enter {count} numbers:"
for i from 1 to count
    output "Number {i}: "
    input num
    num = convert num to number
    append num to numbers

output "Sorting..."
bubbleSort(numbers)

output "Sorted numbers:"
for each num in numbers
    output num
```

### Example 3: Sort Test Scores

```pscode
studentNames = ["Alice", "Bob", "Charlie", "David", "Eve"]
scores = [78, 92, 65, 88, 95]

// Sort scores
bubbleSort(scores)

output "Test scores from lowest to highest:"
for i from 0 to length of scores - 1
    output "Score: {scores[i]}"

// Output: 65, 78, 88, 92, 95
```

## Variations

### Optimized Bubble Sort

Stop early if the array becomes sorted:

```pscode
function bubbleSortOptimized takes in array
    n = length of array

    for i from 0 to n - 1
        swapped = false

        for j from 0 to n - i - 2
            if array[j] > array[j + 1]
                // Swap elements
                temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
                swapped = true

        // If no swaps occurred, array is sorted
        if NOT swapped
            jump  // break out of loop

    return array

// Much faster on nearly-sorted arrays!
sortedArray = [1, 2, 3, 5, 4]
bubbleSortOptimized(sortedArray)  // Only needs one pass
```

### Bubble Sort with Counting

Count the number of swaps performed:

```pscode
function bubbleSortWithCount takes in array
    n = length of array
    swapCount = 0

    for i from 0 to n - 1
        for j from 0 to n - i - 2
            if array[j] > array[j + 1]
                temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
                swapCount++

    output "Total swaps: {swapCount}"
    return array
```

### Descending Bubble Sort

Sort in descending order (largest to smallest):

```pscode
function bubbleSortDescending takes in array
    n = length of array

    for i from 0 to n - 1
        for j from 0 to n - i - 2
            if array[j] < array[j + 1]  // Changed comparison
                temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp

    return array

numbers = [5, 2, 8, 1, 9]
bubbleSortDescending(numbers)  // [9, 8, 5, 2, 1]
```

### Bubble Sort with Parallel Arrays

Sort two arrays in parallel (keep elements aligned):

```pscode
function bubbleSortParallel takes in names and scores
    n = length of names

    for i from 0 to n - 1
        for j from 0 to n - i - 2
            if scores[j] < scores[j + 1]  // Sort by score descending
                // Swap scores
                tempScore = scores[j]
                scores[j] = scores[j + 1]
                scores[j + 1] = tempScore

                // Swap names
                tempName = names[j]
                names[j] = names[j + 1]
                names[j + 1] = tempName

students = ["Alice", "Bob", "Charlie"]
scores = [78, 92, 85]
bubbleSortParallel(students, scores)
// students: ["Bob", "Charlie", "Alice"]
// scores: [92, 85, 78]
```

## Complete Example Program

```pscode
function bubbleSort takes in array
    n = length of array
    swapped = false

    for i from 0 to n - 1
        swapped = false

        for j from 0 to n - i - 2
            if array[j] > array[j + 1]
                temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
                swapped = true

        if NOT swapped
            jump

    return array

// Main program
output "Product Inventory Sorting System"
output ""

productNames = ["Laptop", "Mouse", "Keyboard", "Monitor", "Webcam"]
prices = [999.99, 29.99, 79.99, 299.99, 89.99]

output "Original inventory (unsorted):"
for i from 0 to length of productNames - 1
    output "{productNames[i]}: ${prices[i]}"

// Create copy of prices to sort
sortedPrices = []
for each price in prices
    append price to sortedPrices

bubbleSort(sortedPrices)

output ""
output "Prices from lowest to highest:"
for each price in sortedPrices
    output "${price}"

// Find products by sorted price
output ""
output "Products sorted by price:"
for each sortedPrice in sortedPrices
    for i from 0 to length of prices - 1
        if prices[i] equals sortedPrice
            output "{productNames[i]}: ${sortedPrice}"
            jump  // Move to next sorted price
```

## When to Use Bubble Sort

**Advantages:**

- Simple to understand and implement
- Works well on small datasets (< 50 elements)
- Stable sort (maintains relative order of equal elements)
- Sorts in-place (no extra memory needed)
- Can detect if array is already sorted (with optimization)

**Disadvantages:**

- Very slow on large datasets - O(n²) time complexity
- Many more swaps than other algorithms
- Not practical for real-world large-scale applications

**Use bubble sort when:**

- Learning sorting algorithms (educational purposes)
- Array is very small (< 50 elements)
- Array is nearly sorted
- Simplicity is more important than efficiency
- You need a stable sort with minimal code

**Use other sorting algorithms when:**

- Array is large (> 100 elements)
- Performance is critical
- Consider: Quick Sort, Merge Sort, or built-in sort functions

## Comparison with Other Sorts

```pscode
// Time to sort 10,000 elements (approximate):
// Bubble Sort: ~100 ms
// Quick Sort: ~1 ms
// Merge Sort: ~2 ms
// Built-in sort(): ~0.5 ms

// For 100 elements:
// Bubble Sort: ~1 ms (acceptable)
// Quick Sort: ~0.01 ms
```

## Common Mistakes

1. **Off-by-one errors in loop bounds**

   ```pscode
   // WRONG
   for j from 0 to n - 1  // Will go out of bounds

   // CORRECT
   for j from 0 to n - i - 2
   ```

2. **Forgetting to swap**

   ```pscode
   // WRONG - doesn't actually swap
   array[j] = array[j + 1]
   array[j + 1] = array[j]

   // CORRECT - use temporary variable
   temp = array[j]
   array[j] = array[j + 1]
   array[j + 1] = temp
   ```

3. **Not reducing range each pass**

   ```pscode
   // INEFFICIENT - checks already-sorted elements
   for j from 0 to n - 2

   // EFFICIENT - reduces range each pass
   for j from 0 to n - i - 2
   ```
