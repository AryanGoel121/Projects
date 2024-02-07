// Jai Shree Ram
let plusSign = document.querySelector("#plus");
let inputText = document.querySelector(".inputText");
let itemsContainer = document.querySelector(".tasks");
let introMsg = document.querySelector(".intro");
// let allItems = document.querySelectorAll(".items");


// Function To Capture & Update Text in the List
let arrTasks = []; // All the tasks will be stored here;
let arrResult = []; // All the HTML items will be stored here;

function taskCreated(){
    if(inputText.value !== ""){
        let task = inputText.value;
        inputText.value = "";
        arrTasks.push(task);
        introMsg.style.visibility = "hidden";
        arrResult.push(`<p class="items">${task}</p>`);
        let tempResult = `<p class="items">${task}</p>`;
        updateTasks(tempResult);
    }
}

plusSign.addEventListener("click", () => {
    taskCreated();
});

inputText.addEventListener("keydown", (evt) => {
    if(evt.key === "Enter"){
        taskCreated();
    }
});

// Update function to update the list of tasks
function updateTasks(tempResult){
    itemsContainer.innerHTML += tempResult;
    
}




