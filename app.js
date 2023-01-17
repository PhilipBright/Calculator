const buttons = document.querySelectorAll('button');
const screenD = document.querySelector('.screen');

let calculation = []
let joinCal

const calculate = (button) => {
    const value = button.textContent
    if(value === "Clear"){
        calculation=[]
        screenD.textContent = ''
    }
    else if(value === "="){
        screenD.textContent = eval(joinCal)
    }
    else{
        calculation.push(value)
    joinCal = calculation.join('')
    screenD.textContent = joinCal
    }
    
   
}

buttons.forEach( button => button.addEventListener('click',() => calculate(button)))