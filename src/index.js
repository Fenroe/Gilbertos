/* import { loadNav } from "./loadNav";
import { loadHome } from "./loadHome";
import "./master.css";

loadNav();
loadHome();
*/

import { menuSection } from "./components/menu/menuSection";
import { content } from "./components/global/sharedVariables";
import { elementAppender } from "./components/global/elementAppender";

elementAppender(menuSection, content);