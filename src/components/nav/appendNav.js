import { header } from "../global/sharedVariables";
import { elementAppender } from "../global/elementAppender";
import { siteNav } from "./siteNav";
import { activateLinks } from "../activateLinks";

const appendNav = () => {
    elementAppender(siteNav, header);
    header.querySelectorAll("a").forEach(link => {
        activateLinks(link);
    });
};

export {
    appendNav
};
