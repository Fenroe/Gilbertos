const siteNavData = (() => {
    const name = "site-nav";
    const tag = "nav";
    const menu = (() => {
        const name = "site-nav-menu";
        const tag = "ul";
        const itemText = ["Home", "Menu", "Contact"];

        return {
            name,
            tag,
            itemText
        };
    })();

    return {
        name,
        tag,
        menu
    };

})();

export {
    siteNavData
}