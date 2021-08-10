import { menuAddExtraData } from "../menu/addSpecialCases"

const addExtraData = (element, html, extraDataObject) => {
    switch(extraDataObject.marker) {
        case "starters": case "mains": case "desserts":
            menuAddExtraData(extraDataObject, element, html);
            break;
        default: 
            return;
    };
};

export {
    addExtraData
};