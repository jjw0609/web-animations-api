export default class Star {
    constructor(number, x, y) {
        const element = document.createElement('div');
        element.classList.add('star');
        element.innerHTML = number;
        element.style.cssText = `left: ${x}px; top: ${y}px`;

        document.body.append(element);
    }
}