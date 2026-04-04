/**
 * Клас "EmpTable"
 * @class
 */
export class EmpTable 
{
    /**
     * @param {Array}
     */
    constructor(arr) 
    {
        this.employees = arr || [];
    }
    /**
     * @return {HTMLElement}
     */
    getHtml() {
        let table = document.createElement("table");
        for (let i = 0; i < this.employees.length; i++) {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            td1.textContent = this.employees[i].name;
            let td2 = document.createElement("td");
            td2.textContent = this.employees[i].position;
            let td3 = document.createElement("td");
            td3.textContent = this.employees[i].salary;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            table.appendChild(tr);
        }
        return table;
    }
}