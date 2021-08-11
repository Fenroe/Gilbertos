import { elementCreator } from "./elementCreator";
import { makeExtraDataObject } from "./makeExtraDataObject";
import { addExtraData } from "./addExtraData";
import { elementExceptionHandler } from "./elementExceptionHandler";

const elementAppender = (child, parent, dataMark = "") => {
    const html = elementCreator(child);
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