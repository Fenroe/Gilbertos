import { siteNavLink } from "./siteNavLink";
import { elementAppender } from "../global/elementAppender";
import { addLinkTarget } from "../global/addLinkTarget";

const siteNavLinkHandler = (element, elementParent, dataMark) => {
    const navLinkText = ["Home", "Menu", "Contact"];
    navLinkText.forEach(text => {
        siteNavLink.text = text;
        addLinkTarget(siteNavLink, text);
        console.table(siteNavLink);
        elementAppender(element, elementParent, dataMark);
    });
};

export {
    siteNavLinkHandler
};