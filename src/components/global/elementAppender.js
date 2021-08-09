import { elementConstructor } from "./element appender components/elementConstructor";

const elementAppender = (child, parent) => {
    const html = elementConstructor(child);
    console.log(typeof(html));
    child.elements.forEach((element => {
    /* if(element.name = "menu-item") {
            break; // replace with unique function 
        } else {
            elementAppender(element, child);
        }; */
        elementAppender(element, html);
    })); 
    parent.append(html);
};

export {
    elementAppender
};