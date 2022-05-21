import getElements from "./getElements"
import displayMenu from "./displayMenu"
import displayContacts from "./displayContacts"
import mainPage from "./main-module"

export default {
    createMenuListener() {
        getElements.getMenu().addEventListener('click', displayMenu)
    },

    createContactListener() {
        getElements.getContact().addEventListener('click', displayContacts)
    },

    createIconListener(){
        getElements.getIcon().addEventListener('click', mainPage)
    }


}