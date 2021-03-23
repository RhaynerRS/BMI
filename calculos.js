function IMC(){
    var peso=document.getElementById("peso").value
    var alt=document.getElementById("alt").value
    var altura=alt/100
  if (alt.indexOf('.' || ',')>-1){ imc=(peso/(alt*alt))}
  else{imc=(peso/(altura*altura))}

 
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
       imco.innerHTML=("Seu imc é: "+imc.toFixed(2))
       result.innerHTML=("E voce esta: "+status)}

function BF(){
  var neck=document.getElementById("neck").value
  var alt=document.getElementById("alt").value
  var waist=document.getElementById("waist").value
  var altura=alt/100
  if (alt.indexOf('.' || ',')>-1){
  bf=(495/(1.0324 - 0.19077*Math.log10(waist-neck)  + 0.15456*Math.log10(alt*100)))-450
  result.innerHTML=bf.toFixed(2)}
  else{bf=(495/(1.0324 - 0.19077*Math.log10(waist-neck)  + 0.15456*Math.log10(altura*100)))-450
    result.innerHTML=bf.toFixed(2)}

}

function TMB(){
  var peso=document.getElementById("peso").value
  var alt=document.getElementById("alt").value
  var idade=document.getElementById("idade").value
  var altura=alt/100
  if (alt.indexOf('.' || ',')>-1){
  tmb=(66+(13.8*peso)+(5*(alt*100)))-(6.8*idade)}
  else{tmb=(66+(13.8*peso)+(5*(altura*100)))-(6.8*idade)
  }
  result.innerHTML=tmb.toFixed(2)

}
