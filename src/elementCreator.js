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

    const makeLink = (elementHref, elementText) => {
        let link = document.createElement("a");
        link.setAttribute("href", elementHref);
        link.innerHTML = elementText;
        return link;
    }

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
        makeLink,
        makeDiv,
        makeSection
    }
})();

export {
    elementCreator
}
