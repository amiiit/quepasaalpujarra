import './popup.scss'

export default class Popup {

  constructor({el}) {
    this.dom = {}
    this.dom.wrapper = el
    this.dom.close = this.dom.wrapper.getElementsByClassName('close-button')[0]
    this.dom.content = this.dom.wrapper.getElementsByClassName('popup-content')[0]
    const clickClosingElements = [this.dom.wrapper, this.dom.close]
    clickClosingElements.forEach(i => i.addEventListener('click', () => {
      this.close()
    }))

    this.dom.content.addEventListener('click', (e) => {
      e.stopPropagation()
    })
  }

  handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      this.close()
    }
  }

  open(contentId) {
    this.dom.wrapper.classList.add('opened')
    document.body.addEventListener('keydown', this.handleKeyDown)
    this.dom.content.querySelectorAll('.popup-section').forEach(section => {
      if (section.classList.contains(contentId)) {
        section.classList.remove('hidden')
      } else {
        section.classList.add('hidden')
      }
    })
    document.body.classList.add('noscroll')
  }

  close() {
    this.dom.wrapper.classList.remove('opened')
    document.body.removeEventListener('keydown', this.handleKeyDown)
    document.body.classList.remove('noscroll')
  }

}