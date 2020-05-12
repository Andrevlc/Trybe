let nota = 80;
switch(true){
    case (nota >= 90 && nota <=100):
      console.log("Grade: A");
    break;
    case (nota <90 && nota >=80):
      console.log("Grade: B");
    break;
    case (nota <80 && nota >=70):
      console.log("Grade: C");
    break;
    case (nota <70 && nota >=60):
      console.log("Grade: D");
    break;
    case (nota <60 && nota >=50):
      console.log("Grade: E");
    break;
    case (nota <50 && nota >=0):
      console.log("Grade: F");
    break;
  default:
    console.log("Não corresponde a uma nota válida");
}