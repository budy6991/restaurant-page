import navBar from "./navbar";
import removeChildren from "./removeChildren";
import getElements from "./getElements";
import createDiv from "./creatediv";
import eventHandler from "./eventHandler";

export default function () {
    removeChildren(getElements.getContent())
    navBar()
    getElements.getContent().appendChild(createDiv('imageOne'))
    eventHandler.createContactListener()
}