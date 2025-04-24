let btn = document.querySelector("button");
let ul = document.querySelector(".ul");
let int = document.querySelector("#text");
let placeholder= document.querySelector("placeholder");



btn.addEventListener("click",function(){
    // console.log("hello");

    let Name= int.value;
    if(Name==""){
        // Name.innerText="Please enter a task";
        return;
    }
    let item= document.createElement("li");
    item.innerText=int.value
   

    // console.log(item)
        let btns= document.createElement("button");
        btns.innerText="✖";
        item.appendChild(btns);
    
        ul.appendChild(item)
        int.value="";

});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let list=event.target.parentElement;
        list.remove();
        console.log("deleted!");
    }
})
