---
title: String Functions
description: String manipulation functions in Common Pseudocode
---

Common Pseudocode provides a comprehensive set of functions for working with strings.

## String Properties

### length - Get String Length

Returns the number of characters in a string.

**Syntax:**

```pscode
result = length of text
result = text.length
```

**Example:**

```pscode
text = "Hello World"
textLength = length of text  // 11
count = text.length          // 11
```

---

## Case Conversion

### to uppercase - Convert to Uppercase

Converts all characters in a string to uppercase.

**Syntax:**

```pscode
result = text to uppercase
```

**Example:**

```pscode
text = "Hello World"
uppercase = text to uppercase  // "HELLO WORLD"
```

---

### to lowercase - Convert to Lowercase

Converts all characters in a string to lowercase.

**Syntax:**

```pscode
result = text to lowercase
```

**Example:**

```pscode
text = "Hello World"
lowercase = text to lowercase  // "hello world"
```

---

## Substring Operations

### substring - Extract Substring

Extracts a portion of a string from a start index to an end index.

**Syntax:**

```pscode
result = substring of text from start to end
```

**Example:**

```pscode
text = "Hello World"
substring = substring of text from 0 to 5  // "Hello"
substring = substring of text from 6 to 11 // "World"
```

**Note:** Indices are 0-based, similar to arrays.

---

### Character Access

Access individual characters using array-like indexing.

**Syntax:**

```pscode
char = text[index]
```

**Example:**

```pscode
text = "Hello World"
firstChar = text[0]   // "H"
lastChar = text[10]   // "d"
```

---

## String Searching

### find - Find Substring Position

Finds the position of a substring within a string.

**Syntax:**

```pscode
position = find substring in text
```

**Example:**

```pscode
text = "Hello World"
position = find "World" in text  // returns 6
position = find "o" in text      // returns 4 (first occurrence)
```

**Returns:** The index of the first occurrence of the substring, or -1 if not found.

---

### contains - Check if String Contains Substring

Checks whether a string contains a specific substring.

**Syntax:**

```pscode
result = text contains substring
```

**Example:**

```pscode
text = "Hello World"
hasWorld = text contains "World"  // returns true
hasJava = text contains "Java"    // returns false

if text contains "Hello"
    output "Greeting found!"
```

---

## String Manipulation

### trim - Remove Whitespace

Removes leading and trailing whitespace from a string.

**Syntax:**

```pscode
result = trim(text)
```

**Example:**

```pscode
text = "  Hello World  "
trimmed = trim(text)  // "Hello World"
```

---

### split - Split String into Array

Splits a string into an array of substrings based on a delimiter.

**Syntax:**

```pscode
result = split text by delimiter
```

**Example:**

```pscode
text = "Hello World"
words = split text by " "  // ["Hello", "World"]

csv = "apple,banana,orange"
fruits = split csv by ","  // ["apple", "banana", "orange"]
```

---

### join - Join Array into String

Joins an array of strings into a single string with a delimiter.

**Syntax:**

```pscode
result = join array with delimiter
```

**Example:**

```pscode
words = ["Hello", "World"]
text = join words with " "  // "Hello World"

fruits = ["apple", "banana", "orange"]
csv = join fruits with ","  // "apple,banana,orange"
```

---

## String Concatenation

### Basic Concatenation

Join strings together by placing them next to each other.

**Syntax:**

```pscode
result = "string1" "string2" "string3"
```

**Example:**

```pscode
greeting = "Hello" " " "World"  // "Hello World"
```

---

### String Interpolation

Embed variables in strings using curly braces.

**Syntax:**

```pscode
result = "text {variable} more text"
```

**Example:**

```pscode
num = 10
message = "Hello the number is {num}"  // "Hello the number is 10"

name = "Alice"
age = 30
greeting = "My name is {name} and I am {age} years old"
// "My name is Alice and I am 30 years old"
```

---

## Type Conversion

### convert to string

Convert other data types to strings.

**Syntax:**

```pscode
stringValue = convert value to string
stringValue = string(value)
```

**Example:**

```pscode
age = 25
stringAge = convert age to string  // "25"
stringAge = string(age)            // "25"
```

---

## Common String Operations Example

```pscode
// Get user input
output "Enter your full name: "
input fullName

// Clean and process the name
fullName = trim(fullName)
fullName = fullName to uppercase

// Split into first and last name
nameParts = split fullName by " "

if length of nameParts >= 2
    firstName = nameParts[0]
    lastName = nameParts[length of nameParts - 1]
    output "First: {firstName}, Last: {lastName}"
else
    output "Please enter both first and last name"
```
