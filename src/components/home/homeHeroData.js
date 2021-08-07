const homeHeroData = (() => {
    const name = "home-hero-container";
    const tag ="section";
    const divOne = (() => {
        const name = "home-hero-heading-container";
        const tag = "div";
        const elementOneName = "home-hero-heading";
        const elementOneTag = "h1";
        const elementOneText = "Gilberto's"
        const elementTwoName = "home-hero-subheading";
        const elementTwoTag = "h2";
        const elementTwoText = "Slice of Italy";

        return {
            name,
            tag,
            elementOneName,
            elementOneTag,
            elementOneText,
            elementTwoName,
            elementTwoTag,
            elementTwoText
        }
    })();

    return {
        name,
        tag,
        divOne
    }        
})();

export {
    homeHeroData
};