---
title: Error Handling
description: Handling errors gracefully with try-catch blocks in Common Pseudocode
---

Error handling allows your programs to gracefully manage unexpected situations and failures without crashing. Common Pseudocode provides try-catch blocks for this purpose.

## Basic Try-Catch

```pscode
try
    result = 10 / 0
catch error
    output "An error occurred: {error}"
```

The `try` block contains code that might fail, and the `catch` block handles the error.

## Try-Catch-Finally

The `finally` block always executes, whether an error occurred or not:

```pscode
try
    result = riskyOperation()
catch error
    output "Error: {error}"
finally
    output "This always executes"
```

## Common Error Scenarios

### Division by Zero

```pscode
output "Enter numerator: "
input numInput
numerator = convert numInput to number

output "Enter denominator: "
input denInput
denominator = convert denInput to number

try {
    result = numerator / denominator
    output "Result: {result}"
} catch error {
    output "Error: Cannot divide by zero"
    output "Please enter a non-zero denominator"
}
```

### Invalid Type Conversion

```pscode
output "Enter a number: "
input userInput

try {
    number = convert userInput to number
    output "You entered: {number}"
    squared = number ^ 2
    output "Squared: {squared}"
} catch error {
    output "Error: '{userInput}' is not a valid number"
    output "Please enter numeric digits only"
}
```

### Array Index Out of Bounds

```pscode
numbers = [10, 20, 30, 40, 50]

output "Enter index (0-4): "
input indexInput
index = convert indexInput to number

try {
    value = numbers[index]
    output "Value at index {index}: {value}"
} catch error {
    output "Error: Index {index} is out of bounds"
    output "Valid indices are 0 to {length of numbers - 1}"
}
```

## File Operations with Error Handling

### Reading a File

```pscode
try {
    open file "data.txt" for reading as fileHandle
    while not end of fileHandle {
        line = read line from fileHandle
        output line
    }
    close fileHandle
} catch error {
    output "Error reading file: {error}"
    output "Make sure 'data.txt' exists"
} finally
    output "File operation complete"
```

### Writing to a File

```pscode
try {
    open file "output.txt" for writing as fileHandle
    write "Hello, World!" to fileHandle
    write "Second line" to fileHandle
    close fileHandle
    output "File written successfully"
} catch error {
    output "Error writing file: {error}"
    output "Check file permissions"
}
```

## Input Validation with Error Handling

### Validating Numeric Input

```pscode
function getValidNumber takes in prompt and min and max {
    valid = false
    result = 0

    while NOT valid {
        output prompt
        input userInput

        try {
            number = convert userInput to number

            if number < min OR number > max
                output "Error: Number must be between {min} and {max}"
            else {
                result = number
                valid = true
            }
        } catch error
            output "Error: Please enter a valid number"
    }

    return result
}

// Usage
age = getValidNumber("Enter your age (0-120): ", 0, 120)
output "Age: {age}"
```

### Safe Array Access

```pscode
function safeArrayAccess takes in array and index {
    try {
        if index < 0 OR index >= length of array {
            output "Error: Index out of range"
            return null
        }

        return array[index]
    } catch error {
        output "Error accessing array: {error}"
        return null
    }
}

numbers = [10, 20, 30, 40, 50]
value = safeArrayAccess(numbers, 2)

if value != null
    output "Value: {value}"
```

## Multiple Error Types

While Common Pseudocode doesn't distinguish error types in the syntax, you can handle different scenarios:

```pscode
function processData takes in data {
    try {
        // Check for null/empty
        if data equals null OR length of data equals 0 {
            output "Error: No data provided"
            return false
        }

        // Process data
        result = performCalculation(data)

        // Check result validity
        if result < 0 {
            output "Warning: Negative result"
            return false
        }

        return true
    } catch error {
        output "Unexpected error: {error}"
        return false
    }
}
```

## Nested Try-Catch

```pscode
try {
    output "Enter filename: "
    input filename

    try {
        open file filename for reading as fileHandle
        content = read line from fileHandle
        close fileHandle

        try
            number = convert content to number
            output "Number from file: {number}"
        catch error
            output "Error: File content is not a number"
    } catch error
        output "Error: Cannot open file '{filename}'"
} catch error
    output "Fatal error: {error}"
```

## Calculator with Error Handling

```pscode
function calculate takes in operation and num1 and num2 {
    try {
        switch operation
            case "+"
                return num1 + num2
            case "-"
                return num1 - num2
            case "*"
                return num1 * num2
            case "/"
                if num2 equals 0 {
                    output "Error: Division by zero"
                    return null
                }
                return num1 / num2
            default
                output "Error: Invalid operation '{operation}'"
                return null
    } catch error {
        output "Calculation error: {error}"
        return null
    }
}


// Main program
try {
    output "Enter first number: "
    input num1Input
    num1 = convert num1Input to number

    output "Enter operation (+, -, *, /): "
    input operation

    output "Enter second number: "
    input num2Input
    num2 = convert num2Input to number

    result = calculate(operation, num1, num2)

    if result != null
        output "Result: {result}"
} catch error
    output "Input error: Please enter valid numbers"
```

## Database Connection Example

```pscode
function connectToDatabase takes in connectionString {
    connection = null

    try {
        output "Connecting to database..."
        connection = openConnection(connectionString)
        output "Connected successfully"
        return connection
    } catch error {
        output "Database connection failed: {error}"
        return null
    } finally
        output "Connection attempt complete"
}

function queryDatabase takes in connection and query {
    try {
        if connection equals null {
            output "Error: No database connection"
            return null
        }

        output "Executing query..."
        result = executeQuery(connection, query)
        output "Query successful"
        return result
    } catch error {
        output "Query failed: {error}"
        return null
    } finally
        output "Query execution complete"
}


// Main program
connection = connectToDatabase("server=localhost;db=myapp")

if connection != null {
    data = queryDatabase(connection, "SELECT * FROM users")

    if data != null
        output "Retrieved {length of data} records"

    try {
        closeConnection(connection)
        output "Connection closed"
    } catch error
        output "Error closing connection: {error}"
}

```

## Login System with Error Handling

```pscode
constant MAX_ATTEMPTS = 3
constant CORRECT_PASSWORD = "secret123"

attempts = 0
authenticated = false

try {
    while attempts < MAX_ATTEMPTS AND NOT authenticated {
        try {
            output "Enter password (Attempt {attempts + 1} of {MAX_ATTEMPTS}): "
            input password

            if password equals "" {
                output "Error: Password cannot be empty"
                attempts++
                skip
            }

            if password equals CORRECT_PASSWORD {
                authenticated = true
                output "Login successful!"
            } else {
                attempts++
                remaining = MAX_ATTEMPTS - attempts
                if remaining > 0
                    output "Incorrect password. {remaining} attempts remaining."
            }
        } catch error {
            output "Input error: {error}"
            attempts++
        }
    }

    if NOT authenticated {
        output "Login failed: Maximum attempts exceeded"
        output "Account locked for security"
    }
} catch error {
    output "System error: {error}"
}
finally {
    if authenticated
        output "Welcome to the system!"
    else
        output "Access denied"
}
```

## JSON Parser Example

```pscode
function parseJSON takes in jsonString {
    try {
        // Simplified JSON parsing
        if NOT jsonString contains "{" {
            output "Error: Invalid JSON format"
            return null
        }

        // Parse the JSON
        data = parse(jsonString)
        return data
    } catch error {
        output "JSON parsing error: {error}"
        output "Check JSON syntax"
        return null
    }
}

// Usage
jsonString = '{"name": "Alice", "age": 30}'

try {
    data = parseJSON(jsonString)

    if data != null {
        output "Name: {data.name}"
        output "Age: {data.age}"
    }
} catch error
    output "Failed to process data: {error}"
```

## Best Practices

### 1. Be Specific in Error Messages

```pscode
// Bad
try
    value = array[index]
catch error
    output "Error"

// Good
try
    value = array[index]
catch error
    output "Error accessing index {index}"
    output "Array has {length of array} elements (valid: 0-{length of array - 1})"
```

### 2. Always Use Finally for Cleanup

```pscode
fileHandle = null

try {
    open file "data.txt" for reading as fileHandle
    processFile(fileHandle)
} catch error
    output "Error: {error}"
finally {
    if fileHandle != null {
        close fileHandle
        output "File closed"
    }
}
```

### 3. Don't Catch Errors You Can't Handle

```pscode
// Bad - catching but doing nothing
try
    criticalOperation()
catch error
    // Empty catch - error is hidden

// Good - let error propagate or handle it
try
    criticalOperation()
catch error {
    output "Critical error: {error}"
    output "Please contact support"
    exit
}
```

### 4. Validate Before Risky Operations

```pscode
// Prevent errors rather than catching them
if denominator equals 0
    output "Error: Cannot divide by zero"
else
    result = numerator / denominator
```

### 5. Provide Recovery Options

```pscode
try
    processData(data)
catch error {
    output "Error: {error}"
    output "Would you like to retry? (yes/no)"
    input retry

    if retry equals "yes"
        try
            processData(data)
        catch error
            output "Retry failed: {error}"
}
```

### 6. Log Errors for Debugging

```pscode
function logError takes in errorMessage {
    try {
        open file "errors.log" for appending as logFile
        write "{getCurrentTime()}: {errorMessage}" to logFile
        close logFile
    } catch error
        output "Failed to log error"
}

try
    riskyOperation()
catch error {
    logError(error)
    output "An error occurred. Details logged."
}
```

## When to Use Error Handling

**Use try-catch when:**

- Working with user input
- Accessing files or external resources
- Performing calculations that might fail
- Working with arrays at dynamic indices
- Calling functions that might fail

**Don't use try-catch when:**

- You can validate before the operation
- The error indicates a programming mistake
- Performance is critical (validation is faster)

```pscode
// Unnecessary try-catch
try
    if x > 0
        output "Positive"
catch error
    output "Error"

// Better approach
if x > 0
    output "Positive"
```
