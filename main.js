function selectNavItem() {
  const isLoggedIn = true;
  let item = document.querySelector(".nav-item1");
  isLoggedIn ? (item.innerHTML = "Login") : " ";
}

selectNavItem();

function handleClick() {
  let input = document.querySelector(".input");
  let value = input.value;
  let taskListEl = document.querySelector(".task-list");
  const taskList = [];
  taskList.push(input.value);
  taskListEl.innerHTML += taskList;
}
