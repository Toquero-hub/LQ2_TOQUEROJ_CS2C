// Custom alert function for non-browser environments
function alert(message) {
    console.log(message); // Just log the message to the console
}

const ps = require("prompt-sync"); // This line imports the prompt-sync
const prompt = ps(); // This line initializes the prompt function

// Function to gather user input and process it
function userDetails() {
    // Collecting user input
    let name = prompt("Enter your Name:");
    let address = prompt("Enter your Address:");
    let age = parseInt(prompt("Enter your Age:"));
    let classRole = prompt("Enter your Class Role (Officer, Student, Teacher):");
    let course = prompt("Enter your Course (BSCS, BSM, BAEL):");

    // Check for valid age input
    if (isNaN(age) || age <= 0) {
        alert("Please enter a valid age.");
        return;
    }

    // Determine course and class role
    switch (course.toUpperCase()) {
        case "BSCS":
            handleBSCS(classRole, name, age);
            break;
        case "BSM":
            handleBSM(classRole, name, age);
            break;
        case "BAEL":
            handleBAEL(classRole, name, age);
            break;
        default:
            alert("Course not recognized. Please enter BSCS, BSM, or BAEL.");
            break;
    }
}

// Function to handle BSCS course
function handleBSCS(classRole, name, age) {
    switch (classRole.toLowerCase()) {
        case "officer":
            printName(name, age);
            break;
        case "student":
            printName(name, age);
            break;
        case "teacher":
            printName(name, age);
            break;
        default:
            alert("Class role not recognized. Defaulting to 'Student'.");
            printName(name, age);
            break;
    }
}

// Function to handle BSM course
function handleBSM(classRole, name, age) {
    switch (classRole.toLowerCase()) {
        case "officer":
            printName(name, age);
            break;
        case "student":
            printName(name, age);
            break;
        case "teacher":
            printName(name, age);
            break;
        default:
            alert("Class role not recognized. Defaulting to 'Student'.");
            printName(name, age);
            break;
    }
}

// Function to handle BAEL course
function handleBAEL(classRole, name, age) {
    switch (classRole.toLowerCase()) {
        case "officer":
            printName(name, age);
            break;
        case "student":
            printName(name, age);
            break;
        case "teacher":
            printName(name, age);
            break;
        default:
            alert("Class role not recognized. Defaulting to 'Student'.");
            printName(name, age);
            break;
    }
}

// Function to print the user's name based on their age
function printName(name, age) {
    let iterations = Math.floor(age / 4); // Calculate iterations as 1/4 of the Age
    for (let i = 0; i < iterations; i++) {
        alert(`Hello ${name}! This is message number ${i + 1}.`);
    }
}

// Run the program
userDetails();
