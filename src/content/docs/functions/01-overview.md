---
title: Built-in Functions Overview
description: Overview of built-in functions in Common Pseudocode
---

Common Pseudocode provides a rich set of built-in functions to perform common operations. These functions are organized into several categories:

## Function Categories

### Math Functions

Functions for mathematical operations including rounding, absolute values, square roots, and random number generation.

See the [Math Functions](/functions/math-functions) page for details.

### String Functions

Functions for manipulating and analyzing text strings, including case conversion, substring operations, and splitting.

See the [String Functions](/functions/string-functions) page for details.

### Array Functions

Functions for working with arrays, including adding, removing, and searching for elements.

See the [Array Functions](/functions/array-functions) page for details.

### Type Checking

Functions to check the type of a value at runtime.

See the [Type Checking](/functions/type-checking) page for details.

## Function Calling Syntax

Common Pseudocode supports multiple syntax styles for calling functions:

### Standard Syntax

```pscode
result = functionName(arg1, arg2)
```

### Natural Language Syntax

```pscode
result = run functionName with arg1 and arg2
```

### Operator-style Syntax

For some functions, you can use natural language operators:

```pscode
squareRoot = sqrt of 16
absolute = abs of -5
textLength = length of "hello"
```

## User-Defined Functions

You can create your own functions using the `function` keyword:

```pscode
function add takes in num1 and num2
    return num1 + num2

result = add(5, 3)  // 8
result = run add with 5 and 3  // 8
```

See the [Data Structures - Records](/data-structures/records) section for information on functions and procedures.
