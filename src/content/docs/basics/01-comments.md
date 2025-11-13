---
title: Comments
description: Document your code with single-line and multi-line comments
---

Comments help explain your code and are ignored during execution. Common Pseudocode supports both single-line and multi-line comments.

## Single-Line Comments

Single-line comments start with `//` and continue to the end of the line:

```pscode
// This is a single-line comment
x = 5  // This is an inline comment
```

## Multi-Line Comments

Multi-line comments are enclosed between `/*` and `*/`:

```pscode
/*
This is a multi-line comment
that spans multiple lines
*/
x = 10
```

You can also use multi-line comments inline:

```pscode
result = /* intermediate calculation */ x * y
```

## Best Practices

- Use comments to explain **why** you're doing something, not **what** you're doing
- Keep comments up-to-date with your code
- Use single-line comments for brief explanations
- Use multi-line comments for longer descriptions or temporarily disabling code blocks

```pscode
// Good: Explains the reasoning
// Use binary search because the array is already sorted
index = binarySearch(sortedArray, target)

// Less helpful: Restates what the code does
// Call binarySearch function
index = binarySearch(sortedArray, target)
```
