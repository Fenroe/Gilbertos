const elementCreator = data => {
    let element = document.createElement(data.tag);
    element.classList.add(data.name);
    switch(data.tag) {
        case "a":
            element.innerHTML = data.text;
            element.setAttribute("href", data.href);
            element.setAttribute("data-target", data.target);
            console.log(element);
            break;
        case "h1": case "h2": case "h3": case "p": case "span":
            element.innerHTML = data.text;
            break;
        case "img": case "i":
            element.setAttribute("src", data.source);
            element.setAttribute("alt", data.alt);
            element.setAttribute("href", data.href);
            break;
        case "iframe":
            element.setAttribute("src", data.source);
            element.setAttribute("frameborder", data.frameborder);
            break;
    };
    return element;
};

export {
    elementCreator
};
