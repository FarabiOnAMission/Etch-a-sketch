w=4;

function createDiv(){
    const sqr = document.createElement("div");
    sqr.style.width = `calc(100% / ${w})`;
    sqr.style.height = `calc(100% / ${w})`;
    sqr.style.border = "1px solid black";
    sqr.style.boxSizing = "border-box";
    return sqr;
}

for(let i=1;i<=w*w;i++){
    cont = document.querySelector(".container");
    const stor = createDiv();
    cont.appendChild(stor);

}