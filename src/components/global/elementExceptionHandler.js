import { menuItemHandler } from "../menu/menuItemHandler";

const elementExceptionHandler = (element, elementParent, dataMark) => {
    switch(element.name) {
        case "menu-item":
            menuItemHandler(element, elementParent, dataMark);
            break;
        default:
            return 0;
    };
};

export {
    elementExceptionHandler
};