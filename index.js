// let bonusPoints = 50;

//  bonusPoints = bonusPoints + 50;
// bonusPoints=bonusPoints - 75
// bonusPoints = bonusPoints + 45

// let lap1=34
// let lap2=33
//  let lap3=36
// function totalLapTime() {
//     console.log(lap1+lap2+lap3)
// }
// totalLapTime()


// let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times
// function lapLaspe(){
//     lapsCompleted = lapsCompleted + 1
// }
// lapLaspe()

// lapLaspe()

// lapLaspe()

// console.log(lapsCompleted)

// let count = 0
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

// function increment(){
//     count = count + 1
//     console.log(count)
// }

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

// console.log(countEl)

let count = 0
//let secondCount = count--

function increment() {
    count = count + 1
    countEl.textContent = count
}

function decrement(){
    secondCount = count - 1
    countEl.textContent = secondCount
    
}


//1. Create a function, save(), which logs out the count when it's called
function save(){
    console.log(count)
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 -"
   let countDash = count + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countDash
    // NB: Make sure to not delete the existing content of the paragraph
    countEl.textContent = 0
    count = 0
}
// innerText alternative mdn
// textcontent
