import { startersMenuData } from "./menu section data components/menu item components/startersMenuData";
import { mainsMenuData } from "./menu section data components/menu item components/mainsMenuData";
import { dessertsMenuData } from "./menu section data components/menu item components/dessertsMenuData";
import { menuItemInfo } from "./menu section data components/menu item components/menu item info container components/menuItemInfo";
import { menuItemName } from "./menu section data components/menu item components/menu item name container components/menuItemName";
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