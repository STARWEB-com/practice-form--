const involveGet = document.getElementById("involveGet");
const formInvolve = document.getElementById("getInvolve");

involveGet.addEventListener("click" , () => {
  formInvolve.hidden = !formInvolve.hidden;
  
  console.log(involveGet, formInvolve);
});