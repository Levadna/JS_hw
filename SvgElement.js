/**
 * Реалізуйте клас, що описує SVG-елемент
 * @class SvgElement
 */
export class SvgElement
{
    /**
     * @param {string} tagName • назву SVG-тега;
     */
    constructor(tagName)
    {
        this.tagName = tagName || 'g';
        this.attributes = {};
        this.styles = {};
        this.children = [];
    }
    setAttribute(name, value)
    {
        this.attributes[name] = value;
    }
    setStyle(name, value)
    {
        this.styles[name] = value;
    }
    appendChild(element)
    {
        this.children.push(element);
    }
    getSvg()
    {
        let attrStr = ``;
        for(let key in this.attributes)
        {
            attrStr += `${key}="${this.attributes[key]}" `;
        }
        let styleStr = ``;
        for(let prop in this.styles)
        {
            styleStr += `${prop}:${this.styles[prop]};`;
        }
        if(styleStr)
        {
            attrStr += `style="${styleStr}" `;
        }
        let childrenStr = ``;
        for(let child of this.children)
        {
            childrenStr += child.getSvg();
        }
        return `<${this.tagName} ${attrStr}>${childrenStr}</${this.tagName}>`;
    }
}