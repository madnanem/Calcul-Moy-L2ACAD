function calculateAverages() {

  let subjects = [];
  let totalWeighted = 0, totalUnits = 0;

  /* if (tableId === 1) {
      subjects = ["Algo", "Archi", "Si", "Mi", "Proba", "Logique", "ENG"];
  } else if (tableId === 2) {
      subjects = ["BDD", "Archi2", "SE", "POO", "THL", "Python", "ENG2"];
  } */

      subjects = ["Algo", "Archi", "Si", "Mi", "Proba", "Logique", "ENG"];

  subjects.forEach(subject => {
      let interroElement = document.getElementById(`interro${subject}`);
      let examenElement = document.getElementById(`examen${subject}`);
      let tpElement = document.getElementById(`tp${subject}`);

      console.log(`Checking elements for ${subject}:`, interroElement, examenElement, tpElement); // Debugging log

      let interro = parseFloat(interroElement ? interroElement.value : 0) || 0;
      let examen = parseFloat(examenElement ? examenElement.value : 0) || 0;
      let tp = parseFloat(tpElement ? tpElement.value : 0) || 0;

      console.log(`Subject: ${subject}, Interro: ${interro}, Examen: ${examen}, TP: ${tp}`);

      let moy;
      if (tp) {
          moy = (interro * 0.25 + examen * 0.5 + tp * 0.25).toFixed(2);
      } else { 
        if(interro){
          moy = ((interro + examen * 2) / 3).toFixed(2);
        }else moy = examen.toFixed(2);       
      }
          



      document.getElementById(`moy${subject}`).innerText = moy;

      let unitWeight = subject === "ENG" ? 2 : 3;
      totalWeighted += parseFloat(moy) * unitWeight;
      totalUnits += unitWeight;
  });

  let finalAvg = (totalWeighted / totalUnits).toFixed(2);
  document.getElementById("finalResult").innerText = "Final Semester Average: " + finalAvg;
}

  

    
      function loadSavedValues() {
  let subjects = [
      "Algo", "Archi", "Si", "Mi", "Proba", "Logique", "ENG",
      "BDD", "Archi2", "SE", "POO", "THL", "Python", "ENG2"
  ];

  subjects.forEach(subject => {
      let interroElement = document.getElementById(`interro${subject}`);
      let examenElement = document.getElementById(`examen${subject}`);
      let tpElement = document.getElementById(`tp${subject}`);
      let moyElement = document.getElementById(`moy${subject}`);

      if (interroElement && localStorage.getItem(`interro${subject}`)) {
          interroElement.value = localStorage.getItem(`interro${subject}`);
      }
      if (examenElement && localStorage.getItem(`examen${subject}`)) {
          examenElement.value = localStorage.getItem(`examen${subject}`);
      }
      if (tpElement && localStorage.getItem(`tp${subject}`)) {
          tpElement.value = localStorage.getItem(`tp${subject}`);
      }
      if (moyElement && localStorage.getItem(`moy${subject}`)) {
          moyElement.innerText = localStorage.getItem(`moy${subject}`);
      }
  });

  let finalAvg = localStorage.getItem("finalAverage");
  if (finalAvg) { 
    document.getElementById("finalResult").innerText = "Final Semester Average: " + finalAvg;
  }

    
      window.onload = loadSavedValues; 
}