

var cities = Getstorage() || [] //Agr khali hoga cities  to pipe operator || laga k  array lagaenge khali to error nh dega
var input = document.getElementById("input-box")
var listItem = document.getElementById("listitem")
Showcity() //ye function  isliye hai  k  refresh agr browser ko kare to list show hi hoty rahen  ghayab  na ho.



// Add Opperation
function Addcity() {
  if (input.value === "") {
    alert("Please Enter  City Name ")
  } else {
    if (cities.indexOf(input.value) == -1) {//its means agr input me jo  value dal rhe hai agr cities me  nha hai to if chale  wrna else chale agr mojood hai to   city .
      cities.push(input.value);
      savestorage() // ye storage me save krrha hai input me value enter krty hi.
      input.value = "" //ye input khali krta hai  & issey input khali hogya .
      Showcity()

    } else {
      alert("City name already exixst")
      input.value = ""//issey input khali hogya .
    }
  }

}


function Showcity() {
  var datafromstorage = Getstorage()
  listItem.innerHTML = ""
  for (let i = 0; i < datafromstorage.length; i++) {
    listItem.innerHTML += `<li>${datafromstorage[i]}<span><svg  class= "Trash-svg" height="30px" width= "25px" onclick= "deleteitem(${i})"width="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">Add commentMore actions
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
 </span>  
 
 <svg class= "edit-svg"   xmlns="http://www.w3.org/2000/svg" fill="none" onclick="editItem(${i})" viewBox="0 0 24 24" height="23px" width= "25px" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>
        
        
        <li/>`

  }
}

// Delete Operation
function deleteitem(index) {
  cities.splice(index, 1); //ye bta rha  hai k shoro index or kitny element delete krny hai 
  savestorage(cities)
  Showcity()
}


// Edit Operation
function editItem(index) {
  var promptUser = prompt("Enter your new value  ", cities[index])
  cities[index] = promptUser;  // is prefer
  // cities.splice(index , 1 , prompt) //is not prefer
  savestorage(cities)
  Showcity()
}

function savestorage() {
  localStorage.setItem("Array", JSON.stringify(cities))



}

function Getstorage() {
  var saveStorage = localStorage.getItem("Array")
  var orignalcondition = JSON.parse(saveStorage)
  return orignalcondition

}