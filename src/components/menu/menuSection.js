import { menuSectionHeadingContainer } from "./menu section data components/menuSectionHeadingContainer";
import { menuItem } from "./menu section data components/menuItem";
import { elementData } from "../global/elementData";

const menuSection = elementData(
    "menu-section",
    "section",
    [
        menuSectionHeadingContainer,
        menuItem,
    ]
);

export {
    menuSection
};