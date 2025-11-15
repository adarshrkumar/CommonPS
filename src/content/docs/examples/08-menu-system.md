---
title: Menu System
description: Creating interactive menu-driven programs in Common Pseudocode
---

Menu systems provide a user-friendly interface for interactive programs. This example demonstrates how to build menu-driven applications.

## Basic Menu System

```pscode
function displayMenu
    output "===== Main Menu ====="
    output "1. Option One"
    output "2. Option Two"
    output "3. Option Three"
    output "4. Exit"
    output "====================="

function getMenuChoice
    output "Enter your choice (1-4): "
    input choice
    return convert choice to number

// Main program loop
running = true

while running
    displayMenu()
    choice = getMenuChoice()

    switch choice
        case 1
            output "You selected Option One"
            jump
        case 2
            output "You selected Option Two"
            jump
        case 3
            output "You selected Option Three"
            jump
        case 4
            output "Goodbye!"
            running = false
        default
            output "Invalid choice. Please try again."
```

## Complete Calculator Menu

```pscode
function displayMenu
    output ""
    output "===== Calculator ====="
    output "1. Add"
    output "2. Subtract"
    output "3. Multiply"
    output "4. Divide"
    output "5. Exit"
    output "======================"

function getNumber takes in prompt
    output prompt
    input num
    return convert num to number

function add takes in a and b
    return a + b

function subtract takes in a and b
    return a - b

function multiply takes in a and b
    return a * b

function divide takes in a and b
    if b equals 0
        output "Error: Cannot divide by zero"
        return null
    return a / b

// Main program
running = true

while running
    displayMenu()
    output "Enter choice: "
    input choice
    choice = convert choice to number

    if choice >= 1 AND choice <= 4
        num1 = getNumber("Enter first number: ")
        num2 = getNumber("Enter second number: ")

    switch choice
        case 1
            result = add(num1, num2)
            output "{num1} + {num2} = {result}"
            jump
        case 2
            result = subtract(num1, num2)
            output "{num1} - {num2} = {result}"
            jump
        case 3
            result = multiply(num1, num2)
            output "{num1} * {num2} = {result}"
            jump
        case 4
            result = divide(num1, num2)
            if result != null
                output "{num1} / {num2} = {result}"
            jump
        case 5
            output "Thank you for using Calculator!"
            running = false
        default
            output "Invalid choice. Please enter 1-5."

    if choice >= 1 AND choice <= 4
        output ""
        output "Press Enter to continue..."
        input pause
```

## Student Management System

```pscode
// Global data
students = []
grades = []

function displayMainMenu
    output ""
    output "===== Student Management System ====="
    output "1. Add Student"
    output "2. View All Students"
    output "3. Search Student"
    output "4. Update Grade"
    output "5. Delete Student"
    output "6. Calculate Class Average"
    output "7. Exit"
    output "====================================="

function addStudent
    output ""
    output "=== Add New Student ==="
    output "Enter student name: "
    input name

    output "Enter grade (0-100): "
    input grade
    grade = convert grade to number

    if grade < 0 OR grade > 100
        output "Error: Grade must be between 0 and 100"
        return

    append name to students
    append grade to grades
    output "Student added successfully!"

function viewAllStudents
    output ""
    output "=== All Students ==="

    if length of students equals 0
        output "No students in system"
        return

    for i from 0 to length of students - 1
        output "{i + 1}. {students[i]}: {grades[i]}"

function searchStudent
    output ""
    output "=== Search Student ==="
    output "Enter student name: "
    input searchName

    found = false
    for i from 0 to length of students - 1
        if students[i] equals searchName
            output "Student found:"
            output "Name: {students[i]}"
            output "Grade: {grades[i]}"
            found = true
            jump

    if NOT found
        output "Student not found"

function updateGrade
    output ""
    output "=== Update Grade ==="
    output "Enter student name: "
    input name

    for i from 0 to length of students - 1
        if students[i] equals name
            output "Current grade: {grades[i]}"
            output "Enter new grade (0-100): "
            input newGrade
            newGrade = convert newGrade to number

            if newGrade >= 0 AND newGrade <= 100
                grades[i] = newGrade
                output "Grade updated successfully!"
            else
                output "Error: Grade must be between 0 and 100"
            return

    output "Student not found"

function deleteStudent
    output ""
    output "=== Delete Student ==="
    output "Enter student name: "
    input name

    for i from 0 to length of students - 1
        if students[i] equals name
            output "Delete {students[i]}? (yes/no): "
            input confirm
            confirm = confirm to lowercase

            if confirm equals "yes"
                remove element at index i from students
                remove element at index i from grades
                output "Student deleted successfully!"
            else
                output "Deletion cancelled"
            return

    output "Student not found"

function calculateAverage
    output ""
    output "=== Class Average ==="

    if length of grades equals 0
        output "No students in system"
        return

    sum = 0
    for each grade in grades
        sum = sum + grade

    average = sum / length of grades
    output "Number of students: {length of students}"
    output "Class average: {average}"

// Main program
output "Welcome to Student Management System"
running = true

while running
    displayMainMenu()
    output "Enter choice (1-7): "
    input choice
    choice = convert choice to number

    switch choice
        case 1
            addStudent()
            jump
        case 2
            viewAllStudents()
            jump
        case 3
            searchStudent()
            jump
        case 4
            updateGrade()
            jump
        case 5
            deleteStudent()
            jump
        case 6
            calculateAverage()
            jump
        case 7
            output "Goodbye!"
            running = false
        default
            output "Invalid choice. Please enter 1-7."

    if choice != 7
        output ""
        output "Press Enter to continue..."
        input pause
```

## Library Book System

```pscode
// Book database
bookTitles = ["1984", "Brave New World", "Fahrenheit 451"]
bookAuthors = ["George Orwell", "Aldous Huxley", "Ray Bradbury"]
bookAvailable = [true, true, true]

function displayMainMenu
    output ""
    output "===== Library System ====="
    output "1. View All Books"
    output "2. Search Books"
    output "3. Checkout Book"
    output "4. Return Book"
    output "5. Add New Book"
    output "6. Exit"
    output "=========================="

function viewAllBooks
    output ""
    output "=== Library Catalog ==="
    output ""

    if length of bookTitles equals 0
        output "No books in library"
        return

    for i from 0 to length of bookTitles - 1
        status = ""
        if bookAvailable[i]
            status = "Available"
        else
            status = "Checked Out"

        output "{i + 1}. {bookTitles[i]}"
        output "   Author: {bookAuthors[i]}"
        output "   Status: {status}"
        output ""

function searchBooks
    output ""
    output "=== Search Books ==="
    output "Enter search term: "
    input searchTerm
    searchTerm = searchTerm to lowercase

    found = false

    for i from 0 to length of bookTitles - 1
        titleLower = bookTitles[i] to lowercase
        authorLower = bookAuthors[i] to lowercase

        if titleLower contains searchTerm OR authorLower contains searchTerm
            status = ""
            if bookAvailable[i]
                status = "Available"
            else
                status = "Checked Out"

            output ""
            output "Found: {bookTitles[i]}"
            output "Author: {bookAuthors[i]}"
            output "Status: {status}"
            found = true

    if NOT found
        output "No books found matching '{searchTerm}'"

function checkoutBook
    output ""
    output "=== Checkout Book ==="
    viewAllBooks()

    output "Enter book number to checkout: "
    input bookNum
    bookNum = convert bookNum to number
    index = bookNum - 1

    if index < 0 OR index >= length of bookTitles
        output "Invalid book number"
        return

    if NOT bookAvailable[index]
        output "Sorry, '{bookTitles[index]}' is already checked out"
        return

    bookAvailable[index] = false
    output "Successfully checked out '{bookTitles[index]}'"

function returnBook
    output ""
    output "=== Return Book ==="

    // Show only checked out books
    hasCheckouts = false
    for i from 0 to length of bookTitles - 1
        if NOT bookAvailable[i]
            output "{i + 1}. {bookTitles[i]}"
            hasCheckouts = true

    if NOT hasCheckouts
        output "No books are currently checked out"
        return

    output ""
    output "Enter book number to return: "
    input bookNum
    bookNum = convert bookNum to number
    index = bookNum - 1

    if index < 0 OR index >= length of bookTitles
        output "Invalid book number"
        return

    if bookAvailable[index]
        output "'{bookTitles[index]}' is not checked out"
        return

    bookAvailable[index] = true
    output "Successfully returned '{bookTitles[index]}'"

function addNewBook
    output ""
    output "=== Add New Book ==="
    output "Enter book title: "
    input title

    output "Enter author name: "
    input author

    append title to bookTitles
    append author to bookAuthors
    append true to bookAvailable

    output "Book added successfully!"

// Main program
output "Welcome to the Library System"
running = true

while running
    displayMainMenu()
    output "Enter choice (1-6): "
    input choice
    choice = convert choice to number

    switch choice
        case 1
            viewAllBooks()
            jump
        case 2
            searchBooks()
            jump
        case 3
            checkoutBook()
            jump
        case 4
            returnBook()
            jump
        case 5
            addNewBook()
            jump
        case 6
            output "Thank you for using the Library System!"
            running = false
        default
            output "Invalid choice. Please enter 1-6."

    if choice != 6
        output ""
        output "Press Enter to continue..."
        input pause
```

## Menu Best Practices

1. **Clear options** - Use descriptive menu labels
2. **Consistent numbering** - Start from 1 for user-friendliness
3. **Always include Exit** - Let users quit gracefully
4. **Validate input** - Check for valid menu choices
5. **Provide feedback** - Confirm actions with messages
6. **Pause between screens** - Wait for user to press Enter
7. **Clear separation** - Use visual separators for readability
8. **Breadcrumbs** - Show current location in nested menus

## Nested Menu Example

```pscode
function mainMenu
    output "=== Main Menu ==="
    output "1. Settings"
    output "2. Data"
    output "3. Exit"

function settingsMenu
    output "=== Settings ==="
    output "1. Display Settings"
    output "2. Sound Settings"
    output "3. Back to Main Menu"

// Main program with nested menus
mainRunning = true

while mainRunning
    mainMenu()
    output "Choice: "
    input mainChoice
    mainChoice = convert mainChoice to number

    switch mainChoice
        case 1
            settingsRunning = true
            while settingsRunning
                settingsMenu()
                output "Choice: "
                input settingsChoice
                settingsChoice = convert settingsChoice to number

                switch settingsChoice
                    case 1
                        output "Display settings..."
                        jump
                    case 2
                        output "Sound settings..."
                        jump
                    case 3
                        settingsRunning = false
                    default
                        output "Invalid choice"
            jump
        case 2
            output "Data menu..."
            jump
        case 3
            mainRunning = false
        default
            output "Invalid choice"
```
