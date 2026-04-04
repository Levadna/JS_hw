import { Employee } from "./Employee.js";
import { StyledEmpTable } from "./StyledEmpTable.js";
import { CoffeeMachine } from "./CoffeeMachine.js";
import { Fridge } from "./Fridge.js";
// let arr = [
//     new Employee("Ivan", "Manager", 10000),
//     new Employee("Petro", "Manager", 8000),
//     new Employee("Inga", "Admin", 15000),
//     new Employee("Sofia", "Director", 20000)
// ];
// let table = new StyledEmpTable(arr);
// document.body.appendChild(table.getHtml());

// const coffee = new CoffeeMachine(2000, 100);

// document.getElementById("enableBtn").onclick = () => coffee.enable();
// document.getElementById("disableBtn").onclick = () => coffee.disable();
// document.getElementById("fillWater").onclick = () => {
//     const current = coffee.getWaterAmount();
//     if (current >= coffee.capacity) {
//         coffee.setWaterAmount(0);
//         return;
//     }
//     const amount = parseInt(prompt(`Скільки води додати? (доступно ${coffee.capacity - current}%)`, "50"));
//     coffee.setWaterAmount(amount);
// };
// document.getElementById("startCoffee").onclick = () => coffee.run();
// document.getElementById("stopCoffee").onclick = () => coffee.stop();

// //холодильник
// let fridge = new Fridge(300);
// document.getElementById("on").onclick = function()
// {
//     fridge.enable();
// }
// document.getElementById("off").onclick = function()
// {
//     fridge.disable();
// }
// document.getElementById("add").onclick = function()
// {
//     let item = prompt("Що додати?");
//     if(item)
//     {
//         fridge.addFood(item);
//     }
// }
// document.getElementById("remove").onclick = function()
// {
//     fridge.removeFood();
// }


let fridge = new Fridge(300);
document.getElementById("on").onclick = function()
{
    fridge.enable();
}
document.getElementById("add").onclick = function() {
    let input = prompt("Що додати? (через кому - якщо декілька)");
    if(input) {
        let items = input.split(",");
        fridge.addFood(...items)
    }
}
document.getElementById("remove").onclick = function()
{
    fridge.removeFood();
}
document.getElementById("off").onclick = function()
{
    fridge.disable();
}