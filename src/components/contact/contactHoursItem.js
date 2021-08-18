import { elementData } from "../global/elementData";
import { chiDay } from "./chiDay";
import { chiHours } from "./chiHours";

const contactHoursItem = elementData(
    "contact-hours-item",
    "li",
    [
        chiDay,
        chiHours
    ]
);

export {
    contactHoursItem
};