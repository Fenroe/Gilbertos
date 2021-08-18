import { elementData } from "../global/elementData";
import { ciiIcon } from "./ciiIcon";
import { ciiText } from "./ciiText";

const contactInfoItem = elementData(
    "contact-info-item",
    "li",
    [
        ciiIcon,
        ciiText
    ]
);

export {
    contactInfoItem
};