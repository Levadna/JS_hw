/**
 * Реалізуйте клас, що описує блок SVG-документа
 */
export class SvgBlock
{
    constructor()
    {
        this.styles = [];
        this.root = null;
    }
    addStyle(style)
    {
        this.styles.push(style);
    }
    setRoot(rootElement)
    {
        this.root = rootElement;
    }
    getCode()
    {
        let styleStr = ``;
        for(let i = 0; i < this.styles.length; i++)
        {
            styleStr += this.styles[i].getCss() + `\n\n`;
        }
        let svgCode = this.root.getSvg();
        return `<style>\n${styleStr}\n</style>\n${svgCode}`;
    }
}