const sectionThreeData = (() => {
    const name = "home-cta-container";
    const divOne = (() => {
        const name = "home-cta";
        const subDivOne = (() => {
            const name = "home-cta-link";
            const elementOneAttributeKey = "href";
            const elementOneAttributeValue = "#";
            const elementOneTag = "a";
            const elementOneText = "See Our Menu";

            return {
                name,
                elementOneAttributeKey,
                elementOneAttributeValue,
                elementOneTag,
                elementOneText
            }
        })();

        const subDivTwo = (() => {
            const name = "home-cta-link";
            const elementOneAttributeKey = "href";
            const elementOneAttributeValue = "#";
            const elementOneTag = "a";
            const elementOneText = "Get In Touch";

            return {
                name,
                elementOneAttributeKey,
                elementOneAttributeValue,
                elementOneTag,
                elementOneText
            }
        })();

        return {
            name,
            subDivOne,
            subDivTwo
        }
    })();

    return {
        name,
        divOne
    }
})();

export {
    sectionThreeData
}