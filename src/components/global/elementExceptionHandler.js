import { menuItemHandler } from "../menu/menuItemHandler";
import { siteNavLinkHandler } from "../nav/siteNavLinkHandler";
import { homeCtaHandler } from "../home/homeCtaHandler";

const elementExceptionHandler = (element, elementParent, dataMark) => {
    switch(element.name) {
        case "menu-item":
            menuItemHandler(element, elementParent, dataMark);
            break;
        case "site-nav-menu-item":
            siteNavLinkHandler(element, elementParent, dataMark);
            break;
        case "home-cta":
            homeCtaHandler(element, elementParent, dataMark);
            break;
        default:
            return 0;
    };
};

export {
    elementExceptionHandler
};