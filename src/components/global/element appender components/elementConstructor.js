import { elementCreator } from "../elementCreator";

const elementConstructor = element => {
    switch(element.tag) {
        case "img":
            return elementCreator.makeImage(element.source, element.alt, element.name);
        case "h1": case "h2": case "h3": case "p":
            return elementCreator.makeText(element.tag, element.text, element.name);
        case "a":
            return elementCreator.makeLink(element.href, element.text);
        default:
            return elementCreator.makeContainer(element.tag, element.name);
    };
};

export {
    elementConstructor
};