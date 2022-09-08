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
            valueOfIn.push(input.value);
        }
        else{
            valueOfIn.push(".")
        }
    });
    console.log(valueOfIn);
};


// import axios from "axios";


let solve =()=>{
    // let axios = require('axios');
    joinValues();
    const axios = require("axios");

                const options = {
                method: 'POST',
                url: 'https://solve-sudoku.p.rapidapi.com/',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
                    'X-RapidAPI-Host': 'solve-sudoku.p.rapidapi.com'
                },
                data: '{"puzzle":"2.............62....1....7...6..8...3...9...7...6..4...4....8....52.............3"}'
                };

                axios.request(options).then(function (response) {
                    console.log(response.data);
                }).catch(function (error) {
                    console.error(error);
                });
};
solveButton.addEventListener("click", solve);