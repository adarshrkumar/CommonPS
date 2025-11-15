---
title: Records and Structures
description: Creating and using custom data structures with records
---

Records (also called structures or structs) allow you to group related data together under a single name. They're perfect for representing real-world entities.

## Defining a Record

Define a record structure with named fields:

```pscode
record Person {
    string name
    number age
    string email
}
```

This creates a blueprint for `Person` objects with three fields.

## Creating Record Instances

### Create and Assign Fields

```pscode
person1 = new Person
person1.name = "Alice"
person1.age = 30
person1.email = "alice@example.com"
```

### Create with Initialization

Pass values in the order they were defined:

```pscode
person2 = Person("Bob", 25, "bob@example.com")
```

## Accessing Record Fields

Use dot notation to access fields:

```pscode
person1 = Person("Charlie", 35, "charlie@example.com")

output person1.name   // "Charlie"
output person1.age    // 35
output person1.email  // "charlie@example.com"
```

## Modifying Record Fields

```pscode
person1 = Person("David", 28, "david@example.com")

// Update fields
person1.age = 29
person1.email = "david.new@example.com"

output "{person1.name} is now {person1.age} years old"
```

## Arrays of Records

Store multiple records in an array:

```pscode
people = [
    Person("Alice", 30, "alice@example.com"),
    Person("Bob", 25, "bob@example.com"),
    Person("Charlie", 35, "charlie@example.com")
]

/* Access individual records */
output people[0].name  // "Alice"
output people[1].age   // 25
```

### Iterating Through Records

```pscode
people = [
    Person("Alice", 30, "alice@example.com"),
    Person("Bob", 25, "bob@example.com"),
    Person("Charlie", 35, "charlie@example.com")
]

for each person in people {
    output "Name: {person.name}"
    output "Age: {person.age}"
    output "Email: {person.email}"
    output ""
}
```

## Nested Records

Records can contain other records:

```pscode
record Address {
    string street
    string city
    string zipCode
}

record Employee {
    string name
    number employeeId
    Address address
}

// Create instances
homeAddress = Address("123 Main St", "Springfield", "12345")
employee = new Employee
employee.name = "John Doe"
employee.employeeId = 12345
employee.address = homeAddress

// Access nested fields
output employee.address.city  // "Springfield"
```

## Example: Student Management

```pscode
record Student {
    string name
    number studentId
    array grades
}

// Create students
student1 = new Student
student1.name = "Emma"
student1.studentId = 1001
student1.grades = [85, 92, 78, 95]

student2 = new Student
student2.name = "Liam"
student2.studentId = 1002
student2.grades = [88, 90, 85, 92]

// Calculate average grade
function calculateAverage takes in student {
    sum = 0
    for each grade in student.grades
        sum += grade
    average = sum / length of student.grades
    return average
}

avg1 = calculateAverage(student1)
output "{student1.name}'s average: {avg1}"

avg2 = calculateAverage(student2)
output "{student2.name}'s average: {avg2}"
```

## Example: Product Catalog

```pscode
record Product {
    string name
    number price
    number quantity
    string category
}

// Create product catalog
products = [
    Product("Laptop", 999.99, 10, "Electronics"),
    Product("Mouse", 29.99, 50, "Electronics"),
    Product("Desk", 299.99, 5, "Furniture"),
    Product("Chair", 199.99, 8, "Furniture")
]

// Find products by category
function findByCategory takes in products and category {
    results = []
    for each product in products
        if product.category equals category
            append product to results
    return results
}

electronics = findByCategory(products, "Electronics")

output "Electronics:"
for each item in electronics
    output "  {item.name}: ${item.price}"
```

## Example: Book Library

```pscode
record Book {
    string title
    string author
    number year
    boolean isAvailable
}

// Create library
library = [
    Book("1984", "George Orwell", 1949, true),
    Book("To Kill a Mockingbird", "Harper Lee", 1960, false),
    Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, true)
]

// Check out a book
function checkoutBook takes in library and title {
    for each book in library {
        if book.title equals title {
            if book.isAvailable {
                book.isAvailable = false
                output "Checked out: {book.title}"
                return true
            } else {
                output "{book.title} is already checked out"
                return false
            }
        }
    }
    output "Book not found"
    return false
}

// Usage
checkoutBook(library, "1984")
checkoutBook(library, "1984")  // Will show it's unavailable
```

## Benefits of Records

- **Organization**: Group related data together
- **Readability**: Field names make code self-documenting
- **Maintainability**: Changes to structure are centralized
- **Flexibility**: Easy to add new fields or create complex data structures

## Best Practices

- Use descriptive names for records and fields
- Keep records focused on a single concept
- Consider using records instead of parallel arrays
- Initialize all fields to avoid undefined values
- Use records to make your code more readable and maintainable

### Before (Parallel Arrays)

```pscode
names = ["Alice", "Bob", "Charlie"]
ages = [30, 25, 35]
emails = ["alice@example.com", "bob@example.com", "charlie@example.com"]

// Accessing data requires careful index management
output names[0]   // Alice
output ages[0]    // 30
output emails[0]  // alice@example.com
```

### After (Records)

```pscode
record Person {
    string name
    number age
    string email
}

people = [
    Person("Alice", 30, "alice@example.com"),
    Person("Bob", 25, "bob@example.com"),
    Person("Charlie", 35, "charlie@example.com")
]

// Much clearer and less error-prone
output people[0].name   // Alice
output people[0].age    // 30
output people[0].email  // alice@example.com
```
