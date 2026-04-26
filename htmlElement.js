export class HtmlElement
{
    constructor(tag)
    {
        this.tag = tag;
        this.text = '';
        this.attributes = {};
        this.children = [];
    }
    setAttribute(name, value)
    {
        this.attributes[name] = value;
    }
    addChild(element)
    {
        this.children.push(element);
    }
    getHtml()
    {
        let html = "<" + this.tag;
        for(let key in this.attributes)
        {
            html += " " + key + "='" + this.attributes[key] + "'";
        }
        html += ">";
        html += this.text;
        for(let i = 0; i < this.children.length; i++)
        {
            html += this.children[i].getHtml();
        }
        html += "</" + this.tag + ">";
        return html;
    }
}