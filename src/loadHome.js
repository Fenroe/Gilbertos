import { sectionOneConstructor } from "./sectionOneConstructor";
import { sectionTwoConstructor } from "./sectionTwoConstructor";
import { sectionThreeConstructor } from "./sectionThreeConstructor";

const content = document.getElementById("content");

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