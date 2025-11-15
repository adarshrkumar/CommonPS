---
title: Array Statistics
description: Calculate statistical measures for arrays in Common Pseudocode
---

This example demonstrates how to calculate common statistical measures for an array of numbers: sum, average, minimum, maximum, and range.

## Complete Implementation

```pscode
function calculateStatistics takes in array
    if length of array equals 0
        output "Error: Cannot calculate statistics on empty array"
        return null

    // Initialize values
    sum = 0
    min = array[0]
    max = array[0]

    // Single pass through array
    for each value in array
        sum = sum + value

        if value < min
            min = value

        if value > max
            max = value

    // Calculate derived statistics
    count = length of array
    average = sum / count
    range = max - min

    // Return all statistics
    return [sum, average, min, max, range, count]
```

## Usage Examples

### Example 1: Test Score Analysis

```pscode
testScores = [78, 92, 85, 67, 95, 88, 72, 90]

stats = calculateStatistics(testScores)

output "Test Score Statistics:"
output "Total Points: {stats[0]}"
output "Average Score: {stats[1]}"
output "Lowest Score: {stats[2]}"
output "Highest Score: {stats[3]}"
output "Range: {stats[4]}"
output "Number of Students: {stats[5]}"

/* Output:
   Total Points: 667
   Average Score: 83.375
   Lowest Score: 67
   Highest Score: 95
   Range: 28
   Number of Students: 8 */
```

### Example 2: Temperature Analysis

```pscode
temperatures = [72, 75, 68, 80, 77, 71, 73]

stats = calculateStatistics(temperatures)

output "Weekly Temperature Analysis:"
output "Average Temperature: {stats[1]}°F"
output "Coldest Day: {stats[2]}°F"
output "Warmest Day: {stats[3]}°F"
output "Temperature Variation: {stats[4]}°F"

/* Output:
   Average Temperature: 73.71°F
   Coldest Day: 68°F
   Warmest Day: 80°F
   Temperature Variation: 12°F */
```

### Example 3: Sales Performance

```pscode
monthlySales = [45000, 52000, 48000, 67000, 59000, 51000]

stats = calculateStatistics(monthlySales)

output "Sales Performance Report:"
output "Total Revenue: ${stats[0]}"
output "Average Monthly Sales: ${stats[1]}"
output "Best Month: ${stats[3]}"
output "Worst Month: ${stats[2]}"
output "Performance Range: ${stats[4]}"

// Calculate percentage above/below average
for i from 0 to length of monthlySales - 1
    difference = monthlySales[i] - stats[1]
    percentage = (difference / stats[1]) * 100
    output "Month {i + 1}: {percentage}% vs average"
```

## Individual Statistical Functions

### Calculate Sum

```pscode
function calculateSum takes in array
    sum = 0
    for each value in array
        sum = sum + value
    return sum

numbers = [10, 20, 30, 40, 50]
total = calculateSum(numbers)
output "Sum: {total}"  // Output: 150
```

### Calculate Average

```pscode
function calculateAverage takes in array
    if length of array equals 0
        return 0

    sum = 0
    for each value in array
        sum = sum + value

    return sum / length of array

scores = [85, 90, 78, 92, 88]
avg = calculateAverage(scores)
output "Average: {avg}"  // Output: 86.6
```

### Calculate Median

Find the middle value when sorted:

```pscode
function calculateMedian takes in array
    if length of array equals 0
        return null

    // Create sorted copy
    sortedArray = []
    for each value in array
        append value to sortedArray
    sort sortedArray in ascending order

    n = length of sortedArray
    middle = floor(n / 2)

    if n % 2 equals 1
        // Odd number of elements
        return sortedArray[middle]
    else
        // Even number of elements - average of two middle values
        return (sortedArray[middle - 1] + sortedArray[middle]) / 2

numbers = [15, 3, 8, 21, 12]
median = calculateMedian(numbers)
output "Median: {median}"  // Output: 12 (sorted: 3,8,12,15,21)

evenNumbers = [10, 20, 30, 40]
median = calculateMedian(evenNumbers)
output "Median: {median}"  // Output: 25 (average of 20 and 30)
```

### Calculate Mode

Find the most frequently occurring value:

```pscode
function calculateMode takes in array
    if length of array equals 0
        return null

    maxCount = 0
    mode = array[0]

    for each value in array
        count = 0

        // Count occurrences of this value
        for each compareValue in array
            if compareValue equals value
                count++

        // Update mode if this value appears more frequently
        if count > maxCount
            maxCount = count
            mode = value

    return mode

numbers = [2, 3, 2, 5, 2, 7, 3]
mode = calculateMode(numbers)
output "Mode: {mode}"  // Output: 2 (appears 3 times)
```

### Calculate Standard Deviation

Measure of variation from the average:

```pscode
function calculateStandardDeviation takes in array
    if length of array < 2
        return 0

    // Calculate average
    sum = 0
    for each value in array
        sum = sum + value
    average = sum / length of array

    // Calculate sum of squared differences
    sumSquaredDiff = 0
    for each value in array
        diff = value - average
        sumSquaredDiff = sumSquaredDiff + (diff ^ 2)

    // Calculate variance and standard deviation
    variance = sumSquaredDiff / (length of array - 1)
    standardDev = sqrt of variance

    return standardDev

scores = [85, 90, 78, 92, 88, 75, 95]
stdDev = calculateStandardDeviation(scores)
output "Standard Deviation: {stdDev}"
```

## Complete Statistics Program

```pscode
// All statistical functions
function calculateSum takes in array
    sum = 0
    for each value in array
        sum = sum + value
    return sum

function calculateAverage takes in array
    if length of array equals 0
        return 0
    return calculateSum(array) / length of array

function findMin takes in array
    if length of array equals 0
        return null
    min = array[0]
    for each value in array
        if value < min
            min = value
    return min

function findMax takes in array
    if length of array equals 0
        return null
    max = array[0]
    for each value in array
        if value > max
            max = value
    return max

// Main program
output "Student Grade Analyzer"
output ""

// Get number of students
output "How many students? "
input studentCount
studentCount = convert studentCount to number

// Collect grades
grades = []
output "Enter grades:"
for i from 1 to studentCount
    output "Student {i}: "
    input grade
    grade = convert grade to number
    append grade to grades

// Calculate statistics
sum = calculateSum(grades)
avg = calculateAverage(grades)
min = findMin(grades)
max = findMax(grades)
range = max - min

// Display results
output ""
output "Class Statistics:"
output "===================="
output "Number of Students: {studentCount}"
output "Total Points: {sum}"
output "Class Average: {avg}"
output "Highest Grade: {max}"
output "Lowest Grade: {min}"
output "Range: {range}"

// Determine letter grade for average
letterGrade = ""
if avg >= 90
    letterGrade = "A"
else if avg >= 80
    letterGrade = "B"
else if avg >= 70
    letterGrade = "C"
else if avg >= 60
    letterGrade = "D"
else
    letterGrade = "F"

output "Class Letter Grade: {letterGrade}"

// Count grades above and below average
aboveAvg = 0
belowAvg = 0
for each grade in grades
    if grade > avg
        aboveAvg++
    else if grade < avg
        belowAvg++

output ""
output "Above Average: {aboveAvg} students"
output "Below Average: {belowAvg} students"
output "At Average: {studentCount - aboveAvg - belowAvg} students"
```

## Histogram Generator

Visualize data distribution:

```pscode
function generateHistogram takes in array and binSize
    if length of array equals 0
        output "No data to display"
        return

    min = findMin(array)
    max = findMax(array)

    // Create bins
    currentBin = min
    output "Histogram:"
    output "==========="

    while currentBin <= max
        // Count values in this bin
        count = 0
        binEnd = currentBin + binSize

        for each value in array
            if value >= currentBin AND value < binEnd
                count++

        // Display bar
        output "{currentBin}-{binEnd}: "
        for i from 1 to count
            output "*"

        currentBin = binEnd

scores = [65, 72, 78, 85, 88, 92, 75, 68, 90, 95, 82, 88]
generateHistogram(scores, 10)

// Output:
// 65-75: ***
// 75-85: ***
// 85-95: *****
// 95-105: *
```

## Percentile Calculation

Find the value below which a percentage of data falls:

```pscode
function calculatePercentile takes in array and percentile
    if length of array equals 0
        return null

    // Sort array
    sortedArray = []
    for each value in array
        append value to sortedArray
    sort sortedArray in ascending order

    // Calculate index
    index = ceil((percentile / 100) * length of sortedArray) - 1

    if index < 0
        index = 0
    if index >= length of sortedArray
        index = length of sortedArray - 1

    return sortedArray[index]

scores = [65, 72, 78, 85, 88, 92, 75, 68, 90, 95]

p25 = calculatePercentile(scores, 25)  // 25th percentile
p50 = calculatePercentile(scores, 50)  // 50th percentile (median)
p75 = calculatePercentile(scores, 75)  // 75th percentile

output "25th Percentile: {p25}"
output "50th Percentile (Median): {p50}"
output "75th Percentile: {p75}"
```
