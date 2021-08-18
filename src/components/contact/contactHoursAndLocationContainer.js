import { elementData } from "../global/elementData";
import { contactHoursContainer } from "./contactHoursContainer";
import { contactLocationContainer } from "./contactLocationContainer";

const contactHourAndLocationContainer = elementData(
    "contact-hour-and-location-container",
    "section",
    [
        contactHoursContainer,
        contactLocationContainer
    ]
);

export {
    contactHourAndLocationContainer
};