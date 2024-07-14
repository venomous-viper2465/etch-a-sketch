let outerBox = document.querySelector("#parent");
for(let i=0; i<256; ++i){
    let box=document.createElement("div");
    outerBox.appendChild(box);
    box.classList.add("rectangle");
}
