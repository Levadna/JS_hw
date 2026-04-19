/**
 * Реалізуйте клас, що описує стиль SVG-класу
 */
export class SvgStyle
{
    /**
     * @param {string} className
     */
    constructor(className)
    {
        this.className = className || 'class';
        this.styles = {};
    }
    setStyle(name, value)
    {
        this.styles[name] = value;
    }
    removeStyle(name)
    {
        delete this.styles[name];
    }
    getCss()
    {
        let styleStr = ``;
        for(let prop in this.styles)
        {
            styleStr += `${prop}:${this.styles[prop]}; \n`;
        }
        return `.${this.className} {\n${styleStr}}`;
    }
}