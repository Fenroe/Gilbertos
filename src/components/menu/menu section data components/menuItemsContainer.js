import { elementData } from "../../global/elementData";
import { menuItem } from "./menuItem";

const menuItemsContainer = elementData(
    "menu-items-container",
    "div",
    [
        menuItem,
    ]
);

export {
    menuItemsContainer
};