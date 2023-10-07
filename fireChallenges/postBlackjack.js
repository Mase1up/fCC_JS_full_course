// Create a person object with 3 keys: name, age, country use self

let person = {
    name: "Mason",
    age: 40,
    country: "the United States"
}

// Create a function logData(), that uses the person object to create a string
// in the following format:
// "Mason is 40 years old and lives in ..

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}

// Invoke the logData() function to verify
logData();