import { elementData } from "../global/elementData";
import { siteNavMenu } from "./siteNavMenu";

const siteNav = elementData(
    "site-nav",
    "nav",
    [
        siteNavMenu
    ]
);

export {
    siteNav
};