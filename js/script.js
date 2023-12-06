const form = document.querySelector(".form");

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let peso = document.getElementById("weight").value;
    let altura = document.getElementById("height").value/100;

    
    const imc = parseFloat((peso/parseFloat(altura * altura))).toFixed(2);
    
    const value = document.getElementById("value");
    value.classList.add('attetion');
    let description = "";
    
    document.querySelector(".infos").classList.remove("hidden");
    
    if (imc < 18.5) {
        description = "Cuidado, você está abaixo do peso ideal!";
    }
    else if (imc >= 18.5 && imc <= 25){
        description = "Você está no peso ideal!";
        value.classList.remove('attetion');
        value.classList.add('normal');
    }
    else if (imc >= 25 && imc <= 30){
        description = "Cuidado, você está com sobrepeso!";
    }
    else if (imc >= 30 && imc <= 35){
        description = "Cuidado, você está com obesidade moderada!";
    }
    else if (imc >= 35 && imc <= 40){
        description = "Cuidado, você está com obesidade Severa!";
    }
    else{
        description = "Cuidado, você está com obesidade Morbida!";
    }
    
    value.textContent = imc.replace(".", ",");
    document.querySelector(".description").textContent = description;
});