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

    const divTwo = (() => {
        const name = "home-story-container";
        const subDivOne = (() => {
            const name = "home-story-heading-container";
            const elementOneName = "home-story-heading";
            const elementOneTag = "h2";
            const elementOneText = "Authentic Italian Cuisine";

            return {
                name,
                elementOneName,
                elementOneTag,
                elementOneText
            }
        })();

        const subDivTwo = (() => {
            const name = "home-story-image-container";
            const elementName = "home-story-image";
            const elementSource = "components/example.jpg";

            return {
                name,
                elementName,
                elementSource
            }
        })();

        const subDivThree = (() => {
            const name = "home-text-container";
            const elementOneName = "home-story-text";
            const elementOneTag = "h2";
            const elementOneText = "Test";

            return {
                name,
                elementOneName,
                elementOneTag,
                elementOneText
            }
        })();

        return {
            name,
            subDivOne,
            subDivTwo,
            subDivThree
        }
    })();

    return {
        name,
        divOne,
        divTwo
    }        
})();

export {
    sectionOneData
}