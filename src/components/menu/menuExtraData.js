import { elementExtraData } from "../global/elementExtraData";

const menuExtraData = dataMark => {
    let extraDataObject = elementExtraData(dataMark);
    extraDataObject.menuSectionExtraClass = `menu-${dataMark}`;
    extraDataObject.menuSectionHeadingContainerExtraClass = `${dataMark}-heading`;
    extraDataObject.menuSectionHeadingText = `${dataMark.charAt(0).toUpperCase() + dataMark.slice(1)}`;
    return extraDataObject;
};

export {
    menuExtraData
};