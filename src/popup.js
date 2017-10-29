import './popup.scss'

export default class Popup {

  constructor({el}) {
    this.dom = {}
    this.dom.wrapper = el
    this.dom.close = this.dom.wrapper.getElementsByClassName('close-button')[0]
    this.dom.content = this.dom.wrapper.getElementsByClassName('popup-content')[0]
    this.dom.close.addEventListener('click', () => {
      this.close()
    })
  }

  handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      this.close()
    }
  }

  open(contentId) {
    this.dom.wrapper.classList.add('opened')
    this.dom.content.innerHTML = `<h2>${contentId}</h2>`
    document.body.addEventListener('keydown', this.handleKeyDown)
  }

  close() {
    this.dom.wrapper.classList.remove('opened')
    document.body.removeEventListener('keydown', this.handleKeyDown)
  }

}