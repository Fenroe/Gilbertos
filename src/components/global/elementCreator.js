const elementCreator = data => {
    let element = document.createElement(data.tag);
    element.classList.add(data.name);
    switch(data.tag) {
        case "a":
            element.innerHTML = data.text;
            element.setAttribute("href", data.href);
            element.setAttribute("data", element.target);
            break;
        case "h1": case "h2": case "h3": case "p":
            element.innerHTML = data.text;
            break;
        case "img":
            element.setAttribute("src", data.source);
            element.setAttribute("alt", data.alt);
            break;
    };
    return element;
};

export {
    elementCreator
};
