import navBar from "./navbar";
import removeChildren from "./removeChildren";
import getElements from "./getElements";
import createDiv from "./creatediv";
import eventHandler from "./eventHandler";

let name = document.createElement('H2')
name.textContent = 'La casa di Mamma'

let address = document.createElement('p')
address.textContent = 'Via del Corso, 47, Roma'

let phoneNumber = document.createElement('p')
phoneNumber.textContent = '+39 788855522336'

let email = document.createElement('p')
email.textContent = 'thisisafakeemail@fakeemail.fake'

export default function () {
    removeChildren(getElements.getContent())
    navBar()
    getElements.getContent().appendChild(createDiv('Contact-information')).append(name, address, phoneNumber, email)
    eventHandler.createMenuListener()
}