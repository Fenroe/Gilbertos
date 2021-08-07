import { homeHeroConstructor } from "./components/home/homeHeroConstructor";
import { homeStoryConstructor } from "./components/home/homeStoryConstructor";
import { homeCtaConstructor } from "./components/home/homeCtaConstructor";
import { content } from "./components/global/sharedVariables";

const loadHome = () => {
    homeHeroConstructor.fillSection();
    homeStoryConstructor.fillSection();
    homeCtaConstructor.fillSection();
    content.append(
        homeHeroConstructor.section,
        homeStoryConstructor.section,
        homeCtaConstructor.section
    );
};

export {
    loadHome
};