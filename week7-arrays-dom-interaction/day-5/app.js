/* Week 7, Day 5 – Project Challenge
🎯 Goal: Bring everything together into a small User Management App.

You’ll build a fully functional app that lets you:

Add users with name, age, and location

Edit/reset/remove individual users

Search users by name (live filter)

Sort users by age or name (with select dropdown)

Validate form input

Keep everything updating live*/

const profileContainer = document.getElementById("profile-container");
const userForm = document.getElementById("user-form");
const searchBar = document.getElementById("search");
const selectSort = document.getElementById("sort");

let currentSearch = '';
let currentSort = "A-Z";

// Initial users
const users = [
    {
        name: "Alice",
        age:24,
        location: "New York"
    },
    {
        name: "Jeff",
        age: 18,
        location: "Texas"
    },
    {
        name: "Emily",
        age: 30,
        location: "California"
    }
];
const InitialUserLength = users.length;

function renderNewUser(){
    const nameInput = document.getElementById("name-input");
    const ageInput = document.getElementById("age-input");
    const locationInput = document.getElementById("location-input");

    let hasError = false;

    if(!nameInput.value.trim()){
        nameInput.setAttribute("placeholder", "Enter Name");
        nameInput.classList.add("error");
        hasError = true;
    }else{
        nameInput.setAttribute("placeholder", "Name");
        nameInput.classList.remove("error");
    }

    if(!ageInput.value.trim()){
        ageInput.setAttribute("placeholder", "Enter a valid Number");
        ageInput.classList.add("error");
        hasError = true;
    }else{
        ageInput.setAttribute("placeholder", "Age");
        ageInput.classList.remove("error");
    }

    if(!locationInput.value.trim()){
        locationInput.setAttribute("placeholder", "Enter a Location");
        locationInput.classList.add("error");
        hasError = true;
    }else{
        locationInput.setAttribute("placeholder", "Location");
        locationInput.classList.remove("error");
    }

    if(hasError) return;

    const newUser = {
        name: nameInput.value,
        age: ageInput.value,
        location: locationInput.value
    };

    const checkDuplicate = users.some(user => user.name.trim().toLowerCase() === newUser.name.trim().toLowerCase() 
    && String(user.age) === String(newUser.age) && user.location.trim().toLowerCase() === newUser.location.trim().toLowerCase());

    if(checkDuplicate){
        alert("Duplicate User")
    }else{
        users.push(newUser);
    }

    

    return users;
    
}


function renderUserCard(users){
    for(let user of users){
        let originalName = user.name;
        let originalAge = user.age;
        let originalLocation = user.location;

        const cardContainer = document.createElement("div");
        const card = document.createElement("div");
        const frontCard = document.createElement("div");
        const backCard  = document.createElement("div");
        const nameOnCard = document.createElement("p");
        const ageOnCard = document.createElement("p");
        const locationOnCard = document.createElement("p");
        const frontContainer = document.createElement("div");
        const profileLogo = document.createElement("i");
        const flipBtn = document.createElement('i');
        const editBtn = document.createElement("i");
        const backFlip = document.createElement("i");
        const saveBtn = document.createElement("i");
        const resetBtn = document.createElement("i");
        const removeBtn = document.createElement("i")
        const btnContainer = document.createElement("div");
        const nameEdit = document.createElement("input");
        const ageEdit = document.createElement("input");
        const locationEdit = document.createElement("input");

        // Add class Names
        cardContainer.className = 'card-container';
        card.className = 'card';
        frontCard.className = 'front-card';
        profileLogo.className = 'profile-logo fa-solid fa-user';
        backCard.className = 'back-card';
        nameOnCard.className = 'name';
        ageOnCard.className = 'age';
        locationOnCard.className = 'location';
        editBtn.className = 'edit-btn fa-solid fa-user-pen';
        flipBtn.className = 'flip-btn fa-solid fa-repeat';
        saveBtn.className = "save-btn fa-regular fa-floppy-disk"
        resetBtn.className = "reset-btn fa-solid fa-eraser";
        removeBtn.className = " remove-btn fa-solid fa-trash"
        backFlip.className = "flip-btn fa-solid fa-repeat";
        frontContainer.className = "front-container";
        btnContainer.className = "btn-container";
        nameEdit.className = 'edit-name hidden';
        ageEdit.className = 'edit-age hidden';
        locationEdit.className = 'edit-location hidden';

        // set Attribute
        nameEdit.setAttribute("placeholder", "Name");
        ageEdit.setAttribute("placeholder", "Age");
        ageEdit.setAttribute('type', "number")
        locationEdit.setAttribute("placeholder", "Location");



        // Append elements
        profileContainer.append(cardContainer);
        cardContainer.append(card);
        card.append(frontCard);
        frontCard.append(profileLogo,frontContainer);
        frontContainer.append(flipBtn, removeBtn)
        card.append(backCard);
        backCard.append(nameOnCard, ageOnCard, locationOnCard,nameEdit, ageEdit, locationEdit, btnContainer);
        btnContainer.append( backFlip, editBtn, saveBtn, resetBtn);

        nameOnCard.textContent = user.name;
        ageOnCard.textContent = user.age;
        locationOnCard.textContent = user.location;

        // Event Listeners
        flipBtn.addEventListener("click", function(e){
            card.classList.toggle('flip-card');
        });

        backFlip.addEventListener("click", function(e){
            card.classList.toggle('flip-card');
        });
        
        editBtn.addEventListener("click", function(e){
            addElements(nameEdit, ageEdit, locationEdit);
            removeElements(nameOnCard, ageOnCard, locationOnCard);
        });
        saveBtn.addEventListener("click", function(e){
            if(nameEdit.value !== '' && ageEdit.value !== '' && locationEdit.value !== ''){

                nameOnCard.textContent = nameEdit.value;
                ageOnCard.textContent = ageEdit.value;
                locationOnCard.textContent = locationEdit.value;
                removeElements(nameEdit, ageEdit, locationEdit);
                addElements(nameOnCard, ageOnCard, locationOnCard);

                nameEdit.style.backgroundColor = 'white';
                ageEdit.style.backgroundColor = 'white';
                locationEdit.style.backgroundColor = 'white';

                nameEdit.value = '';
                ageEdit.value = ''
                locationEdit.value = ''
                
            }else{
                nameEdit.style.backgroundColor = 'red';
                ageEdit.style.backgroundColor = 'red';
                locationEdit.style.backgroundColor = 'red';
            }
            
          
        });
        resetBtn.addEventListener("click", function(e){
            nameOnCard.textContent = originalName;
            ageOnCard.textContent = originalAge;
            locationOnCard.textContent = originalLocation;
            addElements(nameOnCard, ageOnCard, locationOnCard);
            removeElements(nameEdit, ageEdit, locationEdit);

             nameEdit.value = '';
            ageEdit.value = ''
            locationEdit.value = ''
            
        });
        removeBtn.addEventListener("click", function(e){
            const result = confirm("Are you sure you wanna delete this profile?");
            if(result){
                cardContainer.remove();
                const userIndex = users.findIndex(el => el.name === user.name);
            
                users.splice(userIndex, 1);
            };
           
        })
        
    }
}
    renderUserCard(users);

    function toggleElements(...elements){
        elements.forEach(el => el.classList.toggle("hidden"));
    }

    function removeElements(...elements){
        elements.forEach(el => el.classList.add("hidden"));
    }
    function addElements(...elements){
        elements.forEach(el => el.classList.remove("hidden"));
    }

    function renderFilteredAndSortedUsers(){
        currentSearch = searchBar.value.toLowerCase();
        currentSort = selectSort.value;

        const searchFilter = users.filter(user => user.name.toLowerCase().includes(currentSearch));

        if(currentSort === "youngest"){
            const sorted = [...searchFilter].sort((a, b)=> a.age - b.age);
            profileContainer.innerHTML = '';
            renderUserCard(sorted);
        }else if(currentSort === "oldest"){
            const sorted = [...searchFilter].sort((a, b)=> b.age - a.age);
            profileContainer.innerHTML = '';
            renderUserCard(sorted);
        }else if(currentSort === "Z-A"){
            const sorted = [...searchFilter].sort((a, b)=> b.name.localeCompare(a.name));
            profileContainer.innerHTML = '';
            renderUserCard(sorted);
        }else{
            const sorted = [...searchFilter].sort((a,b)=> a.name.localeCompare(b.name));
            profileContainer.innerHTML = "";
            renderUserCard(sorted);     
    }
    }



userForm.addEventListener('submit', function(e){
    e.preventDefault();

    const updatedUser = renderNewUser()
    if(InitialUserLength < users.length){
        renderFilteredAndSortedUsers()
    }

});

searchBar.addEventListener("input", function(e){
    renderFilteredAndSortedUsers()
});
selectSort.addEventListener("change", function(e){
    renderFilteredAndSortedUsers()
})
