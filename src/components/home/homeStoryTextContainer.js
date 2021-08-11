import { elementData } from "../global/elementData";
import { homeStoryText } from "./homeStoryText";

const homeStoryTextContainer = elementData(
    "home-story-text-container",
    "div",
    [
        homeStoryText
    ]
);

export {
    homeStoryTextContainer
};