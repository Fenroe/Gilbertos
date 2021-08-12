import { siteNavLogo } from "./siteNavLogo";
import { elementAppender } from "../global/elementAppender";
import { addLinkTarget } from "../global/addLinkTarget";

const siteNavLogoHandler = (element, elementParent, dataMark) => {
    addLinkTarget(siteNavLogo, siteNavLogo.text);
    elementAppender(element, elementParent, dataMark);
};

export {
    siteNavLogoHandler
};