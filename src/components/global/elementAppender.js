import { elementConstructor } from "./element appender components/elementConstructor";
import { makeExtraDataObject } from "./makeExtraDataObject";
import { addExtraData } from "./addExtraData";
import { elementExceptionHandler } from "./elementExceptionHandler";

const elementAppender = (child, parent, dataMark = "") => {
    const html = elementConstructor(child);
    child.elements.forEach((element => {
        if(elementExceptionHandler(element, html, dataMark) === 0) {
            elementAppender(element, html, dataMark);
        };
    })); 
    const extraData = makeExtraDataObject(dataMark);
    addExtraData(child, html, extraData);
    parent.append(html);
};

export {
    elementAppender
};