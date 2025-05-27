function calculate(operation){
const firstNumber = parseFloat(document.getElementById('first').value);
const secondNumber = parseFloat(document.getElementById('second').value);
let result;
if(isNaN(firstNumber) || isNaN(secondNumber)){
    result = "ENTER VALID INPUT";
}
else{

    switch(operation){
        case 'add' :
            result = firstNumber + secondNumber
            break;
        
        case 'sub':
            result = firstNumber  - secondNumber
            break;

        case 'mul' :
            result = firstNumber * secondNumber
            break
        
        case 'divi' : 
            result = secondNumber == 0 ? "INVALID INPUT,ERROR: Divisible BY Zero" : (firstNumber/secondNumber)
            break

        default:
            result = "INVALId OPRATION"
    }
     
}
        document.getElementById('RESULT').innerText  = result;
}


document.getElementById('add').addEventListener('click', ()=> {calculate('add')})
document.getElementById('add').addEventListener('click', ()=> {calculate('add')})
document.getElementById('add').addEventListener('click', ()=> {calculate('add')})
document.getElementById('add').addEventListener('click', ()=> {calculate('add')})

document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('first').value = '';  
    document.getElementById('second').value = ''; 
    document.getElementById('RESULT').innerText = 'RESULT'; 
});