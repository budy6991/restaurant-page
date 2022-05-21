import navBar from "./navbar";
import removeChildren from "./removeChildren";
import getElements from "./getElements";
import createDiv from "./creatediv";
import eventHandler from "./eventHandler";

export default function () {
    removeChildren(getElements.getContent())
    navBar()
    getElements.getContent().append(createDiv('Spaghetti-Alla-Bolognese'), createDiv('Spaghetti-alla-genovese'), createDiv('Lasagna-di-paese'), createDiv('Gnocci'))
    eventHandler.createContactListener()
}