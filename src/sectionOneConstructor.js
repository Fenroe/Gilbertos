import { sectionOneData } from "./sectionOneData";
import { elementCreator } from "./elementCreator";

const sectionOneConstructor = (() => {
    const content = document.getElementById("content");
    const parent = elementCreator.makeSection(sectionOneData.name);
    const divOne = elementCreator.makeDiv(sectionOneData.divOne.name);
    const divOneHeading = elementCreator.makeText(
        sectionOneData.divOne.elementOneTag,
        sectionOneData.divOne.elementOneText,
        sectionOneData.divOne.elementOneName
    );
    const divOneSubheading = elementCreator.makeText(
        sectionOneData.divOne.elementTwoTag,
        sectionOneData.divOne.elementTwoText,
        sectionOneData.divOne.elementTwoName
    );

    const fillDivOne = () => {
        divOne.append(divOneHeading);
        divOne.append(divOneSubheading);
    }

    const fillSection = () => {
        fillDivOne();
        parent.append(divOne);
        content.append(parent);
    }

    return {
        fillSection
    }
})();

export {
    sectionOneConstructor
};