/**
 * Клас "Employee"
 * @class
 */
export class Employee 
{
    /**
     * @param {string} name
     * @param {string} position
     * @param {number} salary
     */
    constructor(name, position, salary) {
        this.name = name || "No name";
        this.position = position || "No position";
        this.salary = salary || 0;
    }
}