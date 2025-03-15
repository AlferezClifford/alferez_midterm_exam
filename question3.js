let tasks = []; // storing all the task
let nextId = 1; //a unique ID to each task.

//addTask(name, description): Adds a new task with an auto-incremented ID.
const addTask = (name, description) => {
    const task = { id: nextId++, name, description };
    tasks.push(task);
    console.log("Task added:", task);
}

// view all the task if task is not empty, and also return a statement if there are no task

const viewTask = () => { 
    if (tasks.length === 0) {
        console.log("No tasks available.");
        return [];
    }
    console.log("All Tasks:", tasks);
    return tasks;
}

//updateTask(id, newName, newDescription): Updates a task if it exists.
// const task will  checks each task (t) to see if its id matches the given id.
const updateTask = (id, newName, newDescription) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
        console.log("Task updated:", task);
    } else {
        console.log("Task not found.");
    }
}
// This function is to delete a specific task given by the user
//const index Finds the position of a task with a specific id in the tasks array.
const deleteTask = (id) => {
    if (!id) {
        console.log("Please provide a valid task ID.");
        return;
    }
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
        const [deleted] = tasks.splice(index, 1); 
        console.log("Task deleted:", deleted);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
};

// Here are the given functions
addTask();
viewTask(); 
updateTask();
deleteTask();

