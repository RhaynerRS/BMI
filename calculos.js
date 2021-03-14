function IMC(){
    var peso=document.getElementById("peso").value
    var alt=document.getElementById("alt").value
  imc=(peso/(alt*alt))
  if (imc<17){
    status="muito abaixo do peso."
  }
  else if (imc>=17 && imc<=18.49){
    status="abaixo do peso."
  }
  else if (imc>=18.5 && imc<=24.99){
    status="com o peso normal."
  }
  else if (imc>=25 && imc<=29.99){
    status="Acima do peso."
  }
  else if (imc>=30 && imc<=34.99){
    status="Obesidade I."
  }
  else if (imc>=35 && imc<=39.99){
    status="Obesidade II."
  }
  else{
    status="Obesidade III"
  }
       imco.innerHTML=imc.toFixed(2)
       result.innerHTML=status}


function BF(){
  var neck=document.getElementById("neck").value
  var alt=document.getElementById("alt").value
  var waist=document.getElementById("waist").value
  bf=(495/(1.0324 - 0.19077*Math.log10(waist-neck)  + 0.15456*Math.log10(alt*100)))-450
  result.innerHTML=bf.toFixed(2)}

function TMB(){
  var peso=document.getElementById("peso").value
  var alt=document.getElementById("alt").value
  var idade=document.getElementById("idade").value
  tmb=(66+(13.8*peso)+(5*(alt*100)))-(6.8*idade)
  result.innerHTML=tmb.toFixed(2)}