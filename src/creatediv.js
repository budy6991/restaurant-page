let removeHyphen = str =>  str.split('-').join(' ')

export default function createDiv (content) {
    const div = document.createElement('div')
    div.textContent = removeHyphen(content)
    div.classList.add(content.toLowerCase())
    return div
}

