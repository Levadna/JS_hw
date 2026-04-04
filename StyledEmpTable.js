import { EmpTable } from "./EmpTable.js";
/**
 * Клас "StyledEmpTable"
 * @class
 */
export class StyledEmpTable extends EmpTable 
{
    /**
     * @return {string}
     */
    getStyles() {
        return `
        <style>
            table { border-collapse: collapse; margin:20px; }
            td { border:1px solid black; padding:5px; }
        </style>
        `;
    }
    /**
     * @return {HTMLElement}
     */
    getHtml() {
        let div = document.createElement("div");
        div.innerHTML = this.getStyles();
        let table = super.getHtml();
        div.appendChild(table);
        return div;
    }
}