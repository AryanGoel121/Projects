// Jai Shree Ram
let plusSign = document.querySelector("#plus");
let inputText = document.querySelector(".inputText");
let allItems = document.querySelectorAll(".Text");
let item = document.querySelector(".Text1");


// Function To Capture Text
let arrTasks = []; // All the tasks will be stored here;

function taskCreated(){
    let task = inputText.value;
    inputText.value = "";
    console.log(task);
    arrTasks.push(task);
}

plusSign.addEventListener("click", () => {
    console.log("Plus sign is clicked");
    taskCreated();
});

inputText.addEventListener("keydown", (evt) => {
    if(evt.key === "Enter"){
        console.log("Enter was pressed");
        taskCreated();
    }
});

//------------------------------
function updateTasks(){
    arrTasks.forEach((task)=>{
        item.innerText = task;
    });
}


