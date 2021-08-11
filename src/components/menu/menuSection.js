import { menuSectionHeadingContainer } from "./menuSectionHeadingContainer";
import { elementData } from "../global/elementData";
import { menuItemsContainer } from "./menuItemsContainer";

const menuSection = elementData(
    "menu-section",
    "section",
    [
        menuSectionHeadingContainer,
        menuItemsContainer
    ]
);

export {
    menuSection
};