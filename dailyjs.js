var enterbutton=document.getElementById("btn");
var input=document.getElementById("inp");
var ul=document.querySelector("ul");
var item=document.getElementById("li");


function inputLength(){
    return input.value.length;
}

function createListElement(){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
    function crossout(){
        li.classList.toggle("done");
    }
    li.addEventListener("click",crossout);

    var deletebtn=document.createElement("button");
    deletebtn.appendChild(document.createTextNode("X"));
    li.appendChild(deletebtn);
    deletebtn.addEventListener("click",deleteitemlist);

    function deleteitemlist(){
        li.classList.add("delete");
    }
}
function addListAfterClick(){
    if (inputLength()>0){
        createListElement();
    }
}

function addListAfterClickKeyPress(event){
    if (inputLength()>0&&event.which===13){
        createListElement();
    }
}

enterbutton.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterClickKeyPress);