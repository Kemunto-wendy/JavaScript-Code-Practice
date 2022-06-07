// UTILITY
function printValue(value){
    console.info(value)
}

// 1.0 DEFINE VARIABLES
//TODO: ADD fixed variable

    //const pi = 3.142;
   // printValue(pi)(works like the console.log)

    const pi = 3.142;
    console.log(pi);

//TODO: ADD redeclarable variable

   // var cityBorn = "Nairobi";
   // var birthday = "Aug 12th";
    //printValue(cityBorn + birthday)

    var radius = 5
    var radius = 70
    printValue(radius)
//TODO: ADD re-assignable but not redeclarable variable

    let age = 18
    age = 19
    printValue(age)
    var radius = 28
    printValue(radius)

// 2.0 DIFFERENT DATA TYPES
//TODO: Create a fixed variable with a number value

   const num = 18
   printValue(num)
//TODO: Create a redeclarable variable with a boolean value
    var personIsTeacher = true;
    var personIsStudent = false;
    printValue(personIsTeacher)

//TODO: Create a re-assignable variable with a string value
    let lastName = "charles"
    let fistName = "Joy"
    printValue(lastName)

// 3.0 STRING OPERATIONS
//TODO: Concatenate string (+)
    let firstStudent = "Ian"
    let lastStudent = "Okumu"
    let fullStudent = firstStudent + " " + lastStudent
    printValue(fullStudent)

//TODO: Interpolate string (`${}`)

let firstParent = "Mercy"
let lastParent = "Kungu"
printValue(lastParent)
//TODO: Convert to uppercase

let fullKid = "fidel"
let upper = fullKid.toUpperCase()
printValue(upper)


//TODO: Convert to lowercase
let fullChild = "Anthony"
let lower = fullChild.toLowerCase()
printValue(lower)


//TODO: Index a specific character


//TODO: PRACTICE ON YOUR OWN (Check mozilla documentation)


// 4.0 COMPARISON
//TODO: strict equality
    printValue(6 === 6)

//TODO: strict inequality
    printValue(6 !== 6)

//TODO: equality
    printValue(6 != 7)

//TODO: inequality
    printValue( 9 == 9)

//TODO: greater than
    printValue(8 > 6)
    printValue(6 > 8)

//TODO: less than


//TODO: greater or equal to


//TODO: less or equal to



// 5.0 CONTROL FLOW
// TODO: if-else statement


//TODO: switch-case
