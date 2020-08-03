var imgDelete = '<img class = "image task-delete" src="./content/rubbish-bin.png" alt="">';
var imgNotDone = '<img class = "image task-not-done" src="./content/not_done.png" alt="">';
var imgDone = '<img class = "image task-done" src="./content/done.png" alt="">';

document.addEventListener('keypress', function (e) {  
    if(e.keyCode === 13) AddTask();
})

function AddTask() {  
    var text = document.getElementById('new-task-name').value;

    if(text) {
        newTask(text);
        text = document.getElementById('new-task-name').value = '';
    };
}

document.getElementById('new-task-add').addEventListener('click', AddTask);

function removeTask() {  
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;

    parent.removeChild(item);
}

function changeDoneTask() {  
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;

    var select = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');

    parent.removeChild(item);
    select.insertBefore(item, select.childNodes[0]);
}

function newTask(text) {  
    var todo = document.getElementById('todo');

    var item = document.createElement('li');
    item.classList.add('item');
    
    var task = document.createElement('p');
    task.classList.add('task');
    task.innerText = text;

    item.appendChild(task);

    var delete_button = document.createElement('button');
    delete_button.innerHTML = imgDelete;

    delete_button.addEventListener('click', removeTask);

    var not_done_button = document.createElement('button');
    not_done_button.innerHTML = imgNotDone;

    not_done_button.addEventListener('click', changeDoneTask);

    var done_button = document.createElement('button');
    done_button.innerHTML = imgDone;

    done_button.addEventListener('click', changeDoneTask);

    var progress_task = document.createElement('div');
    progress_task.classList.add('progress-task');


    progress_task.appendChild(delete_button);
    progress_task.appendChild(not_done_button);
    progress_task.appendChild(done_button);
    item.appendChild(progress_task);
    todo.appendChild(item);
}    