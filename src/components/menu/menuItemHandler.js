import { startersMenuData } from "./startersMenuData";
import { mainsMenuData } from "./mainsMenuData";
import { dessertsMenuData } from "./dessertsMenuData";
import { menuItemInfo } from "./menuItemInfo";
import { menuItemName } from "./menuItemName";
import { elementAppender } from "./../global/elementAppender";

const menuItemHandler = (element, elementParent, dataMark) => {
    if(dataMark === "starters") {
        startersMenuData.forEach(entry => {
            menuItemName.text = entry.name;
            menuItemInfo.text = entry.info;
            elementAppender(element, elementParent, dataMark);
        });
    } else if(dataMark === "mains") {
        mainsMenuData.forEach(entry => {
            menuItemName.text = entry.name;
            menuItemInfo.text = entry.info;
            elementAppender(element, elementParent, dataMark);
        });
    } else if(dataMark === "desserts") {
        dessertsMenuData.forEach(entry => {
            menuItemName.text = entry.name;
            menuItemInfo.text = entry.info;
            elementAppender(element, elementParent, dataMark);
        });
    } else return;
};

export {
    menuItemHandler
};