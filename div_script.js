const template = document.querySelector("#template")
const form = document.forms["setStyle"]
const width = form.elements["width"]
const height = form.elements["height"]
const bg = form.elements["bg"]
const borderCheck = form.elements["borderCheck"]
const borderColor = form.elements["borderColor"]
const borderWidth = form.elements["borderWidth"]
const radius = form.elements["radius"]
const borderStyle = form.elements["borderStyle"]
const shadowCheck = form.elements["shadowCheck"]
const shadowX = form.elements["shadowX"]
const shadowY = form.elements["shadowY"]
const blur = form.elements["blur"]
const shadowColor = form.elements["shadowColor"]
const opacity = form.elements["opacity"]
const rotate = form.elements["rotate"]
const transition = form.elements["transition"]
const fontSize = form.elements["fontSize"]
const textAlign = form.elements["textAlign"]
const padding = form.elements["padding"]
const output = document.querySelector("#cssOutput")


width.oninput = function()
{
    template.style.width = width.value + "px"
    // template.style.textAlign = "center"
    updateCSS()
}
height.oninput = function() {
    template.style.height = height.value + "px"
    updateCSS()
}
bg.oninput = function() {
    template.style.backgroundColor = bg.value
    updateCSS()
}
// borderColor.oninput = function() {
//     template.style.borderColor = borderColor.value
//     updateCSS()
// }
// borderStyle.oninput = function()
// {
//     template.style.borderStyle = borderStyle.value
//     updateCSS()
// }
// borderWidth.oninput = function() {
//     template.style.borderWidth = borderWidth.value + "px"
//     updateCSS()
// }
radius.oninput = function() {
    template.style.borderRadius = radius.value + "px"
    updateCSS()
}

borderCheck.oninput = updateBorder
borderColor.oninput = updateBorder
borderWidth.oninput = updateBorder
borderStyle.oninput = updateBorder

function updateBorder()
{
    if(borderCheck.checked)
    {
        template.style.border =
        `${borderWidth.value}px
        ${borderStyle.value}
        ${borderColor.value}`
    }
    else
    {
        template.style.border = "none"
    }

    updateCSS()
}
shadowX.oninput = updateShadow
shadowY.oninput = updateShadow
blur.oninput = updateShadow
shadowColor.oninput = updateShadow
shadowCheck.oninput = updateShadow

function updateShadow()
{
    if(shadowCheck.checked)
    {
        template.style.boxShadow =
        `${shadowX.value}px
        ${shadowY.value}px
        ${blur.value}px
        ${shadowColor.value}`
    }
    else
    {
        template.style.boxShadow = "none"
    }

    updateCSS()
}
opacity.oninput = function()
{
    template.style.opacity = opacity.value / 100
    updateCSS()
}
rotate.oninput = function()
{
    template.style.transform =
    `rotate(${rotate.value}deg)`
    updateCSS()
}
transition.oninput = function()
{
    if(transition.checked)
    {
        template.style.transition = "0.3s"
    }
    else
    {
        template.style.transition = "0s"
    }

    updateCSS()
}
padding.oninput = function()
{
    template.style.padding =
    padding.value + "px"
    updateCSS()
}
fontSize.oninput = function() {
    template.style.fontSize = fontSize.value + "px"
    updateCSS() 
}
textAlign.oninput = function() {
    if (textAlign.value === "left") {
        template.style.justifyContent = "flex-start"
    }
    else if (textAlign.value === "center") {
        template.style.justifyContent = "center"
    }
    else if (textAlign.value === "right") {
        template.style.justifyContent = "flex-end"
    }
    updateCSS()
}
function updateCSS() {
    let css = `
width: ${template.style.width};
height: ${template.style.height};
background: ${template.style.backgroundColor};
border-width: ${template.style.borderWidth};
border-color: ${template.style.borderColor};
border-style: ${template.style.borderStyle};
border-radius: ${template.style.borderRadius};
font-size: ${template.style.fontSize};
opacity: ${template.style.opacity};
padding: ${template.style.padding};
transform: ${template.style.transform};
transition: ${template.style.transition};
justify-content: ${template.style.justifyContent};
box-shadow: ${template.style.boxShadow};
    `

    output.textContent = css
}