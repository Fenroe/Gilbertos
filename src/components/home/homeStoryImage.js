import { elementData } from "../global/elementData";
import image from "./home-story-image-source.jpg";

const homeStoryImage = elementData(
    "home-story-image",
    "img",
);
homeStoryImage.source = image;
homeStoryImage.alt = "Test";

export {
    homeStoryImage
};