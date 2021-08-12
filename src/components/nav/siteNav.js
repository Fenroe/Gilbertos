import { elementData } from "../global/elementData";
import { siteNavMenu } from "./siteNavMenu";
import { siteNavLogoContainer } from "./siteNavLogoContainer";

const siteNav = elementData(
    "site-nav",
    "nav",
    [
        siteNavLogoContainer,
        siteNavMenu
    ]
);

export {
    siteNav
};