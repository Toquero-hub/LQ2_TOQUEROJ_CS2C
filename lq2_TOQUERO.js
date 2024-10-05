const ps = require("prompt-sync"); // This line imports the prompt-sync
const prompt = ps(); // This line initializes the prompt function

// Prompt for user input
let name = prompt("Enter your Name: ");
let address = prompt("Enter your Address: ");
let age = parseInt(prompt("Enter your Age: "));
let classRole = prompt("Enter your Class Role (Officer, Student, Teacher): ").toLowerCase();
let course = prompt("Enter your Course (BSCS, BSM, BAEL): ").toLowerCase();

// Determine the course and class role
switch (course) {
    case "bscs":
    case "bsm":
    case "bael":
        for (let i = 0; i < Math.floor(age / 4); i++) {
            if (classRole === "officer") {
                console.log(`Name: ${name} - Role: Officer in ${course.toUpperCase()}`);
            } else if (classRole === "student") {
                console.log(`Name: ${name} - Role: Student in ${course.toUpperCase()}`);
            } else if (classRole === "teacher") {
                console.log(`Name: ${name} - Role: Teacher in ${course.toUpperCase()}`);
            } else {
                console.log(`Name: ${name} - Role: Unknown in ${course.toUpperCase()}`);
            }
        }
        break;

    default:
        console.log("Invalid Course! Please enter BSCS, BSM, or BAEL.");
}

// Fallback message if no valid role is found
if (!["officer", "student", "teacher"].includes(classRole)) {
    console.log("No valid class role detected. Please enter Officer, Student, or Teacher.");
}
