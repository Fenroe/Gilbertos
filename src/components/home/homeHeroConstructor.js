import { homeHeroData } from "./homeHeroData";
import { elementCreator } from "../global/elementCreator";

const homeHeroConstructor = (() => {
    const section = elementCreator.makeContainer(homeHeroData.tag, homeHeroData.name);
    const divOne = elementCreator.makeContainer(homeHeroData.divOne.tag, homeHeroData.divOne.name);
    const divOneHeading = elementCreator.makeText(
        homeHeroData.divOne.elementOneTag,
        homeHeroData.divOne.elementOneText,
        homeHeroData.divOne.elementOneName
    );
    const divOneSubheading = elementCreator.makeText(
        homeHeroData.divOne.elementTwoTag,
        homeHeroData.divOne.elementTwoText,
        homeHeroData.divOne.elementTwoName
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
    homeHeroConstructor
};