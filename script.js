

document.getElementById("todoForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const nickname = document.getElementById("nickname").value;
  const dob = document.getElementById("dob").value;
  addTodoToList(name, nickname, dob);
  $("#exampleModal").modal("hide");
});

function addTodoToList(name, nickname, dob) {
  // Format the date of birth
  const formattedDob = formatDateOfBirth(dob);

  // Create a new table row after saving data
  const todoList = document.getElementById("todoList");
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>
      <h2 class="name">${name}</h2>
      <div class="row">
        <div class="col dobnick">${formattedDob} | ${nickname}</div>
      </div>
    </td>
    <td class="button-container">
      <div class="row align-center">
        <i class="fa-solid fa-circle-check tick" id="markDoneIcon" style="display: none;"></i>
        <div class="dropdown">
          <button class="btn btn-transparent" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-ellipsis-vertical dots"></i>
          </button>
          <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
            <li>
              <a class="dropdown-item mark-as-done" href="#">Mark as Done</a>
            </li>
            <li><a class="dropdown-item delete" href="#">Delete</a></li>
          </ul>
        </div>
      </div>
    </td>
  `;
  todoList.appendChild(newRow);

  // Add event listener to the "Mark as Done" button
  const markAsDoneButton = newRow.querySelector(".mark-as-done");
  const markDoneIcon = newRow.querySelector("#markDoneIcon");
  markAsDoneButton.addEventListener("click", function () {
    markDoneIcon.style.display = "inline"; 
    markDoneIcon.style.color = "#bdbb34";
  });

  // Add event listener to the "Delete" button
  const deleteButton = newRow.querySelector(".delete");
  deleteButton.addEventListener("click", function () {
    newRow.remove(); // Remove the table row from the DOM
  });
}

// Function to format the date of birth
function formatDateOfBirth(dob) {
  const date = new Date(dob);
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day}. ${year}`;
}

