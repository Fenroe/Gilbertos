import { csmiIcon } from "./csmiIcon";
import { elementAppender } from "../global/elementAppender";
import { facebook } from "./facebook.svg";
import { twitter } from "./twitter.svg";
import { instagram } from "./instagram.svg";

const csmiData = [
    {
        "icon": facebook
    },
    {
        "icon": twitter
    },
    {
        "icon": instagram
    },
];

const csmiHandler = (element, elementParent, dataMark) => {
    csmiData.forEach(entry => {
        csmiIcon.source = entry.icon;
        elementAppender(element, elementParent, dataMark);
    });
};

export {
    csmiHandler
};