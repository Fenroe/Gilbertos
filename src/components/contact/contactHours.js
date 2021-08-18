import { elementData } from "../global/elementData";
import { contactHoursItem } from "./contactHoursItem";

const contactHours = elementData(
    "contact-hours",
    "ul",
    [
        contactHoursItem
    ]
);

export {
    contactHours
};