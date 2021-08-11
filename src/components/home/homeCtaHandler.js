import { homeCtaLink } from "./homeCtaLink";
import { elementAppender } from "../global/elementAppender";
import { addLinkTarget } from "../global/addLinkTarget";

const homeCtaHandler = (element, elementParent, dataMark) => {
    const ctaLinkText = ["See Our Menu", "Get In Touch"];
    ctaLinkText.forEach(text => {
        homeCtaLink.text = text;
        addLinkTarget(homeCtaLink, text);
        elementAppender(element, elementParent, dataMark);
    });
};

export {
    homeCtaHandler
};