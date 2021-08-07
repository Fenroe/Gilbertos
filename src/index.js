import { elementCreator } from "./elementCreator";
import { sectionOneData } from "./sectionOneData";
import "./components/main.css";

const content = document.getElementById("content");

let section = elementCreator.makeSection(sectionOneData.name);
content.append(section);
let div = elementCreator.makeDiv(sectionOneData.divOne.name);
section.append(div);
let heading = elementCreator.makeText(
    sectionOneData.divOne.elementOneTag,
    sectionOneData.divOne.elementOneText,
    sectionOneData.divOne.elementOneName
);
div.append(heading);
let subheading = elementCreator.makeText(
    sectionOneData.divOne.elementTwoTag,
    sectionOneData.divOne.elementTwoText,
    sectionOneData.divOne.elementTwoName
);
div.append(subheading);



