import { contactHourAndLocationContainer } from "./contactHoursAndLocationContainer";
import { contactInfoAndSmContainer } from "./contactInfoAndSmContainer";
import { elementAppender } from "../global/elementAppender";
import { content } from "../global/sharedVariables";

const appendContact = () => {
    const contactSections = [
        contactHourAndLocationContainer,
        contactInfoAndSmContainer
    ];
    contactSections.forEach(section => {
        elementAppender(section, content);
    });
};

export {
    appendContact
};