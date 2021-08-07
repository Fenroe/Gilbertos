import { elementCreator } from "../global/elementCreator";

const makeSiteMenuItem = text => {
    let item = elementCreator.makeContainer("li", "site-nav-menu-item");
    let link = elementCreator.makeLink("#", text);
    item.append(link);
    return item;
};

export {
    makeSiteMenuItem
};





