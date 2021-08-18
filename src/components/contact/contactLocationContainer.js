import { elementData } from "../global/elementData";
import { contactLocation } from "./contactLocation";

const contactLocationContainer = elementData(
    "contact-location-container",
    "div",
    [
        contactLocation
    ]
);

export {
    contactLocationContainer
};