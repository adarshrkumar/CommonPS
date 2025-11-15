---
title: Find Maximum
description: Finding the largest value in an array in Common Pseudocode
---

Finding the maximum (largest) value in an array is a fundamental operation in programming. This example demonstrates how to find the maximum value and its position.

## Algorithm

The find maximum algorithm:

1. Check if the array is empty (edge case)
2. Assume the first element is the maximum
3. Compare each remaining element with the current maximum
4. Update the maximum whenever a larger element is found
5. Return the maximum value

## Basic Implementation

```pscode
function findMax takes in array
    if length of array equals 0
        return null

    max = array[0]
    for each value in array
        if value > max
            max = value

    return max
```

## How It Works

**Example:** Finding max in `[3, 7, 2, 9, 4, 1, 8]`

```text
Step 1: max = 3 (first element)
Step 2: Compare 7 > 3? Yes → max = 7
Step 3: Compare 2 > 7? No → max = 7
Step 4: Compare 9 > 7? Yes → max = 9
Step 5: Compare 4 > 9? No → max = 9
Step 6: Compare 1 > 9? No → max = 9
Step 7: Compare 8 > 9? No → max = 9
Result: max = 9
```

**Time Complexity:** O(n) - Must check every element
**Space Complexity:** O(1) - Only uses a few variables

## Usage Examples

### Example 1: Find Maximum Number

```pscode
numbers = [45, 23, 78, 12, 90, 34, 67]

maximum = findMax(numbers)
output "The maximum value is: {maximum}"

// Output: The maximum value is: 90
```

### Example 2: Find Highest Score

```pscode
testScores = [78, 92, 85, 67, 95, 88, 72]

highestScore = findMax(testScores)
output "Highest test score: {highestScore}"

// Calculate curve
curve = 100 - highestScore
output "Curve: +{curve} points"

// Output:
// Highest test score: 95
// Curve: +5 points
```

### Example 3: Find Maximum with User Input

```pscode
temperatures = []
days = 7

output "Enter temperatures for {days} days:"
for i from 1 to days
    output "Day {i}: "
    input temp
    temp = convert temp to number
    append temp to temperatures

maxTemp = findMax(temperatures)
output "Highest temperature: {maxTemp}°F"
```

## Variations

### Find Maximum and Its Index

Return both the value and position:

```pscode
function findMaxWithIndex takes in array
    if length of array equals 0
        return null

    maxValue = array[0]
    maxIndex = 0

    for i from 1 to length of array - 1
        if array[i] > maxValue
            maxValue = array[i]
            maxIndex = i

    return [maxValue, maxIndex]

numbers = [45, 23, 78, 12, 90, 34, 67]
result = findMaxWithIndex(numbers)
output "Max value: {result[0]} at index {result[1]}"
// Output: Max value: 90 at index 4
```

### Find Multiple Maximums

Find all occurrences of the maximum value:

```pscode
function findAllMax takes in array
    if length of array equals 0
        return []

    maxValue = findMax(array)
    indices = []

    for i from 0 to length of array - 1
        if array[i] equals maxValue
            append i to indices

    return indices

scores = [95, 87, 95, 92, 95, 88]
maxIndices = findAllMax(scores)
output "Maximum score appears at indices: "
for each index in maxIndices
    output index  // Output: 0, 2, 4
```

### Find N Largest Values

Find the top N values in an array:

```pscode
function findTopN takes in array and n
    if length of array <= n
        return array

    topValues = []

    // Create a copy to avoid modifying original
    arrayCopy = []
    for each value in array
        append value to arrayCopy

    // Find top N values
    for i from 1 to n
        max = findMax(arrayCopy)
        append max to topValues

        // Remove max from copy
        for j from 0 to length of arrayCopy - 1
            if arrayCopy[j] equals max
                remove element at index j from arrayCopy
                jump

    return topValues

scores = [78, 92, 85, 67, 95, 88, 72, 90]
top3 = findTopN(scores, 3)
output "Top 3 scores: "
for each score in top3
    output score  // Output: 95, 92, 90
```

### Find Maximum in 2D Array

Find the maximum value in a 2D array:

```pscode
function findMax2D takes in grid
    if length of grid equals 0
        return null

    max = grid[0][0]

    for each row in grid
        for each value in row
            if value > max
                max = value

    return max

matrix = [[5, 12, 3], [8, 15, 7], [4, 9, 11]]
maximum = findMax2D(matrix)
output "Maximum value: {maximum}"  // Output: 15
```

### Find Maximum with Condition

Find the maximum value that meets a certain condition:

```pscode
function findMaxLessThan takes in array and threshold
    max = null
    found = false

    for each value in array
        if value < threshold
            if NOT found OR value > max
                max = value
                found = true

    return max

numbers = [45, 78, 23, 90, 34, 67, 85]
maxUnder80 = findMaxLessThan(numbers, 80)
output "Largest number under 80: {maxUnder80}"  // Output: 78
```

## Complete Example Program

```pscode
function findMax takes in array
    if length of array equals 0
        return null

    max = array[0]
    for each value in array
        if value > max
            max = value

    return max

function findMaxWithIndex takes in array
    if length of array equals 0
        return null

    maxValue = array[0]
    maxIndex = 0

    for i from 1 to length of array - 1
        if array[i] > maxValue
            maxValue = array[i]
            maxIndex = i

    return [maxValue, maxIndex]

// Main program - Sales Analysis
output "Monthly Sales Analysis"
output ""

salesPeople = ["Alice", "Bob", "Charlie", "David", "Eve"]
monthlySales = [45000, 67000, 52000, 89000, 71000]

output "Sales data:"
for i from 0 to length of salesPeople - 1
    output "{salesPeople[i]}: ${monthlySales[i]}"

// Find top performer
result = findMaxWithIndex(monthlySales)
topSales = result[0]
topIndex = result[1]

output ""
output "Top Performer: {salesPeople[topIndex]}"
output "Sales: ${topSales}"

// Calculate bonus (10% of sales)
bonus = topSales * 0.10
output "Bonus earned: ${bonus}"

// Calculate average
totalSales = 0
for each sale in monthlySales
    totalSales = totalSales + sale

avgSales = totalSales / length of monthlySales
output ""
output "Average sales: ${avgSales}"
output "Above average by: ${topSales - avgSales}"
```

## Related Operations

### Find Minimum

Finding the minimum is similar, just reverse the comparison:

```pscode
function findMin takes in array
    if length of array equals 0
        return null

    min = array[0]
    for each value in array
        if value < min  // Changed from >
            min = value

    return min
```

### Find Range

Find the difference between maximum and minimum:

```pscode
function findRange takes in array
    if length of array equals 0
        return 0

    max = findMax(array)
    min = findMin(array)
    range = max - min

    return range

numbers = [23, 45, 12, 67, 34]
range = findRange(numbers)
output "Range: {range}"  // Output: 55 (67 - 12)
```

### Find Second Largest

Find the second-largest value:

```pscode
function findSecondMax takes in array
    if length of array < 2
        return null

    first = array[0]
    second = null

    for each value in array
        if value > first
            second = first
            first = value
        else if second equals null OR value > second AND value < first
            second = value

    return second

numbers = [45, 78, 23, 90, 67]
secondMax = findSecondMax(numbers)
output "Second largest: {secondMax}"  // Output: 78
```

## Using Built-in Functions

You can also use the built-in `max()` function:

```pscode
numbers = [45, 23, 78, 12, 90, 34, 67]

maximum = max(numbers[0], numbers[1], numbers[2])
// or
maximum = run max with numbers[0] and numbers[1] and numbers[2]

// For the entire array, use the custom function
maximum = findMax(numbers)
```

## When to Use Each Approach

**Custom findMax function:**

- Need the index of the maximum
- Need to find multiple maximums
- Working with complex conditions
- Educational purposes

**Built-in max() function:**

- Quick comparison of a few values
- When you only need the value, not the position
- When available in your implementation

## Common Mistakes

1. **Not checking for empty array**

   ```pscode
   // WRONG - crashes on empty array
   max = array[0]

   // CORRECT - check first
   if length of array equals 0
       return null
   max = array[0]
   ```

2. **Starting comparison from index 0**

   ```pscode
   // INEFFICIENT - compares first element to itself
   for i from 0 to length of array - 1

   // EFFICIENT - start from second element
   for i from 1 to length of array - 1
   ```

3. **Forgetting negative numbers**

   ```pscode
   // WRONG - assumes max starts at 0
   max = 0
   // Fails on arrays like [-5, -2, -8]

   // CORRECT - start with first element
   max = array[0]
   ```
