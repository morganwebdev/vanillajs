//Declare Variables
const taskList = [];
const input = document.getElementById("input");
const taskItem = {
  description: "",
  isComplete: false,
};
//Input Enter Function
input.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    //checks whether the pressed key is "Enter"
    validate(e);
  }
});

function validate(e) {
  const value = e.target.value;
  if (value === "") {
    inputEmpty();
  } else {
    handleClick();
    //validation of the input...
  }
}

//Nav Conditionals
function selectNavItem() {
  const isLoggedIn = false;
  let item = document.querySelector(".nav-item1");
  isLoggedIn ? (item.innerHTML = "Login") : " ";
}
selectNavItem();

//Add Task Function
function inputEmpty() {
  let errorMessage = document.getElementById("error-message");
  errorMessage.innerText = "Please enter a Task";
}
function handleClick() {
  let input = document.querySelector(".input");
  let value = input.value;
  let taskListEl = document.querySelector(".task-list");
  taskList.push(value);
  taskListEl.innerHTML +=
    "<li class='task-item'>" +
    taskList[taskList.length - 1] +
    "<input type='checkbox'>" +
    "</li>";
  input.value = "";
}
