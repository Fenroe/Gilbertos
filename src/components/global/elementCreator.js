const elementCreator = (() => {

    const makeImage = (source, alt, elementClass) => {
        let image = document.createElement("img");
        image.setAttribute("src", source);
        image.setAttribute("alt", alt);
        image.classList.add(elementClass);
        return image; 
    };

    const makeText = (elementTag, elementText, elementClass) => {
        let text = document.createElement(elementTag);
        let textNode = document.createTextNode(elementText);
        text.append(textNode);
        text.classList.add(elementClass);
        return text;
    };

    const makeLink = (elementHref, elementText) => {
        let link = document.createElement("a");
        link.setAttribute("href", elementHref);
        link.innerHTML = elementText;
        return link;
    };

    const makeContainer = (elementTag, elementClass) => {
        let container = document.createElement(elementTag);
        container.classList.add(elementClass);
        return container;
    };

    return {
        makeImage,
        makeText,
        makeLink,
        makeContainer
    };
})();

export {
    elementCreator
};
