import { sectionOneData } from "./sectionOneData";
import { elementCreator } from "./elementCreator";

const sectionOneConstructor = (() => {
    const section = elementCreator.makeSection(sectionOneData.name);
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
    };

    const fillSection = () => {
        fillDivOne();
        section.append(divOne);
    };

    return {
        section,
        fillSection
    };
})();

export {
    sectionOneConstructor
};