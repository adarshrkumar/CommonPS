---
title: Switch Statements
description: Multi-way branching with switch statements in Common Pseudocode
---

Switch statements provide a clean way to handle multiple possible values for a single variable, making them ideal for menus, state machines, and option processing.

## Basic Switch Statement

```pscode
output "Enter a day number (1-7): "
input dayNumber
dayNumber = convert dayNumber to number

switch dayNumber {
    case 1
        output "Monday"
        jump
    case 2
        output "Tuesday"
        jump
    case 3
        output "Wednesday"
        jump
    case 4
        output "Thursday"
        jump
    case 5
        output "Friday"
        jump
    case 6
        output "Saturday"
        jump
    case 7
        output "Sunday"
        jump
    default
        output "Invalid day number"
}
```

## Switch Keywords

### Case

Defines a value to match:

```pscode
case 1
    output "Option one"
    jump
```

### Jump (or Break)

Exits the switch statement after executing a case:

```pscode
case 2
    output "Option two"
    jump  // or break
```

### Default

Executes if no case matches:

```pscode
default
    output "No match found"
```

### Exit/Stop/Return

Terminates the entire program:

```pscode
case 9
    output "Exiting program..."
    exit  // or stop, or return
```

## Simple Menu Example

```pscode
output "=== Main Menu ==="
output "1. New Game"
output "2. Load Game"
output "3. Settings"
output "4. Exit"
output ""
output "Enter choice: "
input choice
choice = convert choice to number

switch choice {
    case 1
        output "Starting new game..."
        jump
    case 2
        output "Loading game..."
        jump
    case 3
        output "Opening settings..."
        jump
    case 4
        output "Goodbye!"
        exit
    default
        output "Invalid choice. Please enter 1-4."
}
```

## Switch with Strings

```pscode
output "Enter a command (start/stop/pause/resume): "
input command
command = command to lowercase

switch command {
    case "start"
        output "Starting process..."
        jump
    case "stop"
        output "Stopping process..."
        jump
    case "pause"
        output "Pausing process..."
        jump
    case "resume"
        output "Resuming process..."
        jump
    default
        output "Unknown command: {command}"
}
```

## Calculator Example

```pscode
output "Simple Calculator"
output "Enter first number: "
input num1Input
num1 = convert num1Input to number

output "Enter operation (+, -, *, /): "
input operation

output "Enter second number: "
input num2Input
num2 = convert num2Input to number

switch operation {
    case "+"
        result = num1 + num2
        output "{num1} + {num2} = {result}"
        jump
    case "-"
        result = num1 - num2
        output "{num1} - {num2} = {result}"
        jump
    case "*"
        result = num1 * num2
        output "{num1} * {num2} = {result}"
        jump
    case "/"
        if num2 equals 0
            output "Error: Division by zero"
        else {
            result = num1 / num2
            output "{num1} / {num2} = {result}"
        }
        jump
    default
        output "Invalid operation"
}
```

## Traffic Light Controller

```pscode
currentLight = "green"

output "Current light: {currentLight}"
output "What should happen? (next/emergency/reset): "
input action

switch action {
    case "next"
        switch currentLight {
            case "green"
                currentLight = "yellow"
                output "Changed to yellow"
                jump
            case "yellow"
                currentLight = "red"
                output "Changed to red"
                jump
            case "red"
                currentLight = "green"
                output "Changed to green"
                jump
        }
        jump
    case "emergency"
        currentLight = "red"
        output "Emergency! All lights red!"
        jump
    case "reset"
        currentLight = "green"
        output "Reset to green"
        jump
    default
        output "Invalid action"
}
```

## Grade Converter

```pscode
output "Enter letter grade (A, B, C, D, F): "
input letterGrade
letterGrade = letterGrade to uppercase

switch letterGrade {
    case "A"
        output "Excellent! Score range: 90-100"
        output "GPA: 4.0"
        jump
    case "B"
        output "Good! Score range: 80-89"
        output "GPA: 3.0"
        jump
    case "C"
        output "Average. Score range: 70-79"
        output "GPA: 2.0"
        jump
    case "D"
        output "Below average. Score range: 60-69"
        output "GPA: 1.0"
        jump
    case "F"
        output "Failing. Score range: 0-59"
        output "GPA: 0.0"
        jump
    default
        output "Invalid grade. Please enter A, B, C, D, or F"
}
```

## Month Days Calculator

```pscode
output "Enter month number (1-12): "
input monthInput
month = convert monthInput to number

output "Enter year: "
input yearInput
year = convert yearInput to number

// Check if leap year
isLeapYear = false
if year % 4 equals 0 {
    if year % 100 equals 0 {
        if year % 400 equals 0
            isLeapYear = true
    } else
        isLeapYear = true
}

switch month {
    case 1
        output "January: 31 days"
        jump
    case 2
        if isLeapYear
            output "February: 29 days (leap year)"
        else
            output "February: 28 days"
        jump
    case 3
        output "March: 31 days"
        jump
    case 4
        output "April: 30 days"
        jump
    case 5
        output "May: 31 days"
        jump
    case 6
        output "June: 30 days"
        jump
    case 7
        output "July: 31 days"
        jump
    case 8
        output "August: 31 days"
        jump
    case 9
        output "September: 30 days"
        jump
    case 10
        output "October: 31 days"
        jump
    case 11
        output "November: 30 days"
        jump
    case 12
        output "December: 31 days"
        jump
    default
        output "Invalid month number"
}
```

## Vending Machine

```pscode
constant SODA_PRICE = 1.50
constant CHIPS_PRICE = 1.25
constant CANDY_PRICE = 1.00
constant WATER_PRICE = 1.00

output "=== Vending Machine ==="
output "1. Soda - ${SODA_PRICE}"
output "2. Chips - ${CHIPS_PRICE}"
output "3. Candy - ${CANDY_PRICE}"
output "4. Water - ${WATER_PRICE}"
output ""
output "Enter selection: "
input selection
selection = convert selection to number

output "Enter payment amount: "
input paymentInput
payment = convert paymentInput to number

price = 0
itemName = ""

switch selection {
    case 1
        price = SODA_PRICE
        itemName = "Soda"
        jump
    case 2
        price = CHIPS_PRICE
        itemName = "Chips"
        jump
    case 3
        price = CANDY_PRICE
        itemName = "Candy"
        jump
    case 4
        price = WATER_PRICE
        itemName = "Water"
        jump
    default
        output "Invalid selection"
        exit
}

if payment < price {
    shortage = price - payment
    output "Insufficient funds. Need ${shortage} more."
} else {
    change = payment - price
    output "Dispensing {itemName}"
    if change > 0
        output "Your change: ${change}"
    output "Thank you!"
}
```

## ATM Machine

```pscode
balance = 1000.00

output "=== ATM Menu ==="
output "1. Check Balance"
output "2. Deposit"
output "3. Withdraw"
output "4. Exit"
output ""
output "Enter choice: "
input choice
choice = convert choice to number

switch choice
    case 1
        output "Current balance: ${balance}"
        jump
    case 2
        output "Enter deposit amount: "
        input depositInput
        deposit = convert depositInput to number

        if deposit > 0 {
            balance = balance + deposit
            output "Deposited: ${deposit}"
            output "New balance: ${balance}"
        } else
            output "Invalid deposit amount"
        jump
    case 3
        output "Enter withdrawal amount: "
        input withdrawInput
        withdraw = convert withdrawInput to number

        if withdraw > balance
            output "Insufficient funds"
        else if withdraw <= 0
            output "Invalid withdrawal amount"
        else {
            balance = balance - withdraw
            output "Withdrawn: ${withdraw}"
            output "New balance: ${balance}"
        }
        jump
    case 4
        output "Thank you for using our ATM"
        exit
    default
        output "Invalid option"
```

## Switch vs If-Else

<!-- markdownlint-disable MD026 -->
### Use Switch When:

- Testing a single variable against multiple constant values
- Handling menus or option selections
- Code clarity is improved
- Cases are simple comparisons

```pscode
// Good use of switch
switch menuChoice
    case 1
        startGame()
        jump
    case 2
        loadGame()
        jump
    case 3
        exitGame()
        jump
```

<!-- markdownlint-disable MD026 -->
### Use If-Else When:

- Testing complex conditions
- Comparing ranges
- Multiple variables involved
- Conditions are not constant values

```pscode
// Better with if-else
if score >= 90 AND score <= 100
    output "A"
else if score >= 80
    output "B"
else if score >= 70
    output "C"
```

## Nested Switch Statements

```pscode
output "Select category (1=Electronics, 2=Clothing): "
input categoryInput
category = convert categoryInput to number

switch category
    case 1
        output "Electronics:"
        output "1. Laptop"
        output "2. Phone"
        output "3. Tablet"
        input itemChoice
        itemChoice = convert itemChoice to number

        switch itemChoice
            case 1
                output "You selected: Laptop"
                jump
            case 2
                output "You selected: Phone"
                jump
            case 3
                output "You selected: Tablet"
                jump
            default
                output "Invalid item"
        jump
    case 2
        output "Clothing:"
        output "1. Shirt"
        output "2. Pants"
        output "3. Shoes"
        input itemChoice
        itemChoice = convert itemChoice to number

        switch itemChoice
            case 1
                output "You selected: Shirt"
                jump
            case 2
                output "You selected: Pants"
                jump
            case 3
                output "You selected: Shoes"
                jump
            default
                output "Invalid item"
        jump
    default
        output "Invalid category"
```

## Best Practices

1. **Always include default**

   ```pscode
   switch value
       case 1
           // handle case 1
           jump
       default
           output "Unexpected value: {value}"
   ```

2. **Use jump/break to prevent fall-through**

   ```pscode
   // Always end cases with jump
   case 1
       output "Case 1"
       jump  // Important!
   ```

3. **Keep cases simple**

   ```pscode
   // Good
   case 1
       processOption1()
       jump

   // Avoid complex logic directly in cases
   ```

4. **Validate input before switch**

   ```pscode
   input choice
   choice = convert choice to number

   if is number(choice)
       switch choice
           // cases...
   else
       output "Please enter a number"
   ```

5. **Use constants for case values**

   ```pscode
   constant OPTION_NEW = 1
   constant OPTION_LOAD = 2
   constant OPTION_EXIT = 3

   switch choice
       case OPTION_NEW
           startNewGame()
           jump
       case OPTION_LOAD
           loadGame()
           jump
       case OPTION_EXIT
           exitGame()
   ```
