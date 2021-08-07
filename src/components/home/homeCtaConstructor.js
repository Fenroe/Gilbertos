import { elementCreator } from "../global/elementCreator";
import { homeCtaData } from "./homeCtaData";

const homeCtaConstructor = (() => {
    const section = elementCreator.makeContainer(homeCtaData.tag, homeCtaData.name);
    const divOne = elementCreator.makeContainer(homeCtaData.divOne.tag, homeCtaData.divOne.name);
    const subDivOne = elementCreator.makeContainer(homeCtaData.divOne.subDivOne.tag, homeCtaData.divOne.subDivOne.name);
    const linkOne = elementCreator.makeLink(
        homeCtaData.divOne.subDivOne.elementOneHref,
        homeCtaData.divOne.subDivOne.elementOneText
    );
    const fillSubDivOne = () => {
        subDivOne.append(linkOne);
    };

    const fillDivOne = () => {
        fillSubDivOne();
        divOne.append(subDivOne);
    };

    const divTwo = elementCreator.makeContainer(homeCtaData.divTwo.tag, homeCtaData.divTwo.name);
    const subDivTwo = elementCreator.makeContainer(homeCtaData.divTwo.subDivOne.tag, homeCtaData.divTwo.subDivOne.name);
    const linkTwo = elementCreator.makeLink(
        homeCtaData.divTwo.subDivOne.elementOneHref,
        homeCtaData.divTwo.subDivOne.elementOneText
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
    homeCtaConstructor
};