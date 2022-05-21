import navBar from "./navbar";
import createDiv from './creatediv'
import getElements from './getElements' 
import eventHandler from './eventHandler'
import removeChildren from "./removeChildren";



export default function mainPage() {

removeChildren(getElements.getContent())

navBar()

eventHandler.createMenuListener()
eventHandler.createContactListener()
eventHandler.createIconListener()

getElements.getContent().append(createDiv('LA-CASA-DI-MAMMA'), createDiv('Autentica-cucina-italiana'))

}



