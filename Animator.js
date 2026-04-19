/**
 * Клас для створення анімації
 */
export class Animator {
    constructor(element) {
        this.element = element;
    }

    moveAnimation(name) {
        let style = document.createElement('style');

        style.textContent = `
    @keyframes ${name} {
        0%   { transform: translate(0px, 0px); }
        25%  { transform: translate(50px, 30px); }
        50%  { transform: translate(100px, 60px); }
        75%  { transform: translate(50px, 30px); }
        100% { transform: translate(0px, 0px); }
    }`;

        document.head.appendChild(style);

        this.element.style.transformBox = 'fill-box';
        this.element.style.transformOrigin = 'center';

        this.element.style.animation = `${name} 4s infinite`;
    }

    start() {
        this.element.style.animationPlayState = 'running';
    }

    pause() {
        this.element.style.animationPlayState = 'paused';
    }

    changeStyle(prop, value) {
        this.element.style[prop] = value;
    }
}