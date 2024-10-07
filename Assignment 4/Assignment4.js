document.addEventListener('DOMContentLoaded', function() {
            const taskInput = document.getElementById("taskInput");
            const taskList = document.getElementById("taskList");
            const addButton = document.getElementById("addButton");
            const clearAllbtn = document.getElementById("clearAllbtn");
            const taskCountDisplay = document.getElementById("taskCountDisplay");

            let taskCount = 0;

            loadTasksFromLocalStorage();

            function updateTaskCount() {
                taskCountDisplay.textContent = `Total Tasks: ${taskCount}`;
            }

            function addTask() {
                const taskText = taskInput.value.trim();
                if (taskText === "") {
                    alert('Please enter a task.');
                    return;
                }
                const li = document.createElement('li');
                li.innerHTML = `${taskText} <button class="deleteBtn">Delete</button>`;
                taskList.appendChild(li);
                taskInput.value = "";
                taskCount++;
                updateTaskCount();
                saveTasksToLocalStorage();
            }

            function deleteTask(event) {
                if (event.target.classList.contains('deleteBtn')) {
                    const li = event.target.parentElement;
                    taskList.removeChild(li);
                    taskCount--;
                    updateTaskCount();
                    saveTasksToLocalStorage();
                }
            }

            function saveTasksToLocalStorage() {
                const tasks = [];
                taskList.querySelectorAll('li').forEach(li => {
                    tasks.push(li.firstChild.textContent.trim());
                });
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }

            function loadTasksFromLocalStorage() {
                const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
                tasks.forEach(taskText => {
                    const li = document.createElement('li');
                    li.innerHTML = `${taskText} <button class="deleteBtn">Delete</button>`;
                    taskList.appendChild(li);
                });
                taskCount = tasks.length;
                updateTaskCount();
            }

            addButton.addEventListener('click', addTask);
            taskList.addEventListener('click', deleteTask);
            taskInput.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    addTask();
                }
            });

            clearAllbtn.addEventListener('click', () => {
                taskList.innerHTML = '';
                localStorage.clear();
                taskCount = 0;
                updateTaskCount();
            });
        });
