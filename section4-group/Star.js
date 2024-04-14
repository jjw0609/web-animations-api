export default class Star {
    constructor(number) {
        const element = document.createElement('div');
        element.classList.add('star');
        element.innerHTML = number;
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
        element.style.transform = `scale(${5})`;

        document.body.append(element);
    }
}