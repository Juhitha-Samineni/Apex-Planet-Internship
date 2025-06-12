// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const messageBox = document.getElementById('formMessage');

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !message) {
    messageBox.textContent = "All fields are required.";
    messageBox.style.color = "red";
  } else if (!emailPattern.test(email)) {
    messageBox.textContent = "Invalid email format.";
    messageBox.style.color = "red";
  } else {
    messageBox.textContent = "Form submitted successfully!";
    messageBox.style.color = "green";
    this.reset();
  }
});

// To-Do List Logic
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement('li');
  li.innerHTML = `${taskText} <button onclick="removeTask(this)">Remove</button>`;
  document.getElementById('taskList').appendChild(li);
  taskInput.value = "";
}

function removeTask(button) {
  button.parentElement.remove();
}
