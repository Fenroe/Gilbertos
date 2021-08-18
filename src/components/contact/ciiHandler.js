import { elementAppender } from "../global/elementAppender";
import { ciiIcon } from "./ciiIcon";
import { ciiText } from "./ciiText";
import { phone } from "./phone.svg";
import { email } from "./email.svg";


const ciiData = [
    {
        "icon": phone,
        "text": "555 123 4567"
    },
    {
        "icon": email,
        "text": "placeholder@gilibertos.com"
    },
];

const ciiHandler = (element, elementParent, dataMark) => {
    ciiData.forEach(entry => {
        ciiIcon.source = entry.icon;
        ciiText.text = entry.text;
        elementAppender(element, elementParent, dataMark);
    });
};

export {
    ciiHandler
};