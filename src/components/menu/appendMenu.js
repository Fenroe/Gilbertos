import { elementAppender } from "../global/elementAppender";
import { menuSection } from "./menuSection";
import { content } from "../global/sharedVariables";

const appendMenu = elementAppender(menuSection, content);

export {
    appendMenu
};

