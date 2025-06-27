let userCount = 1;

const users = [
  { name: "Alice", age: 25, isOnline: true },
  { name: "Bob", age: 30, isOnline: false },
  { name: "Charlie", age: 22, isOnline: true }
];

const userList = document.getElementById("userList");

function createUser(){
  
  for(let u of users){
    u.id = userCount++;
    const user = document.createElement('li');
    const text = document.createTextNode(`Name: ${u.name}, Age: ${u.age}`);
    const icon = document.createElement("i");
    const trash = document.createElement("i");


    icon.className = 'fa-solid fa-circle';
    trash.className = "fa-solid fa-trash"
    icon.style.color =  u.isOnline ? 'green' : 'red';

    user.appendChild(text);
    user.appendChild(icon);
    user.appendChild(trash)
    userList.append(user);

    icon.addEventListener('click', function(e){
      
      u.isOnline = !u.isOnline;
      e.target.style.color = u.isOnline ? 'green' : 'red';
      console.log(u.isOnline)
    })

    trash.addEventListener("click", function(e){
      const userIndex = users.findIndex(el => el.id === u.id)

      users.splice(userIndex, 1)
      e.target.parentElement.remove()
      
     console.log(users)
    })
    
  }
   
}

createUser()
