import { Machine } from "./Machine.js";
/**
 * Клас "Fridge"
 * @class
 */
export class Fridge extends Machine
{
    constructor(power)
    {
        super();
        this.power = power;
        this.food = [];
    }
    addFood(...items) {
    if(!this.enabled) {
        alert("Холодильник вимкнений");
        return;
    }
    let limit = this.power / 100;
    if(this.food.length + items.length > limit) {
        alert("Холодильник заповнений");
        return;
    }
    this.food.push(...items);
    this.showFood();
}
    removeFood()
    {
        if(this.food.length == 0)
        {
            alert("Порожній");
            return;
        }
        this.food.pop();
        this.showFood();
    }
    getFood()
    {
        let arr = [];
        for(let i = 0; i < this.food.length; i++)
        {
            arr[i] = this.food[i];
        }
        return arr;
    }
    disable()
    {
        if(this.food.length > 0)
        {
            alert("Не можна, є їжа!");
            return;
        }
        this.enabled = false;
    }
    showFood()
    {
        let box = document.getElementById("fridgeFood");
        box.textContent = "";
        for(let i = 0; i < this.food.length; i++)
        {
            box.textContent += this.food[i] + "\n";
        }
    }
}