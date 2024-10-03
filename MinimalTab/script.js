// Function to update time display
function updateTime() {
  const now = new Date();
  const options = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
  document.getElementById("timeDisplay").textContent = now.toLocaleTimeString([], options);
}

setInterval(updateTime, 1000);
updateTime(); // Initial call to display time immediately

// Search functionality
document.getElementById("searchButton").addEventListener("click", function () {
  const query = document.getElementById("searchQuery").value.trim();
  if (query) {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
  }
});


document.getElementById("searchQuery").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    document.getElementById("searchButton").click();
  }
});
// Search functionality
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", performSearch);
searchButton.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    performSearch();
  }
});

function performSearch() {
  const query = document.getElementById("searchQuery").value.trim();
  if (query) {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
  }
}


// Todo List Functionality
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

// Load existing todos from localStorage
function loadTodos() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach((todoText) => addTodoToList(todoText));
}

function addTodoToList(todoText) {
  const li = document.createElement("li");
  li.className = "flex items-center justify-between bg-gray-100 border border-gray-300 rounded-full py-1 px-6 mb-2";

  const span = document.createElement("span");
  span.className = "text-gray-700";
  span.textContent = todoText;

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash text-red-500 hover:text-red-700"></i>';
  deleteButton.className = "focus:outline-none";
  deleteButton.onclick = function () {
    li.remove();
    saveTodos(); // Save updated todos after removal
  };

  li.appendChild(span);
  li.appendChild(deleteButton);
  todoList.appendChild(li);
}

// Save todos to localStorage
function saveTodos() {
  const todos = Array.from(todoList.children).map((li) => li.firstChild.textContent);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Add new todo when "Add Task" button is clicked or "Enter" is pressed
document.getElementById("addTodoButton").addEventListener("click", addTodo);
todoInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTodo();
});

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText) {
    addTodoToList(todoText);
    saveTodos(); // Save updated todos
    todoInput.value = ""; // Clear input
  }
}

// Toggle visibility of the to-do container
document.getElementById("toggleTaskButton").addEventListener("click", function () {
  const todoContainer = document.getElementById("todoContainer");
  const isVisible = todoContainer.style.display !== "none";

  // Toggle between visible and hidden
  todoContainer.style.display = isVisible ? "none" : "block";
});

// Focus on specific input fields based on keyboard shortcuts
document.addEventListener("keydown", function (e) {
  // Ctrl + K to focus on the todo input
  if (e.ctrlKey && e.key === "k") {
    e.preventDefault(); // Prevent the browser default action
    todoInput.focus();
  }

  // "/" to focus on the search input
  if (e.key === "/") {
    e.preventDefault(); // Prevent "/" from being typed
    document.getElementById("searchQuery").focus();
  }
});

// Load todos when the page loads
loadTodos();

let timer; // Variable to hold timer interval
let isTimerRunning = false; // Flag to check if timer is running
let timeLeft = 600; // Initial timer value (10 minutes)

// Function to update the timer display
function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById("timerDisplay").textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`; // Format as MM:SS
}

// Timer functionality
document.getElementById("toggleTimerButton").addEventListener("click", function () {
  const timerDisplay = document.getElementById("timerDisplay");

  if (isTimerRunning) {
    clearInterval(timer); // Stop the timer
    isTimerRunning = false;
    timerDisplay.style.backgroundColor = ""; // Reset background color
    timerDisplay.style.transform = ""; // Reset size
  } else {
    timeLeft = 600; // Reset to 10 minutes
    updateTimerDisplay(); // Update display

    // Change background color and size
    timerDisplay.style.color = "gray"; // Change background to gray
    timerDisplay.style.borderRadius = "65px"; // Change background to gray
    timerDisplay.style.fontSize = "30px"; // Change background to gray
    timerDisplay.style.transform = "scale(1.8)"; // Increase size

    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--; // Decrease time
        updateTimerDisplay(); // Update display
      } else {
        clearInterval(timer); // Stop timer when it reaches 0
        isTimerRunning = false;
      }
    }, 1000);
    isTimerRunning = true;
  }
});

// Initial timer display update
updateTimerDisplay();

// Function to set the background image from Local Storage
function setBackgroundImage() {
  const savedImage = localStorage.getItem("backgroundImage");
  if (savedImage) {
    document.body.style.backgroundImage = `url('${savedImage}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.getElementById("backgroundSelector").value = savedImage; // Set the dropdown to the saved image
  }
}

// Function to handle background image change
document.getElementById("backgroundSelector").addEventListener("change", function () {
  const selectedImage = this.value;
  document.body.style.backgroundImage = `url('${selectedImage}')`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  localStorage.setItem("backgroundImage", selectedImage); // Save the selected image to Local Storage
});

// Call the function to set the background image on page load
setBackgroundImage();



// Function to update the big clock display
function updateBigClock() {
  const now = new Date();
  const options = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
  document.getElementById("bigClock").textContent = now.toLocaleTimeString([], options);
}

// Show clock modal and start updating time
document.getElementById("clockButton").addEventListener("click", function () {
  document.body.classList.add("blur"); // Add blur class to body
  document.getElementById("clockModal").classList.remove("hidden");
  updateBigClock(); // Initial call to display time
  setInterval(updateBigClock, 1000); // Update every second
});

// Close the clock modal when clicking outside of it
document.getElementById("clockModal").addEventListener("click", function (event) {
  // Check if the clicked target is the modal itself (to close it)
  if (event.target === this) {
    document.body.classList.remove("blur"); // Remove blur class from body
    this.classList.add("hidden"); // Hide the modal
  }
});

// Optional: Hover effect on the button
const button = document.getElementById('clockButton');

document.addEventListener('mousemove', (event) => {
    const rect = button.getBoundingClientRect();
    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;

    const distance = Math.sqrt(
        Math.pow(event.clientX - buttonCenterX, 2) +
        Math.pow(event.clientY - buttonCenterY, 2)
    );

    if (distance < 10) {
        button.classList.add('active');
    } else {
        button.classList.remove('active');
    }
});

// Initial call to display time if needed
updateBigClock(); 

