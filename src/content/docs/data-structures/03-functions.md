---
title: Functions and Procedures
description: Creating reusable code with functions and procedures in Common Pseudocode
---

Functions allow you to organize code into reusable blocks that can be called from different parts of your program. They're essential for writing clean, maintainable code.

## Basic Function

A function that returns a value:

```pscode
function hello takes in nothing
    return "world"
```

Or simply:

```pscode
function hello
    return "world"
```

## Functions with Parameters

### Single Parameter

```pscode
function square takes in number
    return number * number

result = square(5)  // Returns 25
```

### Multiple Parameters

```pscode
function add takes in num1 and num2
    return num1 + num2

sum = add(10, 20)  // Returns 30
```

### Three or More Parameters

```pscode
function calculateVolume takes in length and width and height
    volume = length * width * height
    return volume

volume = calculateVolume(5, 3, 2)  // Returns 30
```

## Calling Functions

### Standard Syntax

```pscode
result = functionName(arg1, arg2)
```

### Natural Language Syntax

```pscode
result = run functionName with arg1 and arg2
```

### Example

```pscode
function multiply takes in a and b
    return a * b

// Both ways work
result1 = multiply(5, 3)
result2 = run multiply with 5 and 3
```

## Procedures (No Return Value)

Functions that perform actions but don't return a value:

```pscode
function printGreeting takes in name
    output "Hello, {name}!"
    output "Welcome to the program!"

// Call the procedure
printGreeting("Alice")
// Output:
// Hello, Alice!
// Welcome to the program!
```

## Return Statements

### Early Return

Exit a function before reaching the end:

```pscode
function isAdult takes in age
    if age >= 18
        return true
    else
        return false

// Simplified version
function isAdult takes in age
    if age >= 18
        return true
    return false
```

### Multiple Return Points

```pscode
function getGrade takes in score
    if score >= 90
        return "A"
    else if score >= 80
        return "B"
    else if score >= 70
        return "C"
    else if score >= 60
        return "D"
    return "F"
```

### Return Multiple Values

Return an array with multiple values:

```pscode
function divideWithRemainder takes in dividend and divisor
    quotient = floor(dividend / divisor)
    remainder = dividend % divisor
    return [quotient, remainder]

result = divideWithRemainder(17, 5)
output "Quotient: {result[0]}"    // 3
output "Remainder: {result[1]}"   // 2
```

## Function Examples

### Temperature Converter

```pscode
function celsiusToFahrenheit takes in celsius
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit

function fahrenheitToCelsius takes in fahrenheit
    celsius = (fahrenheit - 32) * 5/9
    return celsius

// Usage
temp1 = celsiusToFahrenheit(25)
output "25°C = {temp1}°F"

temp2 = fahrenheitToCelsius(77)
output "77°F = {temp2}°C"
```

### Circle Calculations

```pscode
constant PI = 3.14159

function circleArea takes in radius
    return PI * radius ^ 2

function circleCircumference takes in radius
    return 2 * PI * radius

function circleDiameter takes in radius
    return 2 * radius

// Usage
radius = 5
output "Radius: {radius}"
output "Area: {circleArea(radius)}"
output "Circumference: {circleCircumference(radius)}"
output "Diameter: {circleDiameter(radius)}"
```

### String Utilities

```pscode
function reverse takes in text
    reversed = ""
    for i from length of text - 1 to 0
        reversed = reversed text[i]
    return reversed

function isPalindrome takes in text
    text = text to lowercase
    reversed = reverse(text)
    return text equals reversed

function countVowels takes in text
    vowels = "aeiouAEIOU"
    count = 0
    for i from 0 to length of text - 1
        if text[i] is in vowels
            count++
    return count

// Usage
word = "racecar"
output "'{word}' reversed: {reverse(word)}"
output "Is palindrome: {isPalindrome(word)}"
output "Vowel count: {countVowels(word)}"
```

### Array Operations

```pscode
function sum takes in array
    total = 0
    for each value in array
        total += value
    return total

function average takes in array
    if length of array equals 0
        return 0
    total = sum(array)
    return total / length of array

function maximum takes in array
    if length of array equals 0
        return null
    max = array[0]
    for each value in array
        if value > max
            max = value
    return max

function minimum takes in array
    if length of array equals 0
        return null
    min = array[0]
    for each value in array
        if value < min
            min = value
    return min

// Usage
numbers = [23, 45, 12, 67, 34, 89, 15]
output "Sum: {sum(numbers)}"
output "Average: {average(numbers)}"
output "Max: {maximum(numbers)}"
output "Min: {minimum(numbers)}"
```

### Validation Functions

```pscode
function isValidEmail takes in email
    if length of email < 3
        return false
    if NOT email contains "@"
        return false
    if NOT email contains "."
        return false
    return true

function isValidAge takes in age
    if NOT is number(age)
        return false
    if age < 0 OR age > 150
        return false
    return true

function isValidPassword takes in password
    if length of password < 8
        return false
    // Additional checks could go here
    return true

// Usage
email = "user@example.com"
if isValidEmail(email)
    output "Valid email"
else
    output "Invalid email"
```

### Recursive Functions

Functions that call themselves:

```pscode
function factorial takes in n
    if n <= 1
        return 1
    return n * factorial(n - 1)

// Usage
output "5! = {factorial(5)}"  // 120

function fibonacci takes in n
    if n <= 1
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

// Usage
output "Fibonacci(10) = {fibonacci(10)}"  // 55

function power takes in base and exponent
    if exponent equals 0
        return 1
    if exponent equals 1
        return base
    return base * power(base, exponent - 1)

// Usage
output "2^8 = {power(2, 8)}"  // 256
```

### Countdown Function

```pscode
function countdown takes in n
    if n <= 0
        output "Blast off!"
        return
    output n
    countdown(n - 1)

// Usage
countdown(5)
// Output:
// 5
// 4
// 3
// 2
// 1
// Blast off!
```

## Functions with Default Behavior

While Common Pseudocode doesn't have default parameters, you can handle missing values:

```pscode
function greet takes in name and greeting
    if greeting equals null OR greeting equals ""
        greeting = "Hello"

    output "{greeting}, {name}!"

// Usage
greet("Alice", "Hi")        // Hi, Alice!
greet("Bob", "")            // Hello, Bob!
```

## Higher-Order Functions

Functions that work with other functions:

```pscode
function applyOperation takes in array and operation
    result = []
    for each value in array
        newValue = operation(value)
        append newValue to result
    return result

function double takes in n
    return n * 2

function square takes in n
    return n * n

// Usage
numbers = [1, 2, 3, 4, 5]
doubled = applyOperation(numbers, double)
squared = applyOperation(numbers, square)
```

## Helper Functions

Break complex tasks into smaller functions:

```pscode
function isLeapYear takes in year
    if year % 4 != 0
        return false
    if year % 100 != 0
        return true
    if year % 400 == 0
        return true
    return false

function getDaysInMonth takes in month and year
    // April, June, September, November have 30 days
    if month equals 4 OR month equals 6 OR month equals 9 OR month equals 11
        return 30

    // February
    if month equals 2
        if isLeapYear(year)
            return 29
        return 28

    // All other months have 31 days
    return 31

function isValidDate takes in day and month and year
    if month < 1 OR month > 12
        return false

    maxDays = getDaysInMonth(month, year)
    if day < 1 OR day > maxDays
        return false

    return true

// Usage
if isValidDate(29, 2, 2024)
    output "Valid date"
else
    output "Invalid date"
```

## Function Documentation

Add comments to explain what functions do:

```pscode
// Calculates the area of a triangle using base and height
// Parameters:
//   base: the length of the triangle's base
//   height: the height of the triangle
// Returns: the area of the triangle
function triangleArea takes in base and height
    return (base * height) / 2

// Checks if a number is prime
// Parameters:
//   n: the number to check
// Returns: true if prime, false otherwise
function isPrime takes in n
    if n <= 1
        return false

    for i from 2 to sqrt of n
        if n % i equals 0
            return false

    return true
```

## Complete Example: Student Grade System

```pscode
function calculateAverage takes in grades
    if length of grades equals 0
        return 0
    sum = 0
    for each grade in grades
        sum += grade
    return sum / length of grades

function getLetterGrade takes in average
    if average >= 90
        return "A"
    else if average >= 80
        return "B"
    else if average >= 70
        return "C"
    else if average >= 60
        return "D"
    return "F"

function displayStudentReport takes in name and grades
    avg = calculateAverage(grades)
    letter = getLetterGrade(avg)

    output "===== Student Report ====="
    output "Name: {name}"
    output "Grades: "
    for i from 0 to length of grades - 1
        output "  Test {i + 1}: {grades[i]}"
    output "Average: {avg}"
    output "Letter Grade: {letter}"
    output "=========================="

function isPassingStudent takes in average
    return average >= 60

// Main program
studentName = "Alice Johnson"
studentGrades = [85, 92, 78, 88, 95]

displayStudentReport(studentName, studentGrades)

avg = calculateAverage(studentGrades)
if isPassingStudent(avg)
    output "Status: PASSING"
else
    output "Status: FAILING"
```

## Best Practices

### 1. One Purpose Per Function

```pscode
// Bad - does too much
function processUserAndSendEmail takes in user
    validateUser(user)
    saveToDatabase(user)
    sendWelcomeEmail(user)
    updateStatistics()

// Good - separate functions
function validateUser takes in user
    // validation only

function saveUser takes in user
    // saving only

function sendWelcomeEmail takes in user
    // email only
```

### 2. Use Descriptive Names

```pscode
// Bad
function calc takes in x and y
    return x * y

// Good
function calculateRectangleArea takes in width and height
    return width * height
```

### 3. Keep Functions Short

```pscode
// A function should do one thing well
// If it's too long, break it into smaller functions
function processOrder takes in order
    validateOrder(order)
    calculateTotal(order)
    applyDiscounts(order)
    processPayment(order)
    sendConfirmation(order)
```

### 4. Avoid Side Effects

```pscode
// Bad - modifies global variable
total = 0
function add takes in value
    total = total + value

// Good - returns a value
function add takes in current and value
    return current + value

total = add(total, 5)
```

### 5. Validate Parameters

```pscode
function divide takes in numerator and denominator
    if denominator equals 0
        output "Error: Division by zero"
        return null

    return numerator / denominator
```

### 6. Return Early

```pscode
function processValue takes in value
    // Check invalid cases first
    if value equals null
        return null

    if value < 0
        return 0

    // Main logic
    return value * 2
```
