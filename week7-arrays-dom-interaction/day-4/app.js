/* Week 7 – Day 4: Input Validation and Error Handling

Task 1 – Add Form Validation
What You’ll Build:
Enhance your form so that:

Name, Age, and Location fields must all be filled out.

Age must be a valid number between 0 and 120.

If validation fails:

Prevent the form from submitting.

Display a small error message near the invalid field(s) or near the form.
 */

const users = [
  { name: "Tina", age: 24, location: "New York" },
  { name: "Leo", age: 31, location: "Berlin" },
  { name: "Mira", age: 27, location: "Tokyo" }
];
const initialUsers = users.length;

const userContainer = document.getElementById('userContainer');
const userForm = document.getElementById("userForm");
const searchBar = document.getElementById("search");
const selectSort = document.getElementById("sort");

let currentSearch = "";
let currentSort = "A-Z";

// Function that adds new User
function addNewUser(e){
  

  const nameInput = document.getElementById("nameInput");
  const ageInput = document.getElementById("ageInput");
  const locationInput = document.getElementById("locationInput");
  const nameField = document.querySelector(".name");
  const ageField  = document.querySelector(".age");
  const locationField  = document.querySelector(".location");
  

  const newUser = {
    name: nameInput.value,
    age: ageInput.value,
    location: locationInput.value
  }
  if(nameInput.value === ""){
    nameField.textContent = "*Enter Name";
    nameField.classList.remove("hidden");
  }
  else if(isNaN(ageInput.value) || ageInput.value < 1 || ageInput.value > 120){
    ageField.textContent = "*Enter valid number";
    ageField.classList.remove("hidden");
    
  } else if(locationInput.value === ''){
    locationField.textContent = "*Enter Location";
     locationField.classList.remove("hidden");
  } else{
     nameField.classList.add("hidden");
    ageField.classList.add("hidden");
    locationField.classList.add("hidden");
    users.push(newUser);
    return users
  }
  
}


// function creates user cards
function renderUserCard(users){
  
  for(let user of users){

    let originalAge;
    let originalLocation;
    // Created Elements
    const userCard = document.createElement("div");
    const infoContainer = document.createElement('div');
    const name = document.createElement('h3');
    const ageLocale = document.createElement("p");
    const removeBtn = document.createElement('button');
    const hideInfo = document.createElement('span');
    const editBtn = document.createElement("button");
    const saveBtn = document.createElement('button');
    const editContainer = document.createElement('div');
    const inputAge = document.createElement("input");
    const inputLocale = document.createElement("input");
    const resetBtn = document.createElement("button");

    // set Attribute
    inputAge.setAttribute("placeholder", "Age");
    inputLocale.setAttribute("placeholder", "Location")

    // added text
    removeBtn.textContent = "Remove";
    hideInfo.textContent = "+";
    name.textContent = user.name;
    ageLocale.textContent = `Age: ${user.age}, Location: ${user.location}`;
    editBtn.textContent = "Edit";
    saveBtn.textContent = "Save";
    resetBtn.textContent = "Reset";

    // added class names to created elements
    userCard.className= "user-card";
    removeBtn.className = "remove-btn";
    editBtn.className = "edit-btn";
    hideInfo.className = "info";
    infoContainer.className = "info-container hidden";
    editContainer.className = "edit-container hidden";
    saveBtn.className = "save-btn hidden";
    resetBtn.className = "reset-btn";

    // append Elements to parent
    userCard.append(hideInfo, name, editContainer, infoContainer, removeBtn, editBtn, saveBtn, resetBtn);
    infoContainer.append(ageLocale);
    userContainer.append(userCard);
    editContainer.append(inputAge, inputLocale);

    // click events
    removeBtn.addEventListener("click", function(){
      userCard.remove();
    });
    hideInfo.addEventListener("click", function(){
      infoContainer.classList.toggle("hidden");
      hideInfo.textContent === "+" ? hideInfo.textContent = "-" : hideInfo.textContent = "+";
    });
    editBtn.addEventListener("click", function(){
      originalAge = user.age;
      originalLocation =  user.location;
      toggleEditMode(editContainer, saveBtn, editBtn)
      inputAge.focus();
    });
    saveBtn.addEventListener("click", function(){
      if(inputAge.value && inputLocale.value){
          ageLocale.textContent = `Age: ${inputAge.value}, Location: ${inputLocale.value}`
          user.age = inputAge.value;
          user.location = inputLocale.value;
          toggleEditMode(editContainer, saveBtn, editBtn)
          inputAge.value = '';
          inputLocale.value = '';
      }
    
    });
    resetBtn.addEventListener("click", function(){
      user.age = originalAge;
      user.location = originalLocation;
      ageLocale.textContent = `Age: ${user.age}, Location: ${user.location}`
      editContainer.classList.add("hidden");
      saveBtn.classList.add("hidden");
      editBtn.classList.remove("hidden");

      inputAge.value = '';
      inputLocale.value = '';
    });
    
    
  }


}
renderUserCard(users)

// hides our selected elements on/off
function toggleEditMode(...elements){
  for(let el of elements){
    el.classList.toggle("hidden");
  }
  
}

function renderFilteredAndSortedUsers(){
    currentSearch = searchBar.value.toLowerCase();
    currentSort = selectSort.value;
    const searchFilter = users.filter(user => user.name.toLowerCase().includes(currentSearch))

    if(currentSort === "youngest"){
      const sorted = [...searchFilter].sort((a,b)=> a.age - b.age);
      userContainer.innerHTML = "";
      renderUserCard(sorted);
    }else if(currentSort === "oldest"){
      const sorted = [...searchFilter].sort((a,b)=> b.age - a.age);
      userContainer.innerHTML = "";
      renderUserCard(sorted);
    }else if(currentSort === "Z-A"){
      const sorted = [...searchFilter].sort((a,b)=> b.name.localeCompare(a.name));
      userContainer.innerHTML = "";
      renderUserCard(sorted);
    }else{
      const sorted = [...searchFilter].sort((a,b)=> a.name.localeCompare(b.name));
      userContainer.innerHTML = "";
      renderUserCard(sorted);     
    }
}


userForm.addEventListener("submit", function(e){
  e.preventDefault();
   const updatedUsers = addNewUser(e);

  if(initialUsers < users.length){
    renderFilteredAndSortedUsers()
  }
});

searchBar.addEventListener("input", function(e){
  
  renderFilteredAndSortedUsers()
  
})

selectSort.addEventListener("change", function(e){

   renderFilteredAndSortedUsers()
})
