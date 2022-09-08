const puzzle = document.getElementById("puzzle");
const solveButton = document.getElementById("solve-button");
const valueOfIn =[];
const square = 81;

for(let i=0; i < square; i++){
    const inputElement =  document.createElement("Input");
    inputElement.setAttribute("type", "number");
    inputElement.setAttribute("min","0");
    inputElement.setAttribute("max","9");

    puzzle.appendChild(inputElement);
}




const joinValues  = () =>{
    const inputs = document.querySelectorAll("input");
    
    inputs.forEach(input=>{
        if(input.value){
            valueOfIn.push(inputs.value);
        }
        else{
            valueOfIn.push(".")
        }
    });
    console.log(valueOfIn);
};

solveButton.addEventListener("click", joinValues);