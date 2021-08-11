import { elementData } from "../global/elementData";
import { siteNavLink } from "./siteNavLink";

const siteNavMenuItem = elementData(
    "site-nav-menu-item",
    "li",
    [
        siteNavLink
    ]
);

export {
    siteNavMenuItem
};