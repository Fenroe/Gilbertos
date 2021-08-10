import { elementAppender } from "../global/elementAppender";
import { menuSection } from "./menuSection";
import { content } from "../global/sharedVariables";
import { menuDataMarks } from "./menuDataMarks";


const appendMenu = () => {
    menuDataMarks.forEach(dataMark => {
        elementAppender(menuSection, content, dataMark);
    });  
};
export {
    appendMenu
};

