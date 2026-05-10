const template = document.querySelector("#template")
const form = document.forms["setStyle"]
const width = form.elements["width"]
const height = form.elements["height"]
const borderCheck = form.elements["borderCheck"]
const borderColor = form.elements["borderColor"]
const borderWidth = form.elements["borderWidth"]
const borderStyle = form.elements["borderStyle"]
const radius = form.elements["radius"]
const shadowCheck = form.elements["shadowCheck"]
const blur = form.elements["blur"]
const shadowColor = form.elements["shadowColor"]
const shadowX = form.elements["shadowX"]
const shadowY = form.elements["shadowY"]
const opacity = form.elements["opacity"]
const rotate = form.elements["rotate"]
const fit = form.elements["fit"]
const brightness = form.elements["brightness"]
const contrast = form.elements["contrast"]
const grayscale = form.elements["grayscale"]
const sepia = form.elements["sepia"]
const imgUrl = form.elements["imgUrl"]
const applyImg = document.querySelector("#applyImg")
const output = document.querySelector("#cssOutput")

width.oninput = function()
{
    template.style.width =
    width.value + "px"
    updateCSS()
}
height.oninput = function()
{
    template.style.height =
    height.value + "px"
    updateCSS()
}
radius.oninput = function()
{
    template.style.borderRadius =
    radius.value + "px"
    updateCSS()
}
applyImg.onclick = function () {
    template.src = imgUrl.value
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

shadowCheck.oninput = updateShadow
shadowX.oninput = updateShadow
shadowY.oninput = updateShadow
blur.oninput = updateShadow
shadowColor.oninput = updateShadow
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
    template.style.opacity =
    opacity.value / 100

    updateCSS()
}
rotate.oninput = function()
{
    template.style.transform =
    `rotate(${rotate.value}deg)`
    updateCSS()
}
fit.oninput = function()
{
    template.style.objectFit =
    fit.value

    updateCSS()
}
brightness.oninput = updateFilter
contrast.oninput = updateFilter
grayscale.oninput = updateFilter
sepia.oninput = updateFilter
function updateFilter()
{
    template.style.filter =
    `
    brightness(${brightness.value}%)
    contrast(${contrast.value}%)
    grayscale(${grayscale.value}%)
    sepia(${sepia.value}%)
    `
    updateCSS()
}
function updateCSS()
{
    let css = `
width: ${template.style.width};
height: ${template.style.height};
border: ${template.style.border};
border-radius: ${template.style.borderRadius};
box-shadow: ${template.style.boxShadow};
opacity: ${template.style.opacity};
transform: ${template.style.transform};
object-fit: ${template.style.objectFit};
filter: ${template.style.filter};
    `

    output.textContent = css
}