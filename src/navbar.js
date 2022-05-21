import createDiv from './creatediv'
import getElements from './getElements'


export default function navBar () {
    getElements.getContent().append(createDiv('MENU'), createDiv('CONTACT'))
}
