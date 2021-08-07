import { elementCreator } from "../global/elementCreator";
import { sectionThreeData } from "./sectionThreeData";

const sectionThreeConstructor = (() => {
    const section = elementCreator.makeSection(sectionThreeData.name);
    const divOne = elementCreator.makeDiv(sectionThreeData.divOne.name);
    const subDivOne = elementCreator.makeDiv(sectionThreeData.divOne.subDivOne.name);
    const linkOne = elementCreator.makeLink(
        sectionThreeData.divOne.subDivOne.elementOneHref,
        sectionThreeData.divOne.subDivOne.elementOneText
    );
    const fillSubDivOne = () => {
        subDivOne.append(linkOne);
    };

    const fillDivOne = () => {
        fillSubDivOne();
        divOne.append(subDivOne);
    };

    const divTwo = elementCreator.makeDiv(sectionThreeData.divTwo.name);
    const subDivTwo = elementCreator.makeDiv(sectionThreeData.divTwo.subDivOne.name);
    const linkTwo = elementCreator.makeLink(
        sectionThreeData.divTwo.subDivOne.elementOneHref,
        sectionThreeData.divTwo.subDivOne.elementOneText
    );
    const fillSubDivTwo = () => {
        subDivTwo.append(linkTwo);
    };

    const fillDivTwo = () => {
        fillSubDivTwo();
        divTwo.append(subDivTwo);
    };

    const fillSection = () => {
        fillDivOne();
        fillDivTwo();
        section.append(divOne, divTwo);
    };

    return {
        section,
        fillSection
    };

})();

export {
    sectionThreeConstructor
};