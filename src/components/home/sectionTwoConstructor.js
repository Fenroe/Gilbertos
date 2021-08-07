import { sectionTwoData } from "./sectionTwoData";
import { elementCreator } from "../global/elementCreator";

const sectionTwoConstructor = (() => {
    const section = elementCreator.makeSection(sectionTwoData.name);
    const divOne = elementCreator.makeDiv(sectionTwoData.divOne.name);
    const divOneTitle = elementCreator.makeText(
        sectionTwoData.divOne.elementOneTag,
        sectionTwoData.divOne.elementOneText,
        sectionTwoData.divOne.elementOneName
    )
    const fillDivOne = () => {
        divOne.append(divOneTitle);
    };
    const divTwo = elementCreator.makeDiv(sectionTwoData.divTwo.name);
    const divTwoImage = elementCreator.makeImage(
        sectionTwoData.divTwo.elementOneSource,
        sectionTwoData.divTwo.elementOneAlt,
        sectionTwoData.divTwo.elementOneName
    );
    const fillDivTwo = () => {
        divTwo.append(divTwoImage);
    }
    const divThree = elementCreator.makeDiv(sectionTwoData.divThree.name);
    const divThreeText = elementCreator.makeText(
        sectionTwoData.divThree.elementOneTag,
        sectionTwoData.divThree.elementOneText,
        sectionTwoData.divThree.elementOneName
    );

    const fillDivThree = () => {
        divThree.append(divThreeText);
    };

    const fillSection = () => {
        fillDivOne();
        fillDivTwo();
        fillDivThree();
        section.append(divOne, divTwo, divThree);
    };

    return {
        section,
        fillSection
    }
})();

export {
    sectionTwoConstructor
};