const template = document.querySelector("#template")
const form = document.forms["setStyle"]
const text = form.elements["text"]
const fontSize = form.elements["fontSize"]
const color = form.elements["color"]
const fontFamily = form.elements["fontFamily"]
const fontWeight = form.elements["fontWeight"]
const fontStyle = form.elements["fontStyle"]
const transform = form.elements["transform"]
const spacing = form.elements["spacing"]
const align = form.elements["align"]
const shadowCheck = form.elements["shadowCheck"]
const shadowX = form.elements["shadowX"]
const shadowY = form.elements["shadowY"]
const blur = form.elements["blur"]
const shadowColor = form.elements["shadowColor"]
const workspace = document.querySelector(".workspace")
const output = document.querySelector("#cssOutput")

text.oninput = function()
{
    template.textContent = text.value
}
fontSize.oninput = function()
{
    template.style.fontSize = fontSize.value + "px"
    updateCSS()
}
color.oninput = function()
{
    template.style.color = color.value
    updateCSS()
}
fontFamily.oninput = function()
{
    template.style.fontFamily = fontFamily.value
    updateCSS()
}
fontWeight.oninput = function()
{
    template.style.fontWeight = fontWeight.value
    updateCSS()
}
fontStyle.oninput = function()
{
    template.style.fontStyle = fontStyle.value
    updateCSS()
}
transform.oninput = function()
{
    template.style.textTransform = transform.value
    updateCSS()
}
spacing.oninput = function()
{
    template.style.letterSpacing =
    spacing.value + "px"
    updateCSS()
}
align.oninput = function()
{
    if(align.value === "left")
    {
        workspace.style.justifyContent = "flex-start"
    }
    else if(align.value === "center")
    {
        workspace.style.justifyContent = "center"
    }
    else if(align.value === "right")
    {
        workspace.style.justifyContent = "flex-end"
    }
    updateCSS()
}
shadowCheck.oninput = updateShadow
shadowX.oninput = updateShadow
shadowY.oninput = updateShadow
blur.oninput = updateShadow
shadowColor.oninput = updateShadow
function updateShadow()
{
    if(shadowCheck.checked)
    {
        template.style.textShadow =
        `${shadowX.value}px
        ${shadowY.value}px
        ${blur.value}px
        ${shadowColor.value}`
    }
    else
    {
        template.style.textShadow = "none"
    }
    updateCSS()
}
function updateCSS()
{
    let css = `
font-size: ${template.style.fontSize};
color: ${template.style.color};
font-family: ${template.style.fontFamily};
font-weight: ${template.style.fontWeight};
font-style: ${template.style.fontStyle};
text-transform: ${template.style.textTransform};
letter-spacing: ${template.style.letterSpacing};
justify-content: ${workspace.style.justifyContent};
text-shadow: ${template.style.textShadow};
    `

    output.textContent = css
}