w=4;

const btn = document.querySelector("#btn");
cont = document.querySelector(".container");

function createDiv(){
    const sqr = document.createElement("div");
    sqr.style.width = `calc(100% / ${w})`;
    sqr.style.height = `calc(100% / ${w})`;
    sqr.style.border = "1px solid black";
    sqr.style.boxSizing = "border-box";
    return sqr;
}

function createGrid(){
for(let i=1;i<=w*w;i++){
    const stor = createDiv();
    stor.classList.add('smolBox');
    cont.appendChild(stor);

}
}

createGrid();

btn.addEventListener('click',function(){
    w = prompt("Enter a dimension of the row: ");
    cont.innerHTML = "";
    createGrid();
});


cont.addEventListener('mouseover',function(e){
    if(e.target.classList.contains('smolBox')){
        e.target.classList.add('hovered');
    }
});

cont.addEventListener('mouseout',function(e){
    if(e.target.classList.contains('smolBox')){
        e.target.classList.remove('hovered');
    }
});