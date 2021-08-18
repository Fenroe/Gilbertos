import { chiDay } from "./chiDay";
import { chiHours } from "./chiHours";
import { elementAppender } from "../global/elementAppender";    

const chiData = [
    {
        "day": "Monday",
        "hours": "11:00 - 23:00"
    },
    {
        "day": "Tuesday",
        "hours": "11:00 - 23:00"
    },
    {
        "day": "Wednesday",
        "hours": "11:00 - 23:00"
    },
    {
        "day": "Thursday",
        "hours": "11:00 - 23:00"
    },
    {
        "day": "Friday",
        "hours": "11:00 - 23:00"
    },
    {
        "day": "Saturday",
        "hours": "11:00 - 23:00"
    },
    {
        "day": "Sunday",
        "hours": "11:00 - 23:00"
    },
];

const chiHandler = (element, elementParent, dataMark) => {
        chiData.forEach(entry => {
            chiDay.text = entry.day;
            chiHours.text = entry.hours;
            elementAppender(element, elementParent, dataMark);
        });
};

export {
    chiHandler
};