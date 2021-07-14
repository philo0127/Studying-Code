const selectMenu = document.querySelector(".selectMenu");
const option = selectMenu.querySelectorAll("option");

const SELECTED_CONT = "Country";

function saveCountry(text){
  localStorage.setItem(SELECTED_CONT, text);
}

function handleSelect(event){
  event.preventDefault();
  const selectedValue = event.target.value;
  saveCountry(selectedValue);
}

function giveSelected(text){
  if (option[1].value === text) {
    option[1].setAttribute("selected","selected")
  } else if (option[2].value === text) {
    option[2].setAttribute("selected","selected")
  } else if (option[3].value === text) {
    option[3].setAttribute("selected","selected")
  } else {
    option[4].setAttribute("selected","selected")
  }
}

function loadSelectedCountry() {
  if(localStorage.getItem("Country") !== null){
    giveSelected(localStorage.getItem("Country"));
  }
}

function init(){
  loadSelectedCountry();
  selectMenu.addEventListener("change", handleSelect);
}
init();