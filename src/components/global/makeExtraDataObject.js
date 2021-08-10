import { menuExtraData } from "../menu/menuExtraData";

const makeExtraDataObject = dataMark => {
    switch(dataMark) {
        case "starters": case "mains": case "desserts":
            return menuExtraData(dataMark);
        default: 
            return 0;
    };
};

export {
    makeExtraDataObject
};