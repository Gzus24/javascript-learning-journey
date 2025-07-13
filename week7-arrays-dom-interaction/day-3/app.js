/*Week 7 day 3
Task 1 – Live Search Filtering
Objective: Create a user search feature that filters cards based on the name.

What You’ll Build:
You'll display a list of users, and as the user types into a search input,
 only the matching cards will remain visible in real time. 
 
 Task 2 – Add a Sort Feature
Objective: Allow users to sort the cards by name or age using a dropdown menu.

What You’ll Build:
A dropdown (<select>) above the user cards with options like:

Sort by Name (A–Z)

Sort by Name (Z–A)

Sort by Age (Youngest First)

Sort by Age (Oldest First)

Whenever the user changes the selection, the user cards should re-render in the correct sorted order.
 
Task 3 – Combine Search and Sort Functionality
  Objective:
Allow users to search and sort simultaneously. When someone types in the search bar and selects a sort option, 
the displayed user cards should match both filters.

  What You’ll Build:
You're enhancing your app so that:

Typing in the search input filters user cards by name.

Selecting a sort option reorders the already filtered results.

Both filters work together, not just independently.

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
  e.preventDefault();

  const nameInput = document.getElementById("nameInput");
  const ageInput = document.getElementById("ageInput");
  const locationInput = document.getElementById("locationInput");

  const newUser = {
    name: nameInput.value,
    age: ageInput.value,
    location: locationInput.value
  }

  users.push(newUser);
  
  return users;
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
          console.log(users)
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
      console.log(users)
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
