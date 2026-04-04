import { Machine } from "./Machine.js";
/**
 * Клас "Кавоварка"
 * @class
 */
export class CoffeeMachine extends Machine {
    /**
     * @param {number} power 
     * @param {number} capacity
     */
    constructor(power, capacity) {
        super();
        this.power = power;
        this.capacity = capacity;
        this.waterAmount = 0;
        this.timeoutId = null;
        this.messageBox = null;
        if (!document.getElementById("messageBox")) {
            const div = document.createElement("div");
            div.id = "messageBox";
            div.style.marginTop = "10px";
            document.getElementById("coffeeMachine").appendChild(div);
        }
        this.messageBox = document.getElementById("messageBox");
    }
    getPower() {
        return this.power;
    }
    /**
     * @param {number} amount
     */
    setWaterAmount(amount) {
        if (amount <= 0) {
            alert("Введіть правильну кількість води!");
            return;
        }
        if (this.waterAmount >= this.capacity) {
            alert("Вода вже заповнена повністю!");
            return;
        }
        if (this.waterAmount + amount > this.capacity) {
            alert("Води не можна додати, бо перевищить ємність!");
            return;
        }
        this.waterAmount += amount;
        this.updateWaterDisplay();
        this.showMessage(`Залито ${amount}% води, всього ${this.waterAmount}%`);
    }

    getWaterAmount() {
        return this.waterAmount;
    }

    getBoilTime() {
        return this.waterAmount * 4200 * 80 / this.power;
    }

    onReady() {
        alert("Кава готова!");
        this.waterAmount -= 50;
        if (this.waterAmount < 0) this.waterAmount = 0;
        this.updateWaterDisplay();
        this.timeoutId = null;
    }
    run() {
        if (!this.enabled) {
            this.showMessage("Кавоварка вимкнена!");
            return;
        }
        if (this.waterAmount < 50) {
            this.showMessage("Недостатньо води для приготування кави! Треба 50%");
            return;
        }
        if (this.timeoutId) {
            this.showMessage("Кава вже готується!");
            return;
        }
        this.showMessage("Кава готується...");
        this.timeoutId = setTimeout(() => {
            this.onReady();
            this.showMessage("Готова!");
        }, this.getBoilTime());
    }
    stop() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
            alert("Приготування зупинено!");
            this.showMessage("Зупинено!");
        }
    }
    updateWaterDisplay() {
        const waterBox = document.getElementById("waterBox");
        if (waterBox) {
            waterBox.style.height = `${this.waterAmount}%`;
            waterBox.textContent = `${this.waterAmount}%`;
        }
    }
    showMessage(text) {
        if (this.messageBox) {
            this.messageBox.textContent = text;
        }
    }
}