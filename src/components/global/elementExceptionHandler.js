import { menuItemHandler } from "../menu/menuItemHandler";
import { siteNavLinkHandler } from "../nav/siteNavLinkHandler";
import { homeCtaHandler } from "../home/homeCtaHandler";
import { siteNavLogoHandler } from "../nav/siteNavLogoHandler";
import { chiHandler } from "../contact/chiHandler";
import { ciiHandler } from "../contact/ciiHandler";
import { csmiHandler } from "../contact/csmiHandler";

const elementExceptionHandler = (element, elementParent, dataMark) => {
    switch(element.name) {
        case "menu-item":
            menuItemHandler(element, elementParent, dataMark);
            break;
        case "site-nav-logo":
            siteNavLogoHandler(element, elementParent, dataMark);
            break;
        case "site-nav-menu-item":
            siteNavLinkHandler(element, elementParent, dataMark);
            break;
        case "home-cta":
            homeCtaHandler(element, elementParent, dataMark);
            break;
        case "contact-hours-item":
            chiHandler(element, elementParent, dataMark);
            break;
        case "contact-info-item":
            ciiHandler(element, elementParent, dataMark);
            break;
        case "contact-sm-item":
            csmiHandler(element, elementParent, dataMark);
            break;
        default:
            return 0;
    };
};

export {
    elementExceptionHandler
};