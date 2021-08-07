const homeCtaData = (() => {
    const name = "home-cta-container";
    const tag = "section";
    const divOne = (() => {
        const name = "home-cta";
        const tag = "div";
        const subDivOne = (() => {
            const name = "home-cta-link";
            const tag = "div";
            const elementOneHref = "#";
            const elementOneText = "See Our Menu";

            return {
                name,
                tag,
                elementOneHref,
                elementOneText
            }
        })();

        return {
            name,
            tag,
            subDivOne
        };
    })();

    const divTwo = (() => {
        const name = "home-cta";
        const tag = "div";
        const subDivOne = (() => {
            const name = "home-cta-link";
            const tag = "div";
            const elementOneHref = "#";
            const elementOneText = "Get In Touch";

            return {
                name,
                tag,
                elementOneHref,
                elementOneText
            };
        })();

        return {
            name,
            tag,
            subDivOne
        };
    })();

    return {
        name,
        tag,
        divOne,
        divTwo
    };
})();

export {
    homeCtaData
};