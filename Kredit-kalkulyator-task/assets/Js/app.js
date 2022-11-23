function Calculate() {
  let a = document.getElementById("Total").value
  let b = document.getElementById("Faiz").value
  let c = document.getElementById("Tarix").value

  if(a>0 && a<=800000) 
  {
    if(b>0 && b<= 25) {
      document.getElementById("hesab-1").innerText = (a*(1+(b/100))).toFixed(2)
      document.getElementById("ay-1").innerText = ((a*(1+(b/100)))/c).toFixed(2)
    }

    else{
      alert("Maksimum 25 % daxil edilə bilər")
    }

    
  } else{
    alert("Maksimum 800000 daxil edilə bilər")
  }

}





  



