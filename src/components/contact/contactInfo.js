import { elementData } from "../global/elementData";
import { contactInfoItem } from "./contactInfoItem";

const contactInfo = elementData(
    "contact-info",
    "ul",
    [
        contactInfoItem
    ]
);

export {
    contactInfo
};