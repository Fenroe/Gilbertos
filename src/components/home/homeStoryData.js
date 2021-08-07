import homeTextImage from "./home-text-image.jpg";

const homeStoryData = (() => {
    const name = "home-story-container";
    const tag = "section";
    const divOne = (() => {
        const name = "home-story-heading-container";
        const tag = "div";
        const elementOneName = "home-story-heading";
        const elementOneTag = "h2";
        const elementOneText = "Authentic Italian Cuisine";

        return {
            name,
            tag,
            elementOneName,
            elementOneTag,
            elementOneText
        };
    })();

    const divTwo = (() => {
        const name = "home-story-image-container";
        const tag = "div";
        const elementOneName = "home-story-image";
        const elementOneSource = homeTextImage;
        const elementOneAlt = "";

        return {
            name,
            tag,
            elementOneName,
            elementOneSource,
            elementOneAlt
        };
    })();

    const divThree = (() => {
        const name = "home-text-container";
        const tag = "div";
        const elementOneName = "home-story-text";
        const elementOneTag = "h2";
        const elementOneText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero mollitia fuga distinctio 
        sint ipsa placeat pariatur reiciendis aspernatur sunt quibusdam adipisci dolorem voluptatem, quis, tenetur quam 
        provident iusto deserunt? Quas?`;

        return {
            name,
            tag,
            elementOneName,
            elementOneTag,
            elementOneText
        };
    })();

    return {
        name,
        tag,
        divOne,
        divTwo,
        divThree
    };
})();

export {
    homeStoryData
};