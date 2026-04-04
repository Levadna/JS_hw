/**
 * @class
 */
export class Machine {
    constructor() {
        this.enabled = false; 
    }
    /**
     * @return {void}
     */
    enable() {
        this.enabled = true;
    }
    /**
     * @return {void}
     */
    disable() {
        this.enabled = false;
    }
}