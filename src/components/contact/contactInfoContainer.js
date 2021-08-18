import { elementData } from "../global/elementData";
import { contactInfo } from "./contactInfo";

const contactInfoContainer = elementData(
    "contact-info-container",
    "div",
    [
        contactInfo
    ]
);

export {
    contactInfoContainer
};