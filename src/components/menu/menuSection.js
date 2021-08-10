import { menuSectionHeadingContainer } from "./menu section data components/menuSectionHeadingContainer";
import { elementData } from "../global/elementData";
import { menuItemsContainer } from "./menu section data components/menuItemsContainer";

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