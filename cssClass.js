export class CssClass
{
    constructor(name)
    {
        this.name = name;
        this.styles = {};
    }
    setStyle(prop, value)
    {
        this.styles[prop] = value;
    }
    getCss()
    {
        let css = "." + this.name + " {";
        for(let key in this.styles)
        {
            css += key + ":" + this.styles[key] + ";";
        }
        css += "}";
        
        return css;
    }
}