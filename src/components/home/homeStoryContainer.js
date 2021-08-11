import { elementData } from "../global/elementData";
import { homeStoryHeadingContainer } from "./homeStoryHeadingContainer";
import { homeStoryImageContainer } from "./homeStoryImageContainer";
import { homeStoryTextContainer } from "./homeStoryTextContainer";

const homeStoryContainer = elementData(
    "home-story-container",
    "section",
    [
        homeStoryHeadingContainer,
        homeStoryImageContainer,
        homeStoryTextContainer
    ]
);

export {
    homeStoryContainer
};