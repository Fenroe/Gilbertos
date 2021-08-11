import { elementData } from "../global/elementData";
import { homeHeading } from "./homeHeading";
import { homeSubheading } from "./homeSubheading";


const homeHeadingContainer = elementData(
    "home-heading-container",
    "div",
    [
        homeHeading,
        homeSubheading,
    ]
);

export {
    homeHeadingContainer
};