// GLOBALS
const containerDiv = document.querySelector("#container");

// FUNCTIONS
function createGrid(){

    for (let i = 0; i < 16; i++){
        childDiv = document.createElement("div");
        childDiv.classList.add("childDiv")
        containerDiv.appendChild(childDiv);
    };

}


// MAIN
createGrid();

// LISTENERS
// Change grid color on mouse over
containerDiv.addEventListener('mouseover', (event)=>{
    console.log(event.target)
    event.target.classList.remove("childDiv");
    event.target.classList.add('childDivOnHover')
})