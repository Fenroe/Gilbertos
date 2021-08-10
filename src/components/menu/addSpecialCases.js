const menuAddExtraData = (extraDataObject, element, html) => {
    switch(element.name) {
        case "menu-section": 
            html.classList.add(extraDataObject.menuSectionExtraClass);
            break;

        case "menu-section-heading-container":
            html.classList.add(extraDataObject.menuSectionHeadingContainerExtraClass);
            break;

        case "menu-section-heading":
            html.innerHTML = extraDataObject.menuSectionHeadingText;
            break;    
    };
};

export {
    menuAddExtraData
};