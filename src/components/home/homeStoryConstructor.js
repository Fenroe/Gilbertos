import { homeStoryData } from "./homeStoryData";
import { elementCreator } from "../global/elementCreator";

const homeStoryConstructor = (() => {
    const section = elementCreator.makeContainer(homeStoryData.tag, homeStoryData.name);
    const divOne = elementCreator.makeContainer(homeStoryData.divOne.tag, homeStoryData.divOne.name);
    const divOneTitle = elementCreator.makeText(
        homeStoryData.divOne.elementOneTag,
        homeStoryData.divOne.elementOneText,
        homeStoryData.divOne.elementOneName
    )
    const fillDivOne = () => {
        divOne.append(divOneTitle);
    };
    const divTwo = elementCreator.makeContainer(homeStoryData.divTwo.tag, homeStoryData.divTwo.name);
    const divTwoImage = elementCreator.makeImage(
        homeStoryData.divTwo.elementOneSource,
        homeStoryData.divTwo.elementOneAlt,
        homeStoryData.divTwo.elementOneName
    );
    const fillDivTwo = () => {
        divTwo.append(divTwoImage);
    }
    const divThree = elementCreator.makeContainer(homeStoryData.divThree.tag, homeStoryData.divThree.name);
    const divThreeText = elementCreator.makeText(
        homeStoryData.divThree.elementOneTag,
        homeStoryData.divThree.elementOneText,
        homeStoryData.divThree.elementOneName
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
    homeStoryConstructor
};