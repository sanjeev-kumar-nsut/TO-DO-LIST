let btn=document.getElementById("add")
btn.onclick = function(){
    let list = document.createElement('li');
    let input = document.querySelector("input");
    list.innerHTML = input.value;
    let ul = document.querySelector("ul");
    ul.append(list);
    input.value="";
}
