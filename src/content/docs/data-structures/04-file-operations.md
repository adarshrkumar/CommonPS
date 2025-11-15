---
title: File Operations
description: Reading from and writing to files in Common Pseudocode
---

File operations allow your programs to persist data beyond program execution. Common Pseudocode provides statements for reading from and writing to files.

## Opening Files

Use the `open file` statement to access a file:

```pscode
open file "data.txt" for reading as fileHandle
```

### File Modes

- **reading**: Open file to read data
- **writing**: Open file to write data (overwrites existing content)
- **appending**: Open file to add data to the end

## Reading Files

### Read Line by Line

```pscode
open file "data.txt" for reading as fileHandle

while not end of fileHandle
    line = read line from fileHandle
    output line

close fileHandle
```

### Read Entire File

```pscode
open file "story.txt" for reading as fileHandle

content = ""
while not end of fileHandle
    line = read line from fileHandle
    content = content line "\n"

close fileHandle
output content
```

### Read File with Error Handling

```pscode
try
    open file "data.txt" for reading as fileHandle

    lineCount = 0
    while not end of fileHandle
        line = read line from fileHandle
        lineCount++
        output "Line {lineCount}: {line}"

    close fileHandle
    output "Total lines: {lineCount}"
catch error
    output "Error reading file: {error}"
```

## Writing Files

### Write New File

```pscode
open file "output.txt" for writing as fileHandle
write "Hello, World!" to fileHandle
write "This is line 2" to fileHandle
write "This is line 3" to fileHandle
close fileHandle

output "File written successfully"
```

### Overwrite Existing File

```pscode
// Writing mode automatically overwrites
open file "data.txt" for writing as fileHandle
write "New content" to fileHandle
close fileHandle
```

### Write with Error Handling

```pscode
try
    open file "output.txt" for writing as fileHandle
    write "Line 1" to fileHandle
    write "Line 2" to fileHandle
    write "Line 3" to fileHandle
    close fileHandle
    output "File saved successfully"
catch error
    output "Error writing file: {error}"
```

## Appending to Files

Add content to the end of an existing file:

```pscode
open file "log.txt" for appending as fileHandle
write "New log entry" to fileHandle
write "Another entry" to fileHandle
close fileHandle
```

### Log File Example

```pscode
function writeLog takes in message
    try
        open file "application.log" for appending as logFile
        timestamp = getCurrentTime()  // Hypothetical function
        write "{timestamp}: {message}" to logFile
        close logFile
    catch error
        output "Failed to write log: {error}"

// Usage
writeLog("Application started")
writeLog("User logged in")
writeLog("Data processed successfully")
```

## Reading Numbers from File

```pscode
open file "numbers.txt" for reading as fileHandle

numbers = []
while not end of fileHandle
    line = read line from fileHandle
    number = convert line to number
    append number to numbers

close fileHandle

// Process numbers
sum = 0
for each num in numbers
    sum += num

output "Sum: {sum}"
output "Average: {sum / length of numbers}"
```

## CSV File Processing

### Reading CSV

```pscode
open file "students.csv" for reading as fileHandle

students = []
firstLine = true

while not end of fileHandle
    line = read line from fileHandle

    // Skip header line
    if firstLine
        firstLine = false
        skip

    // Parse CSV line
    fields = split line by ","

    if length of fields >= 3
        name = fields[0]
        age = convert fields[1] to number
        grade = fields[2]

        output "Student: {name}, Age: {age}, Grade: {grade}"

close fileHandle
```

### Writing CSV

```pscode
students = [
    ["Alice", 20, "A"],
    ["Bob", 19, "B"],
    ["Charlie", 21, "A"]
]

open file "students.csv" for writing as fileHandle

// Write header
write "Name,Age,Grade" to fileHandle

// Write data
for each student in students
    name = student[0]
    age = student[1]
    grade = student[2]
    write "{name},{age},{grade}" to fileHandle

close fileHandle
output "CSV file created"
```

## Configuration File

### Reading Configuration

```pscode
config = []

open file "config.txt" for reading as fileHandle

while not end of fileHandle
    line = read line from fileHandle

    // Skip empty lines and comments
    if length of line equals 0 OR line[0] equals "#"
        skip

    // Parse key=value
    if line contains "="
        parts = split line by "="
        key = trim(parts[0])
        value = trim(parts[1])
        append [key, value] to config

close fileHandle

// Use configuration
for each setting in config
    output "{setting[0]} = {setting[1]}"
```

### Writing Configuration

```pscode
settings = [
    ["theme", "dark"],
    ["fontSize", "14"],
    ["autoSave", "true"]
]

open file "config.txt" for writing as fileHandle

write "# Application Configuration" to fileHandle
write "" to fileHandle

for each setting in settings
    write "{setting[0]}={setting[1]}" to fileHandle

close fileHandle
```

## Data Persistence Example

### Save Game State

```pscode
function saveGame takes in playerName and score and level
    try
        open file "savegame.txt" for writing as saveFile
        write "PLAYER={playerName}" to saveFile
        write "SCORE={score}" to saveFile
        write "LEVEL={level}" to saveFile
        close saveFile
        output "Game saved successfully"
        return true
    catch error
        output "Error saving game: {error}"
        return false

function loadGame
    try
        open file "savegame.txt" for reading as saveFile

        playerName = ""
        score = 0
        level = 1

        while not end of saveFile
            line = read line from saveFile

            if line contains "PLAYER="
                parts = split line by "="
                playerName = parts[1]
            else if line contains "SCORE="
                parts = split line by "="
                score = convert parts[1] to number
            else if line contains "LEVEL="
                parts = split line by "="
                level = convert parts[1] to number

        close saveFile

        output "Game loaded: {playerName}, Score: {score}, Level: {level}"
        return [playerName, score, level]
    catch error
        output "Error loading game: {error}"
        return null

// Usage
saveGame("Alice", 1500, 5)

gameData = loadGame()
if gameData != null
    output "Welcome back, {gameData[0]}!"
```

## Student Records System

```pscode
record Student
    string name
    number studentId
    array grades

function saveStudents takes in students
    try
        open file "students.dat" for writing as dataFile

        for each student in students
            write student.name to dataFile
            write student.studentId to dataFile

            // Save grades as comma-separated
            gradeString = join student.grades with ","
            write gradeString to dataFile

        close dataFile
        output "Students saved successfully"
        return true
    catch error
        output "Error saving students: {error}"
        return false

function loadStudents
    students = []

    try
        open file "students.dat" for reading as dataFile

        while not end of dataFile
            name = read line from dataFile
            if end of dataFile
                jump

            studentIdStr = read line from dataFile
            studentId = convert studentIdStr to number

            gradesStr = read line from dataFile
            gradeStrings = split gradesStr by ","
            grades = []
            for each gradeStr in gradeStrings
                grade = convert gradeStr to number
                append grade to grades

            student = new Student
            student.name = name
            student.studentId = studentId
            student.grades = grades

            append student to students

        close dataFile
        return students
    catch error
        output "Error loading students: {error}"
        return []

// Usage
students = [
    Student("Alice", 1001, [85, 92, 88]),
    Student("Bob", 1002, [78, 85, 90]),
    Student("Charlie", 1003, [92, 95, 91])
]

saveStudents(students)

loadedStudents = loadStudents()
output "Loaded {length of loadedStudents} students"
```

## High Score System

```pscode
record HighScore
    string playerName
    number score
    string date

function saveHighScore takes in score
    try
        // Read existing scores
        scores = loadHighScores()

        // Add new score
        append score to scores

        // Sort by score descending
        // (simplified - would need actual sorting)
        sortScoresByValue(scores)

        // Keep only top 10
        if length of scores > 10
            scores = getTopN(scores, 10)

        // Save back to file
        open file "highscores.txt" for writing as scoreFile

        for each highScore in scores
            write "{highScore.playerName},{highScore.score},{highScore.date}" to scoreFile

        close scoreFile
        return true
    catch error
        output "Error saving high score: {error}"
        return false

function loadHighScores
    scores = []

    try
        open file "highscores.txt" for reading as scoreFile

        while not end of scoreFile
            line = read line from scoreFile
            parts = split line by ","

            if length of parts >= 3
                score = new HighScore
                score.playerName = parts[0]
                score.score = convert parts[1] to number
                score.date = parts[2]
                append score to scores

        close scoreFile
    catch error
        // If file doesn't exist, return empty array
        return []

    return scores

function displayHighScores
    scores = loadHighScores()

    output "===== HIGH SCORES ====="
    if length of scores equals 0
        output "No scores yet!"
    else
        for i from 0 to length of scores - 1
            score = scores[i]
            output "{i + 1}. {score.playerName}: {score.score} ({score.date})"

// Usage
newScore = HighScore("Alice", 5000, "2024-01-15")
saveHighScore(newScore)
displayHighScores()
```

## Inventory Management

```pscode
function exportInventory takes in items
    try
        open file "inventory.csv" for writing as invFile

        // Header
        write "ID,Name,Quantity,Price" to invFile

        // Data
        for each item in items
            write "{item.id},{item.name},{item.quantity},{item.price}" to invFile

        close invFile
        output "Inventory exported to inventory.csv"
        return true
    catch error
        output "Export failed: {error}"
        return false

function importInventory
    items = []

    try
        open file "inventory.csv" for reading as invFile

        // Skip header
        header = read line from invFile

        while not end of invFile
            line = read line from invFile
            fields = split line by ","

            if length of fields >= 4
                item = new Item
                item.id = convert fields[0] to number
                item.name = fields[1]
                item.quantity = convert fields[2] to number
                item.price = convert fields[3] to number
                append item to items

        close invFile
        output "Imported {length of items} items"
        return items
    catch error
        output "Import failed: {error}"
        return []
```

## Best Practices

### 1. Always Close Files

```pscode
// Bad - file might not close if error occurs
open file "data.txt" for reading as fileHandle
processFile(fileHandle)
close fileHandle

// Good - use try-finally
fileHandle = null
try
    open file "data.txt" for reading as fileHandle
    processFile(fileHandle)
finally
    if fileHandle != null
        close fileHandle
```

### 2. Handle Errors

```pscode
try
    open file "data.txt" for reading as fileHandle
    // ... process file
    close fileHandle
catch error
    output "File operation failed: {error}"
    output "Make sure the file exists and you have permission"
```

### 3. Validate Before Writing

```pscode
if data equals null OR length of data equals 0
    output "No data to save"
else
    // Proceed with writing
```

### 4. Use Descriptive Filenames

```pscode
// Bad
open file "data.txt"

// Good
open file "customer_orders_2024.csv"
```

### 5. Check File Existence

```pscode
// Pseudo-code for checking if file exists
if fileExists("data.txt")
    // Read existing file
else
    // Create new file
```

### 6. Use Proper File Extensions

```pscode
// Text files
"notes.txt"
"readme.txt"

// Data files
"students.csv"
"config.json"
"data.xml"

// Custom formats
"savegame.sav"
"settings.cfg"
```
