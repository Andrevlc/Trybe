let salarioBruto = 2500 , salarioBase = 0;
if(salarioBruto<=1556.94){
    salarioBase = salarioBruto*0.92; 
    console.log("Valor antes do IR:" +salarioBase);
}
else if (salarioBruto>1556.94 && salarioBruto<=2594.92){
    salarioBase = salarioBruto*0.91;
    console.log("Valor antes do IR:" +salarioBase);
}
else if (salarioBruto>2594.92 && salarioBruto<=5189.82){
    salarioBase = salarioBruto*0.89;
    console.log("Valor antes do IR:" +salarioBase);
}
else{
    salarioBase=salarioBruto-570.88;
    console.log("Valor antes do IR:" +salarioBase);
}

if(salarioBase<=1903.98){
    console.log("Salário isento do imposto de renda. Valor salário final:" +salarioBase);
}
else if(salarioBase>1903.98&&salarioBase<=2826.65){
    salarioBase=salarioBase-(salarioBase*0.075-142.80);
    console.log("Salário após dedução do IR:" +salarioBase);
}
else if(salarioBase>2826.65&&salarioBase<=3751.05){
    salarioBase=salarioBase-(salarioBase*0.15-354.80);
    console.log("Salário após dedução do IR:" +salarioBase);
}
else if(salarioBase>3751.05&&salarioBase<=4664.68){
    salarioBase=salarioBase-(salarioBase*0.225-636.13);
    console.log("Salário após dedução do IR:" +salarioBase);
}
else{
    salarioBase=salarioBase-(salarioBase-869.36);
    console.log("Salário após dedução do IR:" +salarioBase);
}