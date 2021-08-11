import { elementData } from "../global/elementData";
import { menuItemInfoContainer } from "./menuItemInfoContainer";
import { menuItemNameContainer } from "./menuItemNameContainer";

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