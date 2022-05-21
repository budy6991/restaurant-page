import navBar from "./navbar";
import createDiv from './creatediv'
import getElements from './getElements' 
import eventHandler from './eventHandler'


navBar()

eventHandler.createMenuListener()
eventHandler.createContactListener()

getElements.getContent().append(createDiv('LA-CASA-DI-MAMMA'), createDiv('Autentica-cucina-italiana'))





