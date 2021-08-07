const sectionThreeData = (() => {
    const name = "home-cta-container";
    const divOne = (() => {
        const name = "home-cta";
        const subDivOne = (() => {
            const name = "home-cta-link";
            const elementOneHref = "#";
            const elementOneText = "See Our Menu";

            return {
                name,
                elementOneHref,
                elementOneText
            }
        })();

        return {
            name,
            subDivOne
        };
    })();

    const divTwo = (() => {
        const name = "home-cta";
        const subDivOne = (() => {
            const name = "home-cta-link";
            const elementOneHref = "#";
            const elementOneText = "Get In Touch";

            return {
                name,
                elementOneHref,
                elementOneText
            };
        })();

        return {
            name,
            subDivOne
        };
    })();

    return {
        name,
        divOne,
        divTwo
    };
})();

export {
    sectionThreeData
};