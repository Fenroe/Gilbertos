const addLinkTarget = (element, text) => {
    if(text === "Home") {
        element.target = "home";
    };
    if(text === "Menu" || text === "See Our Menu") {
        element.target = "menu";
    };
    if(text === "Contact" || text === "Get In Touch") {
        element.target = "contact";
    };
};

export {
    addLinkTarget
};