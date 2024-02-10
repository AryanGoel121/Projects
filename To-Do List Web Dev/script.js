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
    itemCheckMark.addEventListener('click',()=>{
        markAsComplete(itemCheckMark);
        emptyList();
    })

    divChildren.append(itemPara, itemCheckMark);
    itemDiv.appendChild(divChildren);

    let itemsContainer = document.querySelector(".tasks");
    itemsContainer.appendChild(itemDiv);

    

}

plusSign.addEventListener("click", () => {
    taskCreated();
});

inputText.addEventListener("keydown", (evt) => {
    if(evt.key === "Enter"){
        taskCreated();
    }
});

// Mark as Complete
function markAsComplete(itemCheckMark){
    let audio = document.querySelector("#myAudio");
    audio.play();
    itemCheckMark.parentElement.remove();
}

function emptyList(){
    let div = document.querySelector(".tasks");
    if(div.innerText.trim() === ''){
        introMsg.style.visibility = "visible";
    }
}