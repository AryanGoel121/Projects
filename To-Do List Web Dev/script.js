// Jai Shree Ram
let plusSign = document.querySelector("#plus");
let inputText = document.querySelector(".inputText");
let itemsContainer = document.querySelector(".tasks"); // all the tasks go in here
let introMsg = document.querySelector(".intro");


// Function To Capture & Update Text in the List
let arrTasks = []; // All the tasks will be stored here;
let arrResult = []; // All the HTML items will be stored here;

function taskCreated(){
    if(inputText.value !== ""){
        introMsg.style.visibility = "hidden";
        let task = inputText.value;
        inputText.value = "";
        arrTasks.push(task);

        pushIntoItems(task);
        // arrResult.push(`<p class="items">${task}</p>`);
        // let tempResult = `<p class="items">${task}</p>`;
        // updateTasks(tempResult);
    }
}

function pushIntoItems(task){
    const itemDiv = document.createElement('div');
    itemDiv.classList.add("items");
    const divChildren = document.createDocumentFragment();

    let itemPara = document.createElement('p');
    itemPara.innerText = task;
    let itemCheckMark = document.createElement('i');
    itemCheckMark.classList.add("fa-solid", "fa-check", "checkMark");

    divChildren.append(itemPara, itemCheckMark);
    itemDiv.appendChild(divChildren);

    let itemsContainer = document.querySelector(".tasks");
    itemsContainer.appendChild(itemDiv);

    markAsComplete();
}

plusSign.addEventListener("click", () => {
    taskCreated();
});

inputText.addEventListener("keydown", (evt) => {
    if(evt.key === "Enter"){
        taskCreated();
    }
});

// // Update function to update the list of tasks
// function updateTasks(tempResult){
//     itemsContainer.innerHTML += tempResult;
    
// }

// // Mark as Complete on hover
// let allItems = document.querySelectorAll(".items");
// allItems.forEach((item)=>{
//     item.addEventListener("click", ()=>{
//         if(!item.contains(checkMark)){
//             let checkMark = document.createElement("i");
//             checkMark.classList.add("fa-solid", "fa-check");
//             item.appendChild(checkMark);
//             // console.log("Mouse has entered");
//         }
//     })
// });

// allItems.forEach((item)=>{
//     item.addEventListener("mouseleave", ()=>{
//         if(item.contains(checkMark)){
//             item.removeChild(checkMark);  
//         }
//     })
// });

// Mark as Complete

function markAsComplete(){
    let allItems = document.querySelectorAll(".items");
    allItems.forEach((item)=>{
        
    })
    let checkMark = document.querySelectorAll(".checkMark");
    checkMark.forEach((check)=>{
        check.addEventListener("click", ()=>{
            console.log("Check is pressed");
        })
    })
}