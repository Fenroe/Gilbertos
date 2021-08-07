import { siteNavConstructor } from "./components/nav/siteNavConstructor";
import { header } from "./components/global/sharedVariables";

const loadNav = () => {
    siteNavConstructor.fillNav();
    header.append(siteNavConstructor.nav);
};

export {
    loadNav
};