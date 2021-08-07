const elementCreator = (() => {

    const makeImage = (source, alt, elementClass) => {
        let image = document.createElement("img");
        image.setAttribute("src", source);
        image.setAttribute("alt", alt);
        image.classList.add(elementClass);
        return image; 
    };

    const makeText = (element, elementText, elementClass) => {
        let text = document.createElement(element);
        let textNode = document.createTextNode(elementText);
        text.append(textNode);
        text.classList.add(elementClass);
        return text;
    };

    const makeDiv = elementClass => {
        let div = document.createElement("div");
        div.classList.add(elementClass);
        return div;
    }

    const makeSection = elementClass => {
        let section = document.createElement("section");
        section.classList.add(elementClass);
        return section;
    }

    return {
        makeImage,
        makeText,
        makeDiv,
        makeSection
    }
})();

export {
    elementCreator
}
