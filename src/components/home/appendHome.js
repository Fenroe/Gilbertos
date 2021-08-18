import { homeTitleContainer } from "./homeTitleContainer";
import { homeStoryContainer } from "./homeStoryContainer";
import { homeCtaContainer } from "./homeCtaContainer";
import { elementAppender } from "../global/elementAppender";
import { content } from "../global/sharedVariables";
import { activateLinks } from "../activateLinks";

const appendHome = () => {
    const homeSections = [
        homeTitleContainer,
        homeStoryContainer,
        homeCtaContainer
    ];
    homeSections.forEach(section => {
        elementAppender(section, content);
    });
    content.querySelectorAll("a").forEach(link => {
        activateLinks(link);
    });
};

export {
    appendHome
};


