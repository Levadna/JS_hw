export class HtmlBlock
{
    constructor(root)
    {
        this.root = root;
        this.styles = [];
    }
    addStyle(style)
    {
        this.styles.push(style);
    }
    getCode()
    {
        let code = "<style>";
        for(let i = 0; i < this.styles.length; i++)
        {
            code += this.styles[i].getCss();
        }
        code += "</style>";
        code += this.root.getHtml();
        return code;
    }
}