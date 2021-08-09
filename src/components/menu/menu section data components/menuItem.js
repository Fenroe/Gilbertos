import { elementData } from "../../global/elementData";
import { menuItemInfoContainer } from "./menu item components/menuItemInfoContainer";
import { menuItemNameContainer } from "./menu item components/menuItemNameContainer";

const menuItem = elementData(
    "menu-item",
    "div",
    [
        menuItemNameContainer,
        menuItemInfoContainer
    ]
);

export {
    menuItem
};