import { siteNavData } from "./siteNavData";
import { elementCreator } from "../global/elementCreator";
import { makeSiteMenuItem } from "./makeSiteMenuItem";

const siteNavConstructor = (() => {
    const nav = elementCreator.makeContainer(siteNavData.tag, siteNavData.name);
    const menu = elementCreator.makeContainer(siteNavData.menu.tag, siteNavData.menu.name);
    const fillMenu = () => {
        siteNavData.menu.itemText.forEach((item) => {
            let menuItem = makeSiteMenuItem(item);
            menu.append(menuItem);
        }); 
    };
    const fillNav = () => {
        fillMenu();
        nav.append(menu);
    };

    return {
        nav,
        fillNav
    }
})();

export {
    siteNavConstructor
}