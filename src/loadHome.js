import { sectionOneConstructor } from "./components/home/sectionOneConstructor";
import { sectionTwoConstructor } from "./components/home/sectionTwoConstructor";
import { sectionThreeConstructor } from "./components/home/sectionThreeConstructor";
import { content } from "./components/global/sharedVariables";

const loadHome = () => {
    sectionOneConstructor.fillSection();
    sectionTwoConstructor.fillSection();
    sectionThreeConstructor.fillSection();
    content.append(
        sectionOneConstructor.section,
        sectionTwoConstructor.section,
        sectionThreeConstructor.section
    );
};

export {
    loadHome
};