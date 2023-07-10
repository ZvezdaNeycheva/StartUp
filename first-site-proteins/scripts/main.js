function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }

 function calculateDailyProteinIntake() {
   let kg =  document.getElementById("proteinIntake").value 
   let result = Number(kg) * 1.6  
   document.getElementById("returnProteinIntake").innerHTML = 'Your daily intake should be: '+ result.toFixed(2) +" grams"
 }
