import { elementData } from "../global/elementData";
import { contactHours } from "./contactHours";

const contactHoursContainer = elementData(
    "contact-hours-container",
    "div",
    [
        contactHours
    ]
);

export {
    contactHoursContainer
};