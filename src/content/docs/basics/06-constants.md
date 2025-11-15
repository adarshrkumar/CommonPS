---
title: Constants
description: Defining and using constant values in Common Pseudocode
---

Constants are values that cannot be changed after they're defined. They're useful for values that should remain fixed throughout your program.

## Defining Constants

Use the `constant` keyword to define a constant:

```pscode
constant PI = 3.14159
constant MAX_USERS = 100
constant COMPANY_NAME = "Acme Corp"
constant TAX_RATE = 0.08
```

## Naming Conventions

Constants are typically written in UPPERCASE with underscores:

```pscode
constant MAX_LENGTH = 50
constant DEFAULT_TIMEOUT = 30
constant ERROR_MESSAGE = "An error occurred"
constant DAYS_IN_WEEK = 7
```

This makes it easy to distinguish constants from regular variables.

## Using Constants

Once defined, use constants like regular variables:

```pscode
constant PI = 3.14159

radius = 5
circumference = 2 * PI * radius
area = PI * radius ^ 2

output "Circumference: {circumference}"
output "Area: {area}"
```

## Constants Cannot Be Changed

Attempting to modify a constant will result in an error:

```pscode
constant MAX_SCORE = 100

MAX_SCORE = 150  // Error: cannot reassign constant
```

## Why Use Constants?

### 1. Prevent Accidental Changes

```pscode
constant SPEED_OF_LIGHT = 299792458  // meters per second

/* Later in code...
   SPEED_OF_LIGHT = 300000000  // Error - prevents mistakes */
```

### 2. Improve Readability

```pscode
/* Without constants - unclear what 0.08 means */
total = price + (price * 0.08)

/* With constants - much clearer */
constant TAX_RATE = 0.08
total = price + (price * TAX_RATE)
```

### 3. Easy Maintenance

```pscode
/* Define once, use everywhere */
constant MAX_LOGIN_ATTEMPTS = 3

/* Used in multiple places */
attempts = 0
while attempts < MAX_LOGIN_ATTEMPTS
    // login logic
    attempts++

if attempts >= MAX_LOGIN_ATTEMPTS
    output "Account locked"
```

If you need to change the value, you only update it in one place!

## Common Use Cases

### Mathematical Constants

```pscode
constant PI = 3.14159265359
constant E = 2.71828182846
constant GOLDEN_RATIO = 1.61803398875

// Circle calculations
radius = 10
circumference = 2 * PI * radius
area = PI * radius ^ 2
```

### Configuration Values

```pscode
constant MAX_FILE_SIZE = 1048576  // 1 MB in bytes
constant SESSION_TIMEOUT = 1800   // 30 minutes in seconds
constant MAX_RETRIES = 3
constant DEFAULT_PORT = 8080
```

### Business Rules

```pscode
constant TAX_RATE = 0.08
constant SHIPPING_COST = 5.99
constant FREE_SHIPPING_THRESHOLD = 50.00
constant DISCOUNT_RATE = 0.15

subtotal = 100
tax = subtotal * TAX_RATE

if subtotal >= FREE_SHIPPING_THRESHOLD {
    shipping = 0
} else {
    shipping = SHIPPING_COST
}

total = subtotal + tax + shipping
```

### Game Development

```pscode
constant SCREEN_WIDTH = 800
constant SCREEN_HEIGHT = 600
constant GRAVITY = 9.8
constant PLAYER_SPEED = 5
constant MAX_HEALTH = 100
constant LEVEL_COUNT = 10

playerHealth = MAX_HEALTH
currentLevel = 1

while currentLevel <= LEVEL_COUNT {
    // game logic
    currentLevel++
}
```

### Validation Rules

```pscode
constant MIN_PASSWORD_LENGTH = 8
constant MAX_PASSWORD_LENGTH = 128
constant MIN_AGE = 13
constant MAX_AGE = 120
constant MIN_USERNAME_LENGTH = 3
constant MAX_USERNAME_LENGTH = 20

output "Enter password: "
input password

if length of password < MIN_PASSWORD_LENGTH {
    output "Password must be at least {MIN_PASSWORD_LENGTH} characters"
} else if length of password > MAX_PASSWORD_LENGTH {
    output "Password too long (max {MAX_PASSWORD_LENGTH} characters)"
} else {
    output "Password accepted"
}
```

## Examples

### Circle Calculator

```pscode
constant PI = 3.14159

output "Circle Calculator"
output ""
output "Enter radius: "
input radiusInput
radius = convert radiusInput to number

diameter = 2 * radius
circumference = 2 * PI * radius
area = PI * radius ^ 2

output ""
output "Results:"
output "Diameter: {diameter}"
output "Circumference: {circumference}"
output "Area: {area}"
```

### Shopping Cart

```pscode
constant TAX_RATE = 0.08
constant SHIPPING_COST = 5.99
constant FREE_SHIPPING_MINIMUM = 50.00
constant MEMBER_DISCOUNT = 0.10

// Get cart total
output "Enter cart total: "
input cartInput
cartTotal = convert cartInput to number

// Check membership
output "Are you a member? (yes/no): "
input memberInput
isMember = memberInput equals "yes"

// Calculate subtotal
subtotal = cartTotal

// Apply member discount
if isMember {
    discount = subtotal * MEMBER_DISCOUNT
    subtotal = subtotal - discount
    output "Member discount applied: ${discount}"
}

// Calculate tax
tax = subtotal * TAX_RATE

// Determine shipping
if cartTotal >= FREE_SHIPPING_MINIMUM {
    shipping = 0
    output "Free shipping!"
} else {
    shipping = SHIPPING_COST
}

// Calculate total
total = subtotal + tax + shipping

output ""
output "Order Summary:"
output "Subtotal: ${subtotal}"
output "Tax: ${tax}"
output "Shipping: ${shipping}"
output "Total: ${total}"
```

### Temperature Converter

```pscode
constant FAHRENHEIT_OFFSET = 32
constant FAHRENHEIT_SCALE = 5 / 9

output "Temperature Converter"
output ""
output "1. Fahrenheit to Celsius"
output "2. Celsius to Fahrenheit"
output "Enter choice: "
input choice
choice = convert choice to number

output "Enter temperature: "
input tempInput
temp = convert tempInput to number

if choice equals 1 {
    celsius = (temp - FAHRENHEIT_OFFSET) * FAHRENHEIT_SCALE
    output "{temp}°F = {celsius}°C"
} else if choice equals 2 {
    fahrenheit = (temp / FAHRENHEIT_SCALE) + FAHRENHEIT_OFFSET
    output "{temp}°C = {fahrenheit}°F"
} else {
    output "Invalid choice"
}
```

### Grade Boundaries

```pscode
constant GRADE_A_MIN = 90
constant GRADE_B_MIN = 80
constant GRADE_C_MIN = 70
constant GRADE_D_MIN = 60
constant MAX_SCORE = 100

output "Enter score (0-100): "
input scoreInput
score = convert scoreInput to number

if score < 0 OR score > MAX_SCORE {
    output "Invalid score"
} else if score >= GRADE_A_MIN {
    output "Grade: A"
} else if score >= GRADE_B_MIN {
    output "Grade: B"
} else if score >= GRADE_C_MIN {
    output "Grade: C"
} else if score >= GRADE_D_MIN {
    output "Grade: D"
} else {
    output "Grade: F"
}
```

### Retry Logic

```pscode
constant MAX_ATTEMPTS = 3
constant CORRECT_PASSWORD = "secret123"

attempts = 0
authenticated = false

while attempts < MAX_ATTEMPTS AND NOT authenticated {
    output "Enter password (Attempt {attempts + 1} of {MAX_ATTEMPTS}): "
    input password

    if password equals CORRECT_PASSWORD {
        authenticated = true
        output "Access granted!"
    } else {
        attempts++
        remaining = MAX_ATTEMPTS - attempts
        if remaining > 0
            output "Incorrect. {remaining} attempts remaining."
    }
}

if NOT authenticated
    output "Access denied. Account locked."
```

## Constants vs Variables

<!-- markdownlint-disable MD026 -->
### Use Constants When:

- Value should never change
- Value represents a fundamental constant (like π)
- Value is a configuration setting
- Value defines business rules or limits

```pscode
constant MAX_INVENTORY = 1000
constant DEFAULT_CURRENCY = "USD"
```

<!-- markdownlint-disable MD026 -->
### Use Variables When:

- Value will change during program execution
- Value depends on user input or calculations
- Value represents program state

```pscode
currentInventory = 500  // Will change as items are sold
userCurrency = "EUR"    // User can select different currency
```

## Best Practices

1. **Use UPPERCASE names**

   ```pscode
   constant MAX_SIZE = 100  // Good
   constant maxSize = 100   // Less clear
   ```

2. **Group related constants**

   ```pscode
   // Database configuration
   constant DB_HOST = "localhost"
   constant DB_PORT = 5432
   constant DB_NAME = "myapp"

   // UI configuration
   constant SCREEN_WIDTH = 1920
   constant SCREEN_HEIGHT = 1080
   constant THEME_COLOR = "blue"
   ```

3. **Define constants at the top**

   ```pscode
   // All constants defined first
   constant TAX_RATE = 0.08
   constant SHIPPING_COST = 5.99
   constant MAX_ITEMS = 100

   // Then your program logic
   cartTotal = 0
   itemCount = 0
   ```

4. **Use descriptive names**

   ```pscode
   constant TIMEOUT_SECONDS = 30  // Good
   constant T = 30                // Bad

   constant MAX_LOGIN_ATTEMPTS = 3  // Good
   constant MLA = 3                 // Bad
   ```

5. **Document magic numbers**

   ```pscode
   // Instead of:
   if temperature > 100 {
       output "Water is boiling"
   }

   // Use:
   constant WATER_BOILING_POINT = 100
   if temperature > WATER_BOILING_POINT {
       output "Water is boiling"
   }
   ```
