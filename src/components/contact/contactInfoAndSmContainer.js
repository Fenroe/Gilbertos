import { elementData } from "../global/elementData";
import { contactInfoContainer } from "./contactInfoContainer";
import { contactSmContainer } from "./contactSmContainer";

const contactInfoAndSmContainer = elementData(
    "contact-info-and-sm-container",
    "section",
    [
        contactInfoContainer,
        contactSmContainer
    ]
);

export {
    contactInfoAndSmContainer
};