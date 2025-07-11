// Task 1: Render Reusable User Card Function
/* You're given an array of user data. Your task is to write a reusable 
function that renders a "user card" for each user.

 Task 2: Toggle User Details
 Goal: Add a button to each user card that toggles the visibility of the user's age
  and location (like a “Show Details” / “Hide Details” toggle).

  Task 3: Add User Form
You’re going to allow users to be added dynamically through a form.

Task 4: Make User Cards Editable
 Goal:
Add the ability to edit a user's name, age, and location directly on the card.

Task 5: Add full edit functionality that updates the underlying users array too
*/

const users = [
  { name: "Tina", age: 24, location: "New York" },
  { name: "Leo", age: 31, location: "Berlin" },
  { name: "Mira", age: 27, location: "Tokyo" }
];
const initialUsers = users.length;

const userContainer = document.getElementById('userContainer');
const userForm = document.getElementById("userForm");

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

function toggleEditMode(...elements){
  for(let el of elements){
    el.classList.toggle("hidden");
  }
  
}


userForm.addEventListener("submit", function(e){
   const updatedUsers = addNewUser(e);
  if(initialUsers < users.length){
    const [newUser] = users.slice(-1)
    renderUserCard([newUser])
    
  }
 
});

