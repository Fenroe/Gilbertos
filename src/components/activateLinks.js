import { content } from "./global/sharedVariables";
import { appendHome } from "./home/appendHome";
import { appendMenu } from "./menu/appendMenu";

const activateLinks = element => {
    element.addEventListener("click", () => {
        content.innerHTML = "";
        if(element.dataset.target === "home") {
            appendHome();
        };
        if(element.dataset.target === "menu") {
            appendMenu();
        };
    });
};

export {
    activateLinks
};