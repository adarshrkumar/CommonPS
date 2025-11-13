---
title: Input and Output
description: Reading user input and displaying output in Common Pseudocode
---

Communication with users is essential in any program. Common Pseudocode provides simple statements for reading input and displaying output.

## Output Statement

Display information to the user with the `output` statement:

```pscode
output "Hello, World!"
```

### Outputting Variables

Display variable values:

```pscode
name = "Alice"
age = 30
output name
output age
```

### Concatenating Output

Combine text and variables:

```pscode
name = "Bob"
age = 25
output "Hello, my name is " name " and I am " age " years old"
```

### String Interpolation

Embed variables directly in strings using curly braces:

```pscode
name = "Charlie"
score = 95
output "Player {name} scored {score} points!"
```

### Multiple Output Statements

```pscode
output "Welcome to the program!"
output ""  // Empty line
output "Please select an option:"
output "1. Start"
output "2. Exit"
```

## Input Statement

Read user input with the `input` statement:

```pscode
input userInput
```

The value entered by the user is stored in the variable `userInput`.

### Prompting for Input

It's good practice to tell users what to enter:

```pscode
output "What is your name? "
input userName

output "How old are you? "
input age
```

### Single Line Prompt and Input

```pscode
output "Enter your email: "
input userEmail
```

## Complete Example

Here's a full program that uses input and output:

```pscode
// Greeting program
output "=== Welcome ==="
output ""
output "What is your name? "
input userName
output "What is your age? "
input userAge

output ""
output "Hello, {userName}!"
output "You are {userAge} years old."

// Calculate birth year (approximate)
currentYear = 2024
birthYear = currentYear - userAge
output "You were born around {birthYear}."
```

## Menu Example

Creating an interactive menu:

```pscode
output "Options: "
output "1. Book a ticket"
output "2. Cancel a ticket"
output "3. View a ticket"
output "4. View all tickets"
output "5. Track train"
output "6. Track all trains"
output "9. Exit"
output ""
output "Please enter an option: "
input userOption
```

## Tips

- Always provide clear prompts so users know what to enter
- Use empty output statements (`output ""`) to create blank lines for readability
- When reading numbers, remember to convert string input to number if needed
- Consider validating user input to handle errors gracefully

```pscode
output "Enter a number: "
input userInput
number = convert userInput to number

if is number(number)
    output "You entered: {number}"
else
    output "That's not a valid number!"
```
