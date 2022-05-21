import getElements from "./getElements"
import displayMenu from "./displayMenu"
import displayContacts from "./displayContacts"

export default {
    createMenuListener() {
        getElements.getMenu().addEventListener('click', displayMenu)
    },

    createContactListener() {
        getElements.getContact().addEventListener('click', displayContacts)
    }
}