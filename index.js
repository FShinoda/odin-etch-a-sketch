// GLOBALS
const containerDiv = document.querySelector("#container");
const newGridBtn = document.querySelector("#newGridBtn");

// FUNCTIONS
function createGrid(proportion=8){
    console.log(containerDiv.offsetWidth);
    containerDiv.innerHTML = '';
    sizeOfSquare = containerDiv.offsetWidth / proportion -2; // -2 is due to border 1px each side!
    proportion *= proportion;

    console.log(sizeOfSquare)

    for (let i = 0; i < proportion; i++){
        childDiv = document.createElement("div");
        childDiv.style.width = `${sizeOfSquare}px`;
        childDiv.style.height = `${sizeOfSquare}px`;
        childDiv.classList.add("childDiv")
        containerDiv.appendChild(childDiv);
    };

}

// MAIN
createGrid();

// LISTENERS
// Change grid color on mouse over
containerDiv.addEventListener('mouseover', (event)=>{
    event.target.classList.remove("childDiv");
    event.target.classList.add('childDivOnHover')
});

// New grid button listener
newGridBtn.addEventListener("click", (event)=>{
    let proportion;
    do{
        proportion = prompt('How many squares the new grid will have each side?');
    } while (proportion <= 0 || proportion > 50);
    createGrid(proportion);
})