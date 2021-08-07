const sectionOneData = (() => {
    const name = "home-title-container";
    const divOne = (() => {
        const name = "home-heading-container";
        const elementOneName = "home-heading";
        const elementOneTag = "h1";
        const elementOneText = "Gilberto's"
        const elementTwoName = "home-subheading";
        const elementTwoTag = "h2";
        const elementTwoText = "Slice of Italy";

        return {
            name,
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
        divOne
    }        
})();

export {
    sectionOneData
};