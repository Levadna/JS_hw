//1.1
let byId = document.getElementById("list");
let byClass = document.getElementsByClassName("class_p");
let byTag = document.getElementsByTagName("p");
let arr = document.getElementsByTagName('p');
//1.2
console.log(document.querySelector("p"));
console.log(document.querySelectorAll(".class_p h1"));
let q1 = document.querySelector("#list");
let q2 = document.querySelectorAll("p");
//1.3
let firstDiv = document.querySelector(".container div");
let allLi = document.querySelectorAll("ul li");
let dataEl = document.querySelector("[data-test]");

//2.1
let listLi = document.querySelectorAll("#product-list li");
let element = listLi[1];
console.log(element.parentElement);
console.log(element.parentElement.children);
console.log(element.parentElement.firstElementChild);
console.log(element.parentElement.lastElementChild);
//2.2
console.log(element.nextElementSibling);
console.log(element.previousElementSibling);

//3.1
let items = document.querySelectorAll("#list li");
let second = items[1];
second.style.color = "red";
second.style.backgroundColor = "black";
second.style.fontSize = "20px";
//3.2 
second.classList.add("selected");
second.classList.remove("selected");
second.classList.toggle("selected");
for (let i = 0; i < items.length; i++) 
{
    if (i % 2 === 0) 
    {
        items[i].style.backgroundColor = "blue";
    } 
    else 
    {
        items[i].style.backgroundColor = "yellow"; 
    }
}
//3.3 тема
let themeBtn = document.createElement("button");
themeBtn.textContent = "THEME";
document.body.append(themeBtn);
themeBtn.onclick = function()
{
    document.body.classList.toggle("dark");
};


//4.1
let p = document.querySelector("p");
p.textContent = "TEXT через textContent";
p.innerText = "TEXT через innerText";
//4.2
p.innerHTML = "<b>BOLD TEXT</b>";
//4.3
let arrList = ["JS", "HTML", "CSS"];
let ul = document.createElement("ul");
for(let i = 0; i < arrList.length; i++)
{
    let li = document.createElement("li");
    li.textContent = arrList[i];
    ul.append(li);
}
document.body.append(ul);


//5.1
let newDiv = document.createElement("div");
newDiv.textContent = "NEW DIV";
document.body.append(newDiv);
document.body.prepend(newDiv);
//5.2
newDiv.remove();
let parent = document.getElementById("list");
let child = parent.children[0];
parent.removeChild(child);


//6.1
let oldEl = document.querySelector("#list li");
let newEl = document.createElement("h2");
newEl.textContent = "ЗАМІНА";
oldEl.replaceWith(newEl);


//7
let listBtn = document.querySelectorAll("button[data-filter]");
let listLi2 = document.querySelectorAll("#product-list li");
for(let i = 0; i < listBtn.length; i++)
{
    listBtn[i].onclick = function(event)
    {
        let filter = event.target.dataset.filter;
        listLi2.forEach(item=>{
            if(filter === "all")
            {
                item.style.display = "list-item";
            }
            else if(item.dataset.category === filter)
            {
                item.style.display = "list-item";
            }
            else
            {
                item.style.display = "none";
            }
        });
    }
}
//7.1
let item = document.querySelector("#product-list li");
item.setAttribute("title", "HELLO");
console.log(item.getAttribute("title"));
item.removeAttribute("title");
//7.2
item.dataset.id = "123";
console.log(item.dataset.id);


//8
let btn = document.createElement("button");
btn.textContent = "CLICK";
document.body.append(btn);
//8.1 + 8.2
btn.addEventListener("click", function()
{
    btn.textContent = "PRESSED";
    btn.style.backgroundColor = "pink";
});


//9.1 
let input = document.createElement("input");
let addBtn = document.createElement("button");
addBtn.textContent = "ADD";
let todoList = document.createElement("ul");
document.body.append(input, addBtn, todoList);
addBtn.onclick = function()
{
    let li = document.createElement("li");
    li.textContent = input.value;
    li.onclick = function()
    {
        li.classList.toggle("done");
    };
    let del = document.createElement("button");
    del.textContent = "X";
    del.onclick = function()
    {
        li.remove();
    };
    li.append(del);
    todoList.append(li);
};
//9.2 
let imgs = document.querySelectorAll("img");
imgs.forEach(img=>{
    img.onclick = function()
    {
        img.classList.toggle("big");
    };
});


//10.1 делегування
let ulList = document.getElementById("list");
ulList.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.style.color = "red";
    }
});
//10.2 
let clone = ulList.cloneNode(true);
document.body.append(clone);
//10.3 функція
function replaceTag(oldEl, newTag)
{
    let newEl = document.createElement(newTag);
    newEl.innerHTML = oldEl.innerHTML;
    for(let attr of oldEl.attributes)
    {
        newEl.setAttribute(attr.name, attr.value);
    }
    oldEl.replaceWith(newEl);
}

//6.2
let oldP = document.querySelector("p");
let h1 = document.createElement("h1");
h1.textContent = oldP.textContent;
oldP.replaceWith(h1);