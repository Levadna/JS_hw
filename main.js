import { SvgElement } from "./SvgElement.js";
import { SvgStyle } from "./SvgStyle.js";
import { SvgBlock } from "./SvgBlock.js";
import { Animator } from "./Animator.js";

let svg = new SvgElement('svg');
svg.setAttribute('width', '300');
svg.setAttribute('height', '200');

let group = new SvgElement('g');
let circle = new SvgElement('circle');
circle.setAttribute('cx', '50');
circle.setAttribute('cy', '50');
circle.setAttribute('r', '40');
circle.setAttribute('class', 'red-circle');

let rect = new SvgElement('rect');
rect.setAttribute('x', '120');
rect.setAttribute('y', '20');
rect.setAttribute('width', '100');
rect.setAttribute('height', '60');
rect.setAttribute('class', 'blue-rect');
group.appendChild(circle);
group.appendChild(rect);
svg.appendChild(group);


let red = new SvgStyle('red-circle');
red.setStyle('fill', 'red');
red.setStyle('stroke', 'black');
let blue = new SvgStyle('blue-rect');
blue.setStyle('fill', 'blue');
let block = new SvgBlock();

block.addStyle(red);
block.addStyle(blue);
block.setRoot(svg);

document.body.innerHTML = block.getCode();

let svgElement = document.getElementsByTagName('svg')[0];
let circleEl = document.getElementsByTagName('circle')[0];
let rectEl = document.getElementsByTagName('rect')[0];
let anim1 = new Animator(circleEl);
let anim2 = new Animator(rectEl);
anim1.moveAnimation('circleMove');
anim2.moveAnimation('rectMove');
setTimeout(() => {
    anim1.changeStyle('fill', 'green');
}, 2000);
setTimeout(() => {
    anim1.changeStyle('r', '60');
}, 3000);
setTimeout(() => {
    anim2.changeStyle('width', '150');
}, 3000);