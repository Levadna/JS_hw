//1
// let field = document.querySelector("#field");
// let ball = document.querySelector("#ball");
// field.addEventListener("click", function(event){
//     let x = event.clientX - 50;
//     let y = event.clientY - 50;
//     if(x < 0){
//         x = 0;
//     }
//     if(y < 0){
//         y = 0;
//     }
//     if(x > field.clientWidth - 100){
//         x = field.clientWidth - 100;
//     }
//     if(y > field.clientHeight - 100){
//         y = field.clientHeight - 100;
//     }
//     ball.style.left = x + "px";
//     ball.style.top = y + "px";
// })


//2
// let input = document.querySelector("#name");
// let message = document.querySelector("#message");
// input.addEventListener("input", function(){
//     input.value = input.value.replace(/[0-9]/g, "");
//     input.value = input.value.replace(/[!@#$%^?&*=+"'`;:<>,/|()]/g, "");
//     if(input.value.length < 3)
//     {
//         message.innerHTML = "Мінімум 3 символи";
//     }
//     else if(input.value.length > 20){
//         input.value = input.value.slice(0,20);
//         message.innerHTML = "Максимум 20 символів";
//     }
//     else{
//         message.innerHTML = "";
//     }
// })


//3
// let titles = document.querySelectorAll("h3");
// let texts = document.querySelectorAll("p");
// titles.forEach(function(title){
//     title.addEventListener("click", function(){
//         texts.forEach(function(text){
//             text.style.display = "none";
//         })
//         let p = title.nextElementSibling;
//         p.style.display = "block";
//     })
// })


//4
// let button = document.querySelector("#up");
// window.addEventListener("scroll", function(){
//     if(window.scrollY > 100){
//         button.style.display = "block";
//     }
//     else{
//         button.style.display = "none";
//     }
// })
// button.addEventListener("click", function(){
//     window.scrollTo(0,0);
// })


//5
// let div = document.querySelector("#text");
// let textarea = null;

// document.addEventListener("keydown", function(event){
//     if(event.ctrlKey && event.key == "e")
//     {
//         event.preventDefault();
//         textarea = document.createElement("textarea");
//         textarea.value = div.innerHTML;
//         div.replaceWith(textarea);
//     }
//     if(event.ctrlKey && event.key == "s")
//     {
//         event.preventDefault();
//         if(textarea)
//         {
//             div.innerHTML = textarea.value;
//             textarea.replaceWith(div);
//         }
//     }
// })


//6
// let td = document.querySelectorAll("td");

// td.forEach(function(item){
//     item.addEventListener("mouseover", function()
//     {
//         item.style.backgroundColor = "orange";
//     })
//     item.addEventListener("mouseout", function(){
//         item.style.backgroundColor = "blanchedalmond";
//     })
// })


//7
let countries = [
    "Ukraine",
    "Poland",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Portugal",
    "Canada",
    "USA",
    "Japan",
    "China",
    "Brazil"
];
let input = document.querySelector("#country");
let list = document.querySelector("#list");

input.addEventListener("input", function()
{
    list.innerHTML = "";
    let value = input.value.toLowerCase();
    let result = countries.filter(function(country){
        return country.toLowerCase().startsWith(value);
    })
    result.slice(0,10).forEach(function(country){
        let div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML = country;
        list.append(div);
        div.addEventListener("click", function(){
            input.value = country;
            list.innerHTML = "";
        })
    })
})