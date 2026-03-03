let form = document.querySelector(".conatiner");
let result = document.querySelector(".output");


// BMI Calculation
const calculateBMI = (val1, val2)=>{
    if (val1 <= 0 || isNaN(val1)) {
        result.innerHTML = "Please enter valid height value";
        return;
    }
    if (val2 <= 0 || isNaN(val2)) {
        result.innerHTML = "Please enter valid weight value";
        return;
    }
    const bmi = Number(val2 / ((val1*val1) / 10000)).toFixed(2);

    let message = `Your BMI is ${bmi}`;

    if(bmi <18.6){
        message += " (Underweight)";
    }else if(bmi >= 18.6 && bmi <= 24.6){
        message += " (Normal)";
    }else{
        message += " (Overweight)";
    }

    // showing the result as an output in BMI Card
    result.innerHTML = message;
};


// Event-Listener on form
form.addEventListener("submit", (e) =>{
    e.preventDefault();

    let height = document.getElementById("input1");
    let weight = document.getElementById("input2");

    const val1 = parseInt(height.value);
    const val2 = parseInt(weight.value);

    calculateBMI(val1, val2);

    height.value = "";
    weight.value = "";
});