---
title: Input Validation
description: Techniques for validating user input in Common Pseudocode
---

Input validation ensures that user-provided data meets expected criteria before processing. This example demonstrates various validation techniques.

## Basic Validation Functions

### Validate Numeric Input

```pscode
function getValidNumber takes in prompt and min and max
    valid = false
    value = 0

    while NOT valid
        output prompt
        input userInput

        if is number(userInput)
            value = convert userInput to number

            if value >= min AND value <= max
                valid = true
            else
                output "Error: Number must be between {min} and {max}"
        else
            output "Error: Please enter a valid number"

    return value

// Usage
age = getValidNumber("Enter your age (0-120): ", 0, 120)
output "Age accepted: {age}"
```

### Validate String Input

```pscode
function getValidString takes in prompt and minLength and maxLength
    valid = false
    text = ""

    while NOT valid
        output prompt
        input userInput

        if NOT is string(userInput)
            output "Error: Please enter text"
        else if length of userInput < minLength
            output "Error: Must be at least {minLength} characters"
        else if length of userInput > maxLength
            output "Error: Must be no more than {maxLength} characters"
        else
            text = userInput
            valid = true

    return text

// Usage
name = getValidString("Enter your name (2-50 chars): ", 2, 50)
output "Name accepted: {name}"
```

### Validate Yes/No Input

```pscode
function getYesNo takes in prompt
    valid = false
    answer = false

    while NOT valid
        output prompt " (yes/no): "
        input userInput
        userInput = userInput to lowercase
        userInput = trim(userInput)

        if userInput equals "yes" OR userInput equals "y"
            answer = true
            valid = true
        else if userInput equals "no" OR userInput equals "n"
            answer = false
            valid = true
        else
            output "Error: Please enter 'yes' or 'no'"

    return answer

// Usage
confirmed = getYesNo("Do you want to continue?")
if confirmed
    output "Proceeding..."
else
    output "Cancelled"
```

## Advanced Validation

### Validate Email Format

```pscode
function isValidEmail takes in email
    // Check if email is a string
    if NOT is string(email)
        return false

    // Check minimum length
    if length of email < 3
        return false

    // Check for @ symbol
    hasAt = email contains "@"
    if NOT hasAt
        return false

    // Check for . after @
    hasDot = email contains "."
    if NOT hasDot
        return false

    // Find @ position
    atPosition = find "@" in email

    // @ should not be first or last
    if atPosition equals 0 OR atPosition equals length of email - 1
        return false

    // Check for . after @
    afterAt = substring of email from atPosition to length of email
    if NOT afterAt contains "."
        return false

    return true

function getValidEmail takes in prompt
    valid = false
    email = ""

    while NOT valid
        output prompt
        input userInput

        if isValidEmail(userInput)
            email = userInput
            valid = true
        else
            output "Error: Invalid email format"
            output "Example: user@example.com"

    return email

// Usage
email = getValidEmail("Enter your email: ")
output "Email accepted: {email}"
```

### Validate Phone Number

```pscode
function isValidPhone takes in phone
    if NOT is string(phone)
        return false

    // Remove common formatting characters
    cleanPhone = ""
    for i from 0 to length of phone - 1
        char = phone[i]
        if char != "-" AND char != "(" AND char != ")" AND char != " "
            cleanPhone = cleanPhone char

    // Check if all remaining characters are digits
    if length of cleanPhone != 10
        return false

    // In real implementation, would check if all digits
    return true

function getValidPhone takes in prompt
    valid = false
    phone = ""

    while NOT valid
        output prompt
        input userInput

        if isValidPhone(userInput)
            phone = userInput
            valid = true
        else
            output "Error: Phone must be 10 digits"
            output "Format: (123) 456-7890 or 123-456-7890"

    return phone

// Usage
phone = getValidPhone("Enter phone number: ")
output "Phone accepted: {phone}"
```

### Validate Date Format

```pscode
function isValidDate takes in dateStr
    if NOT is string(dateStr)
        return false

    // Check format MM/DD/YYYY (length should be 10)
    if length of dateStr != 10
        return false

    // Check for slashes in correct positions
    if dateStr[2] != "/" OR dateStr[5] != "/"
        return false

    // Extract parts (simplified - would need proper parsing)
    // In real implementation, would parse and validate month, day, year
    return true

function getValidDate takes in prompt
    valid = false
    date = ""

    while NOT valid
        output prompt
        input userInput

        if isValidDate(userInput)
            date = userInput
            valid = true
        else
            output "Error: Invalid date format"
            output "Format: MM/DD/YYYY (e.g., 01/15/2024)"

    return date

// Usage
birthDate = getValidDate("Enter birth date: ")
output "Date accepted: {birthDate}"
```

## Menu Validation

### Validate Menu Choice

```pscode
function displayMenu takes in options
    output "Please select an option:"
    for i from 0 to length of options - 1
        output "{i + 1}. {options[i]}"

function getMenuChoice takes in options
    valid = false
    choice = 0

    while NOT valid
        displayMenu(options)
        output "Enter choice (1-{length of options}): "
        input userInput

        if is number(userInput)
            choice = convert userInput to number

            if choice >= 1 AND choice <= length of options
                valid = true
            else
                output "Error: Choice must be between 1 and {length of options}"
        else
            output "Error: Please enter a number"

    return choice

// Usage
menuOptions = ["New Game", "Load Game", "Settings", "Exit"]
choice = getMenuChoice(menuOptions)
output "You selected: {menuOptions[choice - 1]}"
```

## Complete Registration Form Example

```pscode
function getValidNumber takes in prompt and min and max
    valid = false
    value = 0
    while NOT valid
        output prompt
        input userInput
        if is number(userInput)
            value = convert userInput to number
            if value >= min AND value <= max
                valid = true
            else
                output "Error: Must be between {min} and {max}"
        else
            output "Error: Please enter a number"
    return value

function getValidString takes in prompt and minLen and maxLen
    valid = false
    text = ""
    while NOT valid
        output prompt
        input userInput
        if length of userInput < minLen
            output "Error: Must be at least {minLen} characters"
        else if length of userInput > maxLen
            output "Error: Must be no more than {maxLen} characters"
        else
            text = userInput
            valid = true
    return text

function isValidEmail takes in email
    if length of email < 3
        return false
    if NOT email contains "@"
        return false
    if NOT email contains "."
        return false
    return true

function getValidEmail takes in prompt
    valid = false
    email = ""
    while NOT valid
        output prompt
        input userInput
        if isValidEmail(userInput)
            email = userInput
            valid = true
        else
            output "Error: Invalid email format"
    return email

function getYesNo takes in prompt
    valid = false
    answer = false
    while NOT valid
        output prompt " (yes/no): "
        input userInput
        userInput = userInput to lowercase
        if userInput equals "yes" OR userInput equals "y"
            answer = true
            valid = true
        else if userInput equals "no" OR userInput equals "n"
            answer = false
            valid = true
        else
            output "Error: Enter 'yes' or 'no'"
    return answer

// Main registration program
output "===== User Registration ====="
output ""

// Collect validated input
firstName = getValidString("First name: ", 2, 50)
lastName = getValidString("Last name: ", 2, 50)
age = getValidNumber("Age: ", 13, 120)
email = getValidEmail("Email: ")

// Confirm terms
output ""
output "Terms and Conditions:"
output "1. You must be 13 or older"
output "2. You agree to our privacy policy"
output "3. You agree to our terms of service"
output ""
termsAccepted = getYesNo("Do you accept the terms?")

if NOT termsAccepted
    output "Registration cancelled"
    exit

// Display summary
output ""
output "===== Registration Summary ====="
output "Name: {firstName} {lastName}"
output "Age: {age}"
output "Email: {email}"
output ""

confirmed = getYesNo("Is this information correct?")

if confirmed
    output "Registration successful!"
    output "Welcome, {firstName}!"
else
    output "Registration cancelled"
```

## Password Validation

```pscode
function isStrongPassword takes in password
    if length of password < 8
        output "Password must be at least 8 characters"
        return false

    // Would check for:
    // - At least one uppercase letter
    // - At least one lowercase letter
    // - At least one number
    // - At least one special character

    // Simplified version
    if length of password >= 8
        return true

    return false

function getValidPassword takes in prompt
    valid = false
    password = ""

    while NOT valid
        output prompt
        input password

        if isStrongPassword(password)
            output "Confirm password: "
            input confirmPassword

            if password equals confirmPassword
                valid = true
            else
                output "Error: Passwords do not match"
        else
            output "Error: Password not strong enough"
            output "Requirements:"
            output "- At least 8 characters"

    return password

// Usage
password = getValidPassword("Create password: ")
output "Password created successfully"
```

## Validation Best Practices

1. **Always validate user input** - Never trust user input
2. **Provide clear error messages** - Tell users what went wrong and how to fix it
3. **Give examples** - Show the expected format
4. **Use type checking** - Verify data types before processing
5. **Set reasonable limits** - Define min/max values
6. **Sanitize input** - Trim whitespace, convert case when appropriate
7. **Confirm important actions** - Ask for confirmation on critical operations
8. **Allow retry** - Let users correct mistakes without restarting

## Common Validation Patterns

```pscode
// Range validation
if value < min OR value > max
    output "Error: Value out of range"

// Required field
if length of input equals 0
    output "Error: This field is required"

// Exact length (e.g., ZIP code)
if length of zipCode != 5
    output "Error: ZIP code must be 5 digits"

// Whitelist validation
validColors = ["red", "blue", "green", "yellow"]
if NOT color is in validColors
    output "Error: Invalid color"

// Pattern matching (simplified)
if NOT input contains "@"
    output "Error: Email must contain @"
```
