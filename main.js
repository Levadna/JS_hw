import { CssClass } from "./cssClass.js";
import { HtmlElement } from "./htmlElement.js";
import { HtmlBlock } from "./htmlBlock.js";

let win1 = null;

function openPopUp()
{
    const width = 500;
    const height = 400;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;
    win1 = window.open("", "", "width=" + width + ",height=" + height + ",top=" + top + ",left=" + left);
    let bodyLight = new CssClass("light");
    bodyLight.setStyle("background", "white");
    bodyLight.setStyle("color", "black");
    let bodyDark = new CssClass("dark");
    bodyDark.setStyle("background", "#121212");
    bodyDark.setStyle("color", "white");
    let box = new CssClass("box");
    box.setStyle("text-align", "center");
    box.setStyle("margin-top", "50px");
    box.setStyle("opacity", "0");
    box.setStyle("transform", "scale(0.5)");
    box.setStyle("transition", "0.5s");
    let show = new CssClass("show");
    show.setStyle("opacity", "1");
    show.setStyle("transform", "scale(1)");

    let div = new HtmlElement("div");
    div.setAttribute("class", "box");
    div.setAttribute("id", "box");
    let h2 = new HtmlElement("h2");
    h2.text = "Моє popup вікно";
    let input = new HtmlElement("input");
    input.setAttribute("placeholder", "Enter...");
    let br = new HtmlElement("br");
    let btnTheme = new HtmlElement("button");
    btnTheme.text = "Тема";
    btnTheme.setAttribute("id", "theme");
    let btnClose = new HtmlElement("button");
    btnClose.text = "Закрити";
    btnClose.setAttribute("id", "close");

    div.addChild(h2);
    div.addChild(input);
    div.addChild(br);
    div.addChild(btnTheme);
    div.addChild(btnClose);

    let root = new HtmlElement("div");
    root.addChild(div);
    let block = new HtmlBlock(root);
    block.addStyle(bodyLight);
    block.addStyle(bodyDark);
    block.addStyle(box);
    block.addStyle(show);

    win1.document.open();
    win1.document.write("<html><head><title>Popup</title>");
    win1.document.write(block.getCode());
    win1.document.write("</head><body class='light'>");
    win1.document.write(root.getHtml());
    win1.document.write("</body></html>");
    win1.document.close();

    setTimeout(function(){
        let boxEl = win1.document.getElementById("box");
        boxEl.className = "box show";
    }, 100);

    let theme = localStorage.getItem("theme") || "light";
    win1.document.body.className = theme;
    win1.document.getElementById("theme").onclick = function()
    {
        let newTheme = theme === "light" ? "dark" : "light";
        
        localStorage.setItem("theme", newTheme);
        win1.document.body.className = newTheme;
        theme = newTheme;
    }
    win1.document.getElementById("close").onclick = function()
    {
        let boxEl = win1.document.getElementById("box");
        boxEl.className = "box";
        setTimeout(function(){
            win1.close();
        }, 500);
    }
}

 
document.getElementById("open").onclick = openPopUp;