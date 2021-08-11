import { elementData } from "../global/elementData";
import { siteNavMenuItem } from "./siteNavMenuItem";

const siteNavMenu = elementData(
    "site-nav-menu",
    "ul",
    [
        siteNavMenuItem,
    ]
);

export {
    siteNavMenu
};