const addLinkTarget = (element, text) => {
    if(text == "Home" || text == "Giliberto's") {
        element.target = "home";
        console.log("home");
    };
    if(text == "Menu" || text == "See Our Menu") {
        element.target = "menu";
        console.log("menu");
    };
    if(text == "Contact" || text == "Get In Touch") {
        element.target = "contact";
        console.log("contact");
    };
};

export {
    addLinkTarget
};