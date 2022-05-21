import navBar from "./navbar";
import createDiv from './creatediv'
import getElements from './getElements' 
import eventHandler from './eventHandler'

export default function mainPage() {

navBar()

eventHandler.createMenuListener()
eventHandler.createContactListener()

getElements.getContent().append(createDiv('LA-CASA-DI-MAMMA'), createDiv('Autentica-cucina-italiana'))

}



